import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/letsmeet-logs-site/">Let's Meet - Team 10</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/letsmeet-logs-site/">Home</Nav.Link>
                        <Nav.Link href="/letsmeet-logs-site/#/about">About</Nav.Link>
                        <Nav.Link href="/letsmeet-logs-site/#/wmrs">WMRs</Nav.Link>
                        <Nav.Link href="/letsmeet-logs-site/#/logs">Logs</Nav.Link>
                    </Nav></Container>
            </Navbar>
            <Container className="pt-5">
                <Outlet />
            </Container>
        </>
    )
}
