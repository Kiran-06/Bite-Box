import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Logo from './images/logo.png';
import './App.css';



const App = () => {
  return (

    <div>
      <img src={Logo} alt="Logo" className="h-10" />
      <Navbar />
    </div>
  );
};


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/LoginPage" element={<LoginPage />} />
//         <Route path="/FeedbackForm" element={<FeedbackForm />} />
//         <Route path="/categories" element={<Categories />} />
//       </Routes>
//     </Router>
//   );
// };

export default App;

