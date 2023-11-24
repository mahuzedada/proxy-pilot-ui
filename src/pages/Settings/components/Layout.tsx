import { MouseEventHandler, ReactNode } from 'react';
import Button from '../../../components/utility/Button';

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
    <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        {isEdited && (
          <div className="flex gap-2">
            <Button variant="danger" onClick={onCancel}>
              Cancel
            </Button>
            <Button onClick={onSave} type="submit">
              Save
            </Button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
