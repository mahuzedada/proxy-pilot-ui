import React from 'react';
import { Switch } from '@headlessui/react';
import formatFieldNameToLabel from './formatFieldNameToLabel';
import { useController } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  defaultValue?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function ToggleField({ name, label, defaultValue }: Props) {
  const { field } = useController({
    name,
    defaultValue,
  });
  const labelText = label || formatFieldNameToLabel(name);

  return (
    <div className="flex gap-2 items-center justify-between w-72">
      <label className="dark:text-gray-300 text-gray-800">{labelText}</label>
      <Switch
        checked={field.value}
        onChange={field.onChange}
        className={`${
          field.value ? 'bg-indigo-500' : 'bg-gray-400 dark:bg-gray-600'
        }
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
           dark:border-gray-600 focus-visible:ring-white/75`}
      >
        <span className="sr-only">{labelText}</span>
        <span
          aria-hidden="true"
          className={`${field.value ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out
            my-auto`}
        />
      </Switch>
    </div>
  );
}
