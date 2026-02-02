import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';
import { headers } from 'next/headers';
import { UserType } from '@/components/ui/ProfileIcon';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});

export async function getCurrentUser(): Promise<UserType | undefined> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
}
