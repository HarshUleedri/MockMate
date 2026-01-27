'use client';

import { LiveCamera } from './LiveCamera';
import { useRef, useState } from 'react';
import { MediaPermissionError } from './MediaPermissionError';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Level } from '@prisma/client';

export type CameraError =
  | 'PERMISSION_DENIED'
  | 'NO_DEVICE'
  | 'DEVICE_BUSY'
  | 'UNKNOWN';

type questionObjectDataType = {
  id: number;
  level: Level;
  question: string;
  referenceAnswer: string;
  tags: string[];
};

interface InterviewQuestionListPropsType {
  id: number;
  question: questionObjectDataType;
  questionId: number;
  sessionId: number;
}

export const InterviewQuestionList = ({
  questions,
}: {
  questions: InterviewQuestionListPropsType[];
}) => {
  //state
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  //video stream data
  const [stream, setStream] = useState<MediaStream | null>(null);
  const recordingChunks = useRef<BlobPart[]>([]);
  const answerRecordingRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [answerRecordingBlob, setAnswerRecordingBlob] = useState<Blob | null>(
    null
  );

  //loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //hook
  const router = useRouter();

  // helper function
  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    }
    return;
  };

  const startRecording = () => {
    if (!stream) return;
    recordingChunks.current = [];
    setIsRecording(true);
    const recorder = new MediaRecorder(stream);
    answerRecordingRef.current = recorder;

    recorder.ondataavailable = (e) => recordingChunks.current.push(e.data);

    recorder.onstop = () => {
      const blob = new Blob(recordingChunks.current, { type: 'video/webm' });
      setIsRecording(false);
      submitblog(blob);
    };

    recorder.start();
  };
  const submitblog = async (videoBlob: Blob) => {
    const formData = new FormData();
    formData.append('video', videoBlob);
    formData.append('questionId', `${questions[questionNumber].question.id}`);
    formData.append('sessionId', `${questions[questionNumber].sessionId}`);

    try {
      setIsLoading(true);
      const res = await fetch('/api/answer', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('answer submit failed');
      }

      const data = await res.json();
      setQuestionNumber((prev) =>
        prev < questions.length - 1 ? prev + 1 : prev
      );

      if (questionNumber === questions.length - 1) {
        // return (window.location.href = `/${questions[questionNumber]?.sessionId}/completed`);

        return router.replace(
          `/${questions[questionNumber]?.sessionId}/completed`
        );
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const submitAnswer = () => {
    if (!answerRecordingRef.current) return;
    answerRecordingRef.current.stop();
  };
  return (
    <>
      {mediaError !== null ? (
        <MediaPermissionError error={mediaError} />
      ) : (
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 lg:flex-row lg:gap-0">
          <div className="w-full max-w-3xl shrink-0 space-y-4 px-4 pt-12 lg:h-screen">
            <div>
              <p className="space-x-2 text-xl wrap-break-word">
                <span>{questionNumber + 1}.</span>
                <span>{questions[questionNumber].question.question}</span>
              </p>
            </div>
            <LiveCamera
              stream={stream}
              setStream={setStream}
              setMediaError={setMediaError}
            />

            <div className="space-x-4">
              <Button
                onClick={startRecording}
                disabled={isRecording}
                variant={'default'}
                className={`${isRecording && 'animate-pulse cursor-not-allowed border bg-red-600 font-semibold text-white hover:bg-white hover:text-red-600 disabled:opacity-100'}`}
              >
                {isRecording ? 'Recording ...' : 'Start Recording'}
              </Button>
              <Button onClick={submitAnswer} variant={'outline'}>
                {isLoading ? (
                  <Loader2Icon className="size-5 animate-spin" />
                ) : (
                  'Submit Answer'
                )}
              </Button>
            </div>
            {/* <Button
              disabled={questionNumber === questions.length - 1}
              onClick={nextQuestion}
            >
              Next Question
            </Button> */}
          </div>
          <div className="w-full border-y-2 px-4 py-20 lg:h-screen lg:border-x-2">
            <div className="flex flex-wrap gap-4">
              {questions?.map(({ question }, idx) => (
                <span
                  className={`rounded px-2 py-1 text-white ${idx < questionNumber ? 'bg-green-500' : idx === questionNumber ? 'bg-gray-500' : 'bg-gray-300'}`}
                  key={question.id}
                >
                  {idx + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
