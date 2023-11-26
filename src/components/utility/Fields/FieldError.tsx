import { FieldErrors, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import formatFieldNameToLabel from './formatFieldNameToLabel';

function getErrorMessage(
  errors: FieldErrors<object>,
  name: string,
  label?: string
): string {
  const fieldLabel = label || formatFieldNameToLabel(name);
  if (!errors[name]) {
    return ' ';
  }
  if (errors[name].type === 'required') {
    return `${fieldLabel} is required`;
  }
  return errors[name].message;
}
type Props = {
  name: string;
  label?: string;
};
export default function FieldError({ name, label }: Props) {
  const {
    formState: { errors },
  } = useFormContext();
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(getErrorMessage(errors, name, label));
  });

  return <p className="text-red-500">{message}</p>;
}
