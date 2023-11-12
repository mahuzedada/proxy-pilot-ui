import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  title: string;
  isEdited: boolean;
  children: ReactNode | ReactNode[];
  onCancel: () => void;
  onSave: MouseEventHandler<HTMLButtonElement>;
};

export default function Layout({
  title,
  isEdited,
  children,
  onCancel,
  onSave,
}: Props) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {isEdited && (
          <div>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded mr-2"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold px-4 rounded"
              type="submit"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
