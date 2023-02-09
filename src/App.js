import "./App.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Menu from "./Components/Menu/Menu";


function App() {



  
  return (
    
    <div className="full-app">
    <Navbar bg="light" expand="lg" fixed="top" >
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar">
          <Nav.Link href="#">All Items</Nav.Link>
          <Nav.Link href="#">Entrees</Nav.Link>
          <Nav.Link href="#">Desserts</Nav.Link>
          <Nav.Link href="#">Sides</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div>
    <Menu />;
    </div>
    </div>
  );
}




export default App;
