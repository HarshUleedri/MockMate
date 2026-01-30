'use client';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { signIn } from '@/lib/auth-client';
import { boolean } from 'better-auth';
import { Github, Loader2Icon } from 'lucide-react';
import { useState } from 'react';

export default function Signin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const signin = async () => {
    try {
      setIsLoading(true);
      const data = await signIn.social({
        provider: 'github',
        callbackURL: '/dashboard',
      });
      console.log(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-auto w-full max-w-lg">
      <Card className="mt-56 text-center">
        <CardHeader>
          <h1 className="text-xl font-semibold">Welcome To MockMate</h1>
          <p>Login with GitHub or Google</p>
        </CardHeader>
        <CardContent>
          <Button onClick={signin} className="w-full">
            {isLoading ? (
              <Loader2Icon className="size-5 animate-spin" />
            ) : (
              <>
                <Github />
                <span>Login with GitHub</span>
              </>
            )}
          </Button>
          {error && <p>{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
