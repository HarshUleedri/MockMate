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
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useSubject } from '@/Context/SubjectContext';
import { useRouter } from 'next/navigation';

const SelectSubject = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const { setSubjectName } = useSubject();
  const router = useRouter();

  const configSubject = () => {
    if (!selectedValue) {
      return;
    }
    setSubjectName(selectedValue);
    router.push('/select-level');
  };
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center">
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
      <Button className='mt-4' onClick={() => configSubject()}>
        Next <ArrowRight />
      </Button>
    </div>
  );
};

export default SelectSubject;
