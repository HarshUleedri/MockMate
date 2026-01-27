'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export default function SubjectsList() {
  const [selectedValue, setSelectedValue] = useState<string>('');
  return (
    <Select value={selectedValue} onValueChange={setSelectedValue}>
      <SelectTrigger className="text-normal w-72 font-medium">
        <SelectValue placeholder="Select Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-normal w-72 font-medium">
          <SelectItem value="Javascript">Javascript</SelectItem>
          <SelectItem value="Typescritp">Typescript</SelectItem>
          <SelectItem value="NextJS">NextJS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
