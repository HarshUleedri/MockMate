'use client';
import { LogOut } from 'lucide-react';
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

import { signOut } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export interface UserType {
  id: string;
  userId?: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ProfileType {
  user: UserType;
}

export default function Profile({ user }: ProfileType) {
  const handleLogout = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            redirect('/login'); // redirect to login page
          },
        },
      });
    } catch (error) {
      console.log(error, 'something went wrong');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={`${user?.image}`} alt={`${user?.name}`} />
            <AvatarFallback>{`${user?.name[0]}`}</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={'/profile'}>Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Button
            className="w-full text-red-500"
            onClick={handleLogout}
            variant={'ghost'}
            size={'sm'}
          >
            <LogOut /> Log out
          </Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
