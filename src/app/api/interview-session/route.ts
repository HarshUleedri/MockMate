export const runtime = 'nodejs';

// import { Level } from '@/generated/prisma/enums';
import prisma from '@/lib/prisma';
import { Level } from '@prisma/client';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { level, subjectName } = await req.json();
  const encryptId = crypto.randomUUID();
  // const redirectURL = new URL(`/interview-session/${encryptId}`, req.url);

  const levels = ['EASY', 'MEDIUM', 'HARD'] as const;
  const TOTALQUESTIONS = 20;

  const baseCount = Math.floor(TOTALQUESTIONS / levels.length);
  const remainder = TOTALQUESTIONS % levels.length;

  const sessionData = await prisma.interviewSession.create({
    data: {
      sessionId: encryptId,
    },
  });

  const counts = await prisma.question.groupBy({
    by: ['level'],
    where: {
      tags: { has: subjectName },
    },
    _count: { _all: true },
  });

  const questionArray = await Promise.all(
    levels.map((level, idx) => {
      const total =
        counts.find((count) => count.level === level)?._count._all ?? 0;

      const take = baseCount + (idx < remainder ? 1 : 0);

      if (total <= take) {
        return prisma.question.findMany({
          where: {
            level: level as Level,
            tags: { has: subjectName },
          },
          take,
        });
      }

      const skip = Math.floor(Math.random() * (total - take));

      return prisma.question.findMany({
        where: {
          level: level as Level,
          tags: {
            has: subjectName,
          },
        },
        take: baseCount + (idx < remainder ? 1 : 0),
        skip,
        orderBy: {
          id: 'asc',
        },
      });
    })
  );

  if (questionArray.flat().length > 0) {
    const sessionQuestion = await Promise.all(
      questionArray.flat().map((question) =>
        prisma.sessionQuestion.create({
          data: {
            questionId: question.id,
            sessionId: sessionData.id,
          },
        })
      )
    );
  }

  return NextResponse.json({
    redirectURL: `/interview-session/${encryptId}`,
  });
}
