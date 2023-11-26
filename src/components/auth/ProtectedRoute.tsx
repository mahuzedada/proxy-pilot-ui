import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
