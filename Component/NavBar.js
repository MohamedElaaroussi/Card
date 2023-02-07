import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';
import styled from 'styled-components';


const NavBar = () => {

    const Title = styled.h3`
        font-weight : bold
    `
    const ButtonCart = styled.button`
        width : 7rem;
        height : 2.2rem;
        background-color :#AF02E3;
    `


    return (
        <div>
            <Navbar bg="light" expand="lg" className='py-3'>
                <Container>
                    <Navbar.Brand href="#"> <Title> Start Bootstrap </Title> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Shop" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <ButtonCart>
                                <HiShoppingCart className='mx-1' />
                                Cart
                            </ButtonCart>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar