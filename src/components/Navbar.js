import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function CollapsibleNavbar() {

  return (
    <Navbar collapseOnSelect bg="white" variant="light" style={{ marginTop: "4vh"}}>
      <Container className='m-auto'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Image src="https://i.postimg.cc/fWqNQ0bk/fhlogo.png" style={{maxHeight: "10vh", marginRight: "1vw"}}/>
          </Nav>
          <Navbar.Brand href="/">FH Model Hub</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;