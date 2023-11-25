import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { RegisterOptions, useController } from 'react-hook-form';
import { Size } from './variationTypes';
import formatFieldNameToLabel from './FIelds/formatFieldNameToLabel';
import getUniqueId from '../../getUniqueId';

type Props = {
  name: string;
  label?: string;
  size?: Size;
  rules?: RegisterOptions;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function SelectField({
  name,
  rules,
  label,
  options,
  placeholder,
  defaultValue,
}: Props) {
  const { field } = useController({
    name,
    defaultValue,
    rules,
  });

  const labelText = label || formatFieldNameToLabel(name);
  const placeholderText = placeholder || `${labelText}...`;

  return (
    <div className="flex flex-col md:flex-row md:items-center mb-4">
      <label
        className="block text-sm font-bold md:flex-none md:w-1/3 mb-1 md:mb-0 mr-2 text-gray-700 dark:text-gray-300"
        htmlFor={name}
      >
        {labelText}
      </label>
      <div className="flex-grow">
        <Listbox {...field}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {field.value || placeholderText}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {options.map((item) => (
                  <Listbox.Option
                    key={getUniqueId()}
                    className={({ active, selected }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 cursor-pointer ${
                        active || selected
                          ? 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                          : 'text-gray-400 dark:text-gray-400'
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700 dark:text-gray-300">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
