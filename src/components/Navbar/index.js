import React from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";




const Navbar = ({toggle}) => {
  return (
    <>


  <Nav>
    <NavLink to='/'>Portfolio</NavLink>
    <NavIcon onClick={toggle}>
      <p>Menu</p>
      <Bars/>
      <GlobalStyle/>
    </NavIcon>
  </Nav>
    
  
  </>
  );
 
  
};

export default Navbar;
