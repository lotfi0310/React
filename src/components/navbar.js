import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function  NavigationBar(){
    
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href='products'>MyStore</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <NavLink
            to="/products"
             style={({isActive})=>({
              color : isActive ? "gray":"black"
            })}
          >
            Products
          </NavLink>
         
        </Nav.Item>
        <Nav.Item >
        <NavLink
         as={NavLink}
         to="/products/add"
         style={({ isActive }) => ({
           textDecoration: isActive && "underline",
         })} >add Product</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>

    
  )
}

export default NavigationBar;
