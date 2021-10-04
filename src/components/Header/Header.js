import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div >
            <Navbar className="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="navigation">

                        <Link className="link" to="/Home">Home</Link>
                        <Link className="link" to="/services">Services</Link>
                        <Link className="link" to="/About">About</Link>
                        <Link className="link" to="/blog"> Blog</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;