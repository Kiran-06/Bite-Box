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
import FeedbackForm from './components/pages/Feedback';
import { FeedbackProvider } from './components/contexts/FeedbackContext';
import FeedbackList from './components/pages/FeedbackList';
import Cart from './components/pages/cart';
import { CartProvider } from './components/contexts/CartContext';
import Checkout from './components/pages/CheckoutPage';
import Payment from './components/pages/Payment';
import { PaymentProvider } from './components/contexts/PaymentContext';
import Success from './components/pages/Success';
import Deals from './components/pages/Deals';
import ItemPage from './components/pages/ItemPage';
import FAQ from './components/pages/FAQ';
import ContactUs from './components/pages/ContactUs';
import LiveChat from './components/pages/LiveChat';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <UmsProvider>
            <CartProvider>
              <PaymentProvider>

                <Routes>
                  <Route path="/" element={<Layout />}>

                    {/* Public Routes */}
                    <Route index element={<Home />} />
                    <Route path="/Deals" element={<Deals />} />
                    <Route path="auth" element={<LoginSignUp />} />

                    <Route path="/item/:id" element={
                      <ItemPage />
                    } />

                    <Route path="Feedback" element={
                      <FeedbackProvider>
                        <FeedbackForm />
                        <hr />
                        <FeedbackList />
                      </FeedbackProvider>
                    } />

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

                    {/* Cart Route */}
                    <Route path="cart" element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    } />

                    <Route path="CheckoutPage" element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    } />
                    <Route path="Payment" element={
                      <ProtectedRoute>
                        <Payment />
                      </ProtectedRoute>
                    } />
                    <Route path="success" element={<Success />} />

                    {/* Protected Routes */}
                    <Route path="cart" element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    } />

                    <Route path='*' element={<NoPage />} />

                    {/* Admin Routes */}
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

                    <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/ContactUS" element={<ContactUs />} />
                    <Route path="/LiveChat" element={<LiveChat />} />


                  </Route>
                </Routes>

              </PaymentProvider>
            </CartProvider>
          </UmsProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
