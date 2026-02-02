import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Button } from './button';
import Profile, { UserType } from './ProfileIcon';

async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user: UserType | undefined = session?.user;

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
            {user && <Profile user={user} />}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src={`${user?.image}`} alt={`${user?.name}`} />
                    <AvatarFallback>{`${user?.name[0]}${user?.name[user.name.length - 1]}`}</AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Button onClick={handleLogout} variant={'destructive'}>
                    Log out
                  </Button>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu> */}
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
