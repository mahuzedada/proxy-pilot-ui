import { useState, useEffect, ChangeEvent } from 'react';

export default function useFormState<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    setIsEdited(
      Object.keys(values as any).some(
        (key: string) => (values as any)[key] !== (initialValues as any)[key]
      )
    );
  }, [values, initialValues]);

  const handleChange =
    (field: keyof T) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((prevValues) => ({ ...prevValues, [field]: e.target.value }));
    };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, isEdited, reset };
}
