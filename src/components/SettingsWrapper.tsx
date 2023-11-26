import { MouseEventHandler, ReactNode } from 'react';
import Button from './utility/Button';
import PageSectionContainer from './PageSectionContainer';

type Props = {
  title: string;
  isEdited: boolean | undefined;
  children: ReactNode | ReactNode[];
  onCancel: () => void;
  onSave: MouseEventHandler<HTMLButtonElement>;
};

export default function SettingsWrapper({
  title,
  isEdited,
  children,
  onCancel,
  onSave,
}: Props) {
  return (
    <PageSectionContainer>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {!!isEdited && (
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
    </PageSectionContainer>
  );
}
