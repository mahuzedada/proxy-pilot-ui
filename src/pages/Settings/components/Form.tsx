import { FormEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function Form({ children, onSubmit }: Props) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
