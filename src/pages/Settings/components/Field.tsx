import { ChangeEvent } from 'react';

type Props = {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default function Field({ label, type, id, value, onChange }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center mb-4">
      <label
        className="block text-gray-700 text-sm font-bold md:flex-none md:w-1/3 mb-1 md:mb-0 mr-2"
        htmlFor={id}
      >
        {label}
      </label>
      {type === 'select' ? (
        <select
          className="shadow border rounded flex-grow py-2 px-3 text-gray-700"
          id={id}
          value={value}
          onChange={onChange}
        >
          {/* Options will be added here later */}
        </select>
      ) : (
        <input
          className="shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700"
          id={id}
          type={type}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
