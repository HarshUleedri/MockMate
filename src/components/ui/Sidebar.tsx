import Link from 'next/link';
import { Button } from './button';

export default function Sidebar() {
  return (
    <div className="flex min-h-screen w-full max-w-64 flex-col gap-4 border-r p-4">
      <Button variant={'ghost'} size={'sm'}>
        <Link href={'/dashboard'}>Dashboard</Link>
      </Button>
      <Button variant={'ghost'} size={'sm'}>
        <Link href={'dashboard/interview'}>Interviews</Link>
      </Button>
    </div>
  );
}
