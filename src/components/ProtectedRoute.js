
// import { useAuth } from './contexts/AuthContext';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';


// export const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const { isAuthenticated } = useAuth();


//   if (!user) {
//     return <Navigate to="/auth" state={{ from: location }} replace />;
//   }


//   if (location.pathname.startsWith('/admin') && !user.isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/auth" />;
//   }


//   return children;
// };




import { useAuth } from './contexts/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // If no user is logged in, navigate to the login page and preserve the intended location
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Admin-only protection
  if (location.pathname.startsWith('/admin') && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  // If no children are passed, render the Outlet
  return children || <Outlet />;
};
