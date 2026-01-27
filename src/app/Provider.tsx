import { SubjectProvider } from '@/Context/SubjectContext';
import React from 'react';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubjectProvider>{children}</SubjectProvider>
    </>
  );
}
