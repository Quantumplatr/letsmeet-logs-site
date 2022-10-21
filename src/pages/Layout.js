import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">Let's Meet - Team 10</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/wmrs">WMRs</Nav.Link>
                        <Nav.Link href="/logs">Logs</Nav.Link>
                    </Nav></Container>
            </Navbar>
            <Container className="pt-5">
                <Outlet />
            </Container>
        </>
    )
}
