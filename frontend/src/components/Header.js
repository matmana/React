import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './components.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'





function Header() {

    let oldScrollY = 0;

    const [direction, setDirection] = useState(false);

    const controlDirection = () => {
        if (window.scrollY > oldScrollY) {
            setDirection(true);
        } else {
            setDirection(false);
        }
        oldScrollY = window.scrollY;
    }
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) { setColor(true) }
        else { setColor(false) }
    }
    console.log(direction)
    window.addEventListener('scroll', controlDirection);
    window.addEventListener('scroll', changeColor)
    return (
        <header>
            <Navbar bg="light" expand="lg" fixed='top' className = {`header  ${color ? 'header-bg' : ''}`}>
                <Container>
                    <Navbar.Brand href="#home">React Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"> <FontAwesomeIcon icon={faUserNurse} /> Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>


    )
}
export default Header