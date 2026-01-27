import { Button } from '@/components/ui/button';
import { CameraError } from './InterviewQuestionList';
import Link from 'next/link';

interface MediaPermissionErrorPropType {
  error: string;
}

export const MediaPermissionError = ({
  error,
}: MediaPermissionErrorPropType) => {
  const reloadThePage = () => {
    window.location.reload();
  };
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center">
      <div className="border-primary h-full space-y-4 rounded-md border p-4">
        <p className="text-xl font-semibold">Something Went Wrong</p>
        <p className="text-lg">{error}</p>
        <div className="flex gap-4">
          <Button onClick={reloadThePage}>Reload</Button>
          <Button>
            <Link href={'/permission-help'}>Need Help</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
