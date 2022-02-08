import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Navbar/Hero';
import Products from './components/Navbar/products';
import { GlobalStyle } from './GlobalStyle';
import { productData } from './components/Navbar/products/data';
import Feature from './components/Navbar/Feature';
import Footer from './components/Navbar/Footer';





function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Feature />
      <Products heading ='Social Media' data={productData} />
      <Footer />
    </Router>
  );
}

export default App;
