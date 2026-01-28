'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSubject } from '@/Context/SubjectContext';
import { Play } from 'lucide-react';

export default function SelectLevel() {
  const { level, setLevel, subjectName } = useSubject();

  const handleStartTest = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api/interview-session`, {
      method: 'POST',
      body: JSON.stringify({
        level: level.toLocaleUpperCase(),
        subjectName,
      }),
    });

    if (!res.ok) {
      console.log('Something went wrong');
    }
    const data = await res.json();
    window.location.href = data.redirectURL;
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-2xl font-medium">Select Level</h2>
      <Select value={level} onValueChange={setLevel}>
        <SelectTrigger className="text-normal w-72 font-medium">
          <SelectValue placeholder="select level" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-normal w-72 font-medium">
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
            <SelectItem value="dificult">Difficult</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={handleStartTest} className="mt-4">
        Start Test <Play />
      </Button>
    </div>
  );
}
