import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { session } = useAuth();
  if (!session) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
