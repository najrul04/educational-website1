import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container className='py-1'>
    <Navbar.Brand className='text-info fs-4'>Football School</Navbar.Brand>
    <Nav>

      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/home" >Home</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/services">Services</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/about">About Us</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/contact">Contact Us</NavLink>

    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;