import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  const { session } = useAuth();
  if (!session) {
    return <Navigate to={`/login?path=${location.pathname}`} />;
  }

  return <>{children}</>;
}
