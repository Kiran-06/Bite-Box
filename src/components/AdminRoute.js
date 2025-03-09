import { useAuth } from './contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !user.isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};