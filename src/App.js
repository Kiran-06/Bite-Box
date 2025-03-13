import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Layout from './components/Layout';
import NoPage from './components/pages/NoPage';
import { AuthProvider } from './components/contexts/AuthContext';
import LoginSignUp from './components/pages/LoginSignUp';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminRoute } from './components/AdminRoute';
import AdminDashboard from './components/pages/AdminDashboard';
import { UmsProvider } from './components/contexts/UmsContext';
import UmsDashboard from './components/pages/UmsDashboard';
import Products from './components/pages/Products';
import { CategoryProvider } from './components/contexts/CategoryContext';
import { ProductProvider } from './components/contexts/ProductContext';
import ProductDescription from './components/pages/ProductDescription';



function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route index element={<Home />} />
              <Route path="auth" element={<LoginSignUp />} />
              <Route path="products" element={
                <ProductProvider>
                  <Products />
                </ProductProvider>
              } />
              <Route path="productdesc/:productId" element={
                <ProductProvider>
                  <ProductDescription />
                </ProductProvider>
              } />

              {/* Protected Routes */}
              <Route path='*' element={
                <ProtectedRoute>
                  <NoPage />
                </ProtectedRoute>
              }></Route>

              {/*Admin Routes */}
              <Route path="admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
              <Route path="ums" element={
                <AdminRoute>
                  <UmsProvider>
                    <UmsDashboard />
                  </UmsProvider>
                </AdminRoute>
              } />


            </Route>


          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
