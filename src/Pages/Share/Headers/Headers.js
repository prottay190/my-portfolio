import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Headers = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>WelCome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/home"> Home</Nav.Link>
                            <a href="https://drive.google.com/file/d/18C3AF2ALcV1Xyvz9SPLe7xwg3jyEjTtM/view?usp=sharing" target="_blank" rel='noreferrer'>
                                <button type="button" class="btn btn-outline-secondary text-white">Resume</button>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;