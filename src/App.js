import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PromoBanner from './components/PromoBanner';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';



function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={LoginPage}></Route>
          </Route>
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;