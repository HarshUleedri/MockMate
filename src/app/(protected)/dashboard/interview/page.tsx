import { getCurrentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';

export default async function Interviews() {
  const user = await getCurrentUser();
  const userId = user?.id;

  const userInterviews = await prisma.interviewSession.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      {userInterviews.length === 0 ? (
        <p className="mt-8 text-center text-3xl font-semibold">No Interviews</p>
      ) : (
        userInterviews.map((interview, idx) => (
          <Link
            className="bg-background hover:bg-secondary cursor-pointer rounded-md border px-4 py-2 text-xl font-semibold lg:px-8"
            href={`interview/${interview.sessionId}`}
          >
            Interview Session {idx + 1}
          </Link>
        ))
      )}
    </div>
  );
}
