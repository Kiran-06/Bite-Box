import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PromoBanner from './components/PromoBanner';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import Category from './components/Category';
import Fruits from './components/Category/Fruits';
import Deals from './components/Deals';
import FeedbackForm from './components/Feedback';


function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<LoginPage />}> </Route>
            <Route path='/category' element={<Category />} />
            <Route path='/Fruits' element={<Fruits />} />
            <Route path='/Deals' element={<Deals />} />
            <Route path='/Feedback' element={<FeedbackForm />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;