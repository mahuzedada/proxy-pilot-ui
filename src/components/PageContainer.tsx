import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode | ReactNode[];
};
export default function PageContainer({ title, children }: Props) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">{title}</h2>
      {children}
    </div>
  );
}
