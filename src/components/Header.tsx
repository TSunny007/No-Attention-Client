import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(public props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <Navbar expand="lg" bg="light">
                <Navbar.Brand>No Attention!</Navbar.Brand>
                <Nav.Link href="/pick-book">Pick Book</Nav.Link>
                <Nav.Link href="/accent">Accents</Nav.Link>
            </Navbar>
        );
    }
}