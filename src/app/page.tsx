import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="mx-auto min-h-screen max-w-6xl text-center">
      <h1 className="mt-12 mb-2 text-2xl font-medium">MockMate</h1>
      <p className="mx-auto mb-8 w-full max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        temporibus beatae? Delectus, eligendi ab! Tenetur illum necessitatibus
        numquam. Totam, possimus!
      </p>
      <div className="space-x-4">
        <Button variant={'default'}>
          <Link href={'/select-subject'}>Take a Test</Link>
        </Button>
        <Button variant={'outline'} className="space-x-2">
          Contact Us <MessageCircle className="size-4" />{' '}
        </Button>
      </div>
    </section>
  );
}
