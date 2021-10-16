import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark">
                <Container className='mt-2 p-2'>
                    <Link to='/home'><img className='w-25' src={logo} alt="" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink
                                    className="text-decoration-none text-dark fs-5"
                                    to="/cart"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Cart<FontAwesomeIcon icon={faCartPlus} />
                                </NavLink>

                                {
                                    !user.email &&
                                    <>
                                        <NavLink
                                            to="/login"
                                            className="text-decoration-none text-dark fs-5"
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


                                    </>
                                }
                                <img className='details-header' src={user.photoURL} alt="" srcset="" />
                                <span>{user.displayName}</span>
                                {
                                    user.email &&
                                    <div>
                                        <div className="btn btn-light" onClick={logout}>logOut</div>
                                    </div>
                                }


                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;