
import { useAuth } from './contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }


  if (location.pathname.startsWith('/admin') && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return children;
};