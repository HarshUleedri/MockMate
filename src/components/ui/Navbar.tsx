import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Button } from './button';

async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="flex items-center justify-between px-20 py-4">
      <div>
        <Link href={'/'} className="text-lg font-semibold">
          MockMate
        </Link>
      </div>
      <div>
        {session ? (
          <div className="flex items-center gap-4">
            <Button size={'sm'}>
              <Link href={'/dashboard'}>Dashboard</Link>
            </Button>
            <Link className="rouneed-full size-10" href={'/profile'}>
              <img
                className="size-full rounded-full border"
                src={user?.image || ''}
                alt={user?.name}
              />
            </Link>
          </div>
        ) : (
          <Button>
            <Link href={'/signin'}>Sign In</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
