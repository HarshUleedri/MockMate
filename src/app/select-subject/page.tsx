'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { useCallback, useState } from 'react';

const SelectSubject = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const configSubject = () => {
    setError('');
    if (!selectedValue) {
      console.log('work');
      setError('Please Select the Subject.');
      return;
    }
    handleStartTest(selectedValue);
    // setSubjectName(selectedValue);
    // router.push('/select-level');
  };

  const handleStartTest = useCallback(async (selectedValue: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    setIsLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/interview-session`, {
        method: 'POST',
        body: JSON.stringify({
          subjectName: selectedValue,
        }),
      });

      if (!res.ok) {
        setError('Failed to start interview session');
        return;
      }
      const data = await res.json();
      console.log(data);
      window.location.href = data.redirectURL;
    } catch (error: any) {
      setError(error.error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="mx-auto mt-28 flex w-full max-w-xl flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-2xl font-medium">Select Subject</h2>
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger className="text-normal w-72 font-medium">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-normal w-72 font-medium">
            <SelectItem value="javascript">Javascript</SelectItem>
            <SelectItem value="typescript">Typescript</SelectItem>
            <SelectItem value="NextJS">NextJS</SelectItem>
            <SelectItem value="reactjs">React JS</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && (
        <p className="py-2 text-sm font-semibold text-red-600">{error}</p>
      )}
      <Button
        disabled={isLoading}
        className="mt-4"
        onClick={() => configSubject()}
      >
        {isLoading ? <Loader2Icon /> : 'Start Interview'}
      </Button>
    </div>
  );
};

export default SelectSubject;
