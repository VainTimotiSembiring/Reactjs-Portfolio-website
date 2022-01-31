import React from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";




const Navbar = () => {
  return (
    <>


  <Nav>
    <NavLink to='/'>Portofolio</NavLink>
    <NavIcon>
      <p>Profile</p>
      <Bars/>
      <GlobalStyle/>
    </NavIcon>
  </Nav>
    
  
  </>
  );
 
  
};

export default Navbar;
