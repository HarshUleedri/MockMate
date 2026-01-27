'use client';
import React, { createContext, useContext, useState } from 'react';

type levelType = 'easy' | 'hard' | 'difficult';

type SubjectContextType = {
  subjectName: string;
  setSubjectName: (data: string) => void;
  level: levelType;
  setLevel: (data: levelType) => void;
};

export const SubjectContext = createContext<SubjectContextType | undefined>(
  undefined
);

export function SubjectProvider({ children }: { children: React.ReactNode }) {
  const [subjectName, setSubjectName] = useState<string>('');
  const [level, setLevel] = useState<levelType>('easy');

  const data = {
    subjectName,
    setSubjectName,
    level,
    setLevel,
  };

  return (
    <SubjectContext.Provider value={data}>{children}</SubjectContext.Provider>
  );
}

export const useSubject = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error('useSubject must be used inside SubjectProvider');
  }
  return context;
};
