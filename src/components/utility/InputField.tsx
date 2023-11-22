import React from 'react';
import formatFieldNameToLabel from './FIelds/formatFieldNameToLabel';
import { Size, sizes } from './variationTypes';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import FieldError from './FieldError';

type Props = {
  name: string;
  size?: Size;
  options: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  name,
  label,
  options,
  placeholder,
  size = 'sm',
  ...props
}: Props) {
  const { register } = useFormContext();
  const labelText = label || formatFieldNameToLabel(name);
  const placeholderText = placeholder || `${labelText}...`;

  const inputClassName = ` ${sizes[size]} shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <label
          className="block text-gray-700 text-sm font-bold md:flex-none md:w-1/3 mb-1 md:mb-0 mr-2"
          htmlFor={name}
        >
          {labelText}
        </label>
        <div className="flex-grow">
          <input
            id={name}
            className={inputClassName}
            type="text"
            placeholder={placeholderText}
            {...register(name, options)}
            {...props}
          />
          <FieldError name={name} />
        </div>
      </div>
    </>
  );
}
