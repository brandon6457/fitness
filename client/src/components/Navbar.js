import React from 'react';
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react';
import './Navbar.css';

const Navbar = () => {
  return (
    <CNavbar colorScheme="light" className="bg-light navbar">
      <CContainer fluid>
        <CNavbarBrand  className="navbar-brand">
          <span className="brand-text">Fitness</span>
          <span className="brand-subtext">(into your day)</span>
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;