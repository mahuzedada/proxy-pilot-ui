import React from 'react';
import formatFieldNameToLabel from './formatFieldNameToLabel';
import { Size, sizes } from '../variationTypes';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import FieldError from './FieldError';

type Props = {
  name: string;
  label?: string;
  size?: Size;
  hideLabel?: boolean;
  rules: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  name,
  label,
  rules,
  placeholder,
  size,
  hideLabel,
  ...props
}: Props) {
  const { register } = useFormContext();
  const labelText = label || formatFieldNameToLabel(name);
  const placeholderText = placeholder || `${labelText}...`;

  const inputClassName = ` ${
    sizes[size || 'sm']
  } shadow appearance-none border rounded w-full leading-tight focus:outline-none focus:shadow-outline text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500`;

  const labelClassName =
    'block text-sm font-bold md:flex-none md:w-1/3 mb-1 md:mb-0 mr-2 text-gray-700 dark:text-gray-300';

  return (
    <div className="flex flex-col md:flex-row md:items-center mb-4">
      {!hideLabel && (
        <label className={labelClassName} htmlFor={name}>
          {labelText}
        </label>
      )}

      <div className="flex-grow">
        <input
          id={name}
          className={inputClassName}
          type="text"
          placeholder={placeholderText}
          {...register(name, rules)}
          {...props}
        />
        <FieldError name={name} />
      </div>
    </div>
  );
}
