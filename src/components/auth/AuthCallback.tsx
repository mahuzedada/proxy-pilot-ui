import { Navigate, useLocation } from 'react-router-dom';

export default function AuthCallback() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const next = params.get('next');
  if (next) {
    return <Navigate to={next} />;
  }
  return null;
}
