import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className='mt-2 p-2'>
                    <Link to='/home'><img className='w-25' src={logo} alt="" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink
                                    className="text-decoration-none text-dark"
                                    to="/cart"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Cart
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="text-decoration-none text-dark"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <div className="btn btn-danger">Sign Up</div>
                                </NavLink>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;