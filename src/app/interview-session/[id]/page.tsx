import prisma from '@/lib/prisma';
import { InterviewQuestionList } from './components/InterviewQuestionList';

export default async function InterviewSession({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const sessionQuestionsData = await prisma.interviewSession.findUnique({
    where: {
      sessionId: id,
    },
    include: {
      sessionQuestion: {
        include: {
          question: true,
        },
      },
    },
  });

  const questionsArray = sessionQuestionsData?.sessionQuestion || [];
  return (
    <div>
      <InterviewQuestionList questions={questionsArray} />
    </div>
  );
}
