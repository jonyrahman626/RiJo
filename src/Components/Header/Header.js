import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

const Header = () => {
    return (
        <div>
             <Navbar className="main_menu" expand="lg">
                    <div className="container">
                        <Navbar.Brand href="/">RiJo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Work</Nav.Link>
                                <Nav.Link href="#link">Service</Nav.Link>
                                <Nav.Link href="#link">Testimonial</Nav.Link>
                                <Nav.Link href="#link">News</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
        </div>
    );
}

export default Header;
