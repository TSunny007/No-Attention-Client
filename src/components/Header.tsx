import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(public props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="#">No Attention!</Navbar.Brand>
            </Navbar>
        );
    }
}