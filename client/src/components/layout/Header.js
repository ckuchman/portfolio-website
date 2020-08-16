import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../../image/Logo.jpg';

export default function Header() {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <Image width={40} height={40} src={logo} fluid />
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}