// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Product from './pages/Product';
import Contact from './pages/Contact'
import Userprofile from './pages/Userprofile';
import FAQ from './pages/FAQ';
import Games from './pages/Games';
// import Cart from './pages/Cart'
import NetworkExperts from "./pages/NetworkExperts";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes for your application */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/game" element={<Games />} />
        <Route path="/networkExperts" element={<NetworkExperts />} /> 
      </Routes>
    </Router>
  );
};

export default App;
