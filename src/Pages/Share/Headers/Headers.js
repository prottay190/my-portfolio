import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaOm } from 'react-icons/fa';

const Headers = () => {
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='p-2'>
                    <Navbar.Brand style={{fontFamily: ' Georgia, serif'}}><FaOm style={{fontSize: '25px', marginTop: '-10px', marginRight: '10px' }} /> <span>WelCome Prottay Portfolio</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink style={{ textDecoration: 'none', color: '#fff', fontSize: '18px', margin: '5px' }} to="/home"> Home</NavLink>
                            <NavLink style={{ textDecoration: 'none', color: '#fff',fontSize: '18px', margin: '5px'  }} to="/blogs"> Blogs</NavLink>
                            <NavLink as={HashLink}  style={{ textDecoration: 'none', color: '#fff',fontSize: '18px', margin: '5px'  }} to="/home#about">About</NavLink>
                            <a href="https://drive.google.com/file/d/1f8psTzX0fwH1cEtlbkz-GSPgc5zHTjQ6/view?usp=sharing" target="_blank" rel='noreferrer'>
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