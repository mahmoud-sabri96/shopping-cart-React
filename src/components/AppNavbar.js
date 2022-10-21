import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppNavbar = () => {

    const cart = useSelector((state) => state.cart)
    return (
        <Navbar fixed='top' bg="dark" expand="md">
            <Container>
                <Link to="/" className='navbar-brand text-white' >Cart App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='text-white nav-link'>Products </Link>
                        <Link to="cart" className='text-white nav-link'> Cart -({cart.length})</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;