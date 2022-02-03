import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Navbar/Hero';
import { Nav } from './components/Navbar/NavbarElements';
import Products from './components/Navbar/products';
import { GlobalStyle } from './GlobalStyle';
import { productData } from './components/Navbar/products/data';




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero/>
      <Products heading ='Social Media' data={productData} />
    </Router>
  );
}

export default App;
