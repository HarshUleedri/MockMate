export const runtime = 'nodejs';

import imagekit from '@/lib/imagekit';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  if (!formData) {
    return NextResponse.json({ message: 'No file' }, { status: 400 });
  }

  const videoBlob = formData.get('video') as File;
  const questionId = formData.get('questionId');
  const sessionId = formData.get('sessionId');

  const bytes = await videoBlob.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const videoUrl = await imagekit.upload({
    file: buffer,
    fileName: `sessionId-${sessionId}-questionId${questionId}-answer.webm`,
    folder: `mockmate/sessionId-${sessionId}/questionId-${questionId}`,
  });

  if (!videoUrl) {
    return NextResponse.json(
      {
        error: 'failed to upload answer',
      },
      { status: 502 }
    );
  }

  const answerResponse = await prisma.answer.create({
    data: {
      sessionId: Number(sessionId),
      questionId: Number(questionId),
      answer: videoUrl.url,
    },
  });

  if (!answerResponse) {
    return NextResponse.json(
      {
        error: 'something wrong',
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ data: answerResponse }, { status: 201 });
}
