import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import RegisterForm from './components/RegisterForm';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Ecomstore from './store/Ecomstore'; // Import Zustand store to get user

function App() {
  const user = Ecomstore((state) => state.user); // Check if user is registered from Zustand

  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Cart" element={user ? <Cart /> : <ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/Checkout" element={user ? <Checkout /> : <ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
