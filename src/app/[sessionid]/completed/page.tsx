import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import prisma from '@/lib/prisma';
import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Completed({
  params,
}: {
  params: Promise<{ sessionid: string }>;
}) {
  const { sessionid } = await params;

  const session = await prisma.interviewSession.findFirst({
    where: {
      id: Number(sessionid),
    },
  });

  if (!session) {
    return notFound();
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardContent className="flex flex-col items-center gap-6 text-center">
          <CheckCircleIcon className="size-14 text-green-500" />
          <p className="max-w-72 text-lg font-semibold">
            You Have Interview Completed Successfully
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href={'/'}>Back To Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
