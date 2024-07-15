import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/ABComicIcon.jpg'

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
          <Image
              src={logo} // Ruta a tu imagen
              alt="ABC Comics"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            ABC Comics
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Comics</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
            <Nav.Link href="/creators">Creators</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
