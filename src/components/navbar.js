import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function  NavigationBar(){
    
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href='products'>MyStore</Navbar.Brand>
      <Nav  style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Nav.Item >
          <NavLink
            to="/products"
             style={({isActive})=>({
              color : isActive ? "gray":"black"
            })}
          >
            Products
          </NavLink>
         
        </Nav.Item>
        <Nav.Item  >
       
          <NavLink 
           style={({isActive})=>({
            color : isActive ? "gray":"black"})}
            to="/products/add"
        >add Product</NavLink>
          </Nav.Item>
       
     
      </Nav>
    </Navbar>

    
  )
}

export default NavigationBar;
