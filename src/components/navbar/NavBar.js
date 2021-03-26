import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand>Terrace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Item className="navbar__item active">
                            <Link className="navbar__link" to="/todays_plants">Today</Link>
                        </Nav.Item>
                        <Nav.Item className="navbar__item">
                            <Link className="navbar__link" to="/plants">Plants</Link>
                        </Nav.Item>
                        <Nav.Item className="navbar__item">
                            <Link className="navbar__link" to="/locations">Locations</Link>
                        </Nav.Item>
                        <Nav.Item className="navbar__item">
                            <Link className="navbar__link" 
                            onClick={() => {
                                localStorage.removeItem("terrace_token")}} to="/login">Logout</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}