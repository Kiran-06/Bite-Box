import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import LoginPage from './Components/LoginPage';
import FeedbackForm from './Components/FeedbackForm';
import './styles.css';
import Categories from './Components/Category';
import CategoryItems from './Components/CategoryItems';
// import './App.css';


const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen flex items-center justify-center p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  </section>
);
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (

    <div>
      <Navbar />
      <Section id="home" title="Home">Welcome to our grocery store!</Section>
      <Section id="categories" title="Categories">
        <Categories onSelectCategory={setSelectedCategory} />
      </Section>
      {selectedCategory && (
        <Section id="categoryItems" title={selectedCategory}>
          <CategoryItems category={selectedCategory} onBack={() => setSelectedCategory(null)} />
        </Section>
      )}
      <Section id="deals" title="Deals">Check out the latest discounts and offers.</Section>
      <Section id="cart" title="Shopping Cart">Your selected items will appear here.</Section>
      <Section id="login" title="Login/Signup">Access your account or create a new one.</Section>
      <Section id="FeedbackForm" title="Feedback">Share your thoughts with us.</Section>
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

