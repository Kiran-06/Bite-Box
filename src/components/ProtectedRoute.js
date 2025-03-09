
import { useAuth } from './contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }


  if (location.pathname.startsWith('/admin') && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};