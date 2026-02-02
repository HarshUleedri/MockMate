import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import prisma from '@/lib/prisma';
import { Divide } from 'lucide-react';

export default async function singleInterview({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // console.log(id);

  const interviewQuestions = await prisma.interviewSession.findFirst({
    where: {
      sessionId: id,
    },
    select: {
      sessionQuestion: {
        include: {
          question: true,
        },
      },
      answer: true,
    },
  });

  if (!interviewQuestions) return null;

  const questionData = interviewQuestions.sessionQuestion.map((sq) => {
    const matchingAnswer = interviewQuestions.answer.find(
      (ans) => ans.questionId === sq.questionId
    );

    return {
      questionId: sq.questionId,
      question: sq.question.question,
      referenceAnswer: sq.question.referenceAnswer,
      userAnswer: matchingAnswer?.answer ?? null,
    };
  });

  console.log(questionData);
  return (
    <div className="space-y-4">
      <Accordion className="w-10/12" type="multiple">
        {questionData.map((question, idx) => (
          <AccordionItem
            className="border px-4 lg:px-8"
            key={question.questionId}
            value={String(question.questionId)}
          >
            <AccordionTrigger>
              {idx + 1}. {question.question}
            </AccordionTrigger>

            <AccordionContent>
              {question.userAnswer ? (
                <video
                  src={question.userAnswer}
                  controls
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                  className="w-full max-w-md rounded-lg"
                />
              ) : (
                <p className="text-muted-foreground text-sm">
                  No answer recorded
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
