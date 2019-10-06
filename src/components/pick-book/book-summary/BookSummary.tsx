import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { IBook } from '../../../Globals';
import { BOOKS } from '../../../BooksObjects';
import './BookSummary.css';

export default class BookSummary extends React.Component {
    book: IBook;
    state: any;

    constructor(public props: Readonly<any>) {
        super(props);
        this.book = BOOKS[this.props.name];
        this.state = {name: ''}
        this.handleTextEntered = this.handleTextEntered.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    public handleTextEntered(event: any) {
        this.setState({name: event.target.value});
    }
    
    public validateForm() {
        return this.state.name.length > 0;
    }


    public render() {
        return (
            <>
            <Row>
                <Col className='background_container'>
                    <img src='/cat-in-hat-summary.jpg' className='background_img' />
                    <img src='/cat-in-hat-cover.jpg' className="book_art" />
                    <h3 className="book_title">Cat in the Hat</h3>
                    <h4 className="book_author">Dr. Seuss</h4>
                    <h5 className="book_publisher">Rockefeller Records</h5>
                    <h5 className="book_year">2001</h5>
                </Col>
            </Row>
            <Row>
            <Form className="user_info">
                <Form.Group>
                    <Form.Label>Enter your name:</Form.Label>
                    <Form.Control type="display-name" placeholder="Enter Name" value={this.state.displayName}
                                          onChange={this.handleTextEntered} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!this.validateForm()}>
                            Start!
                </Button>
                </Form>
            </Row>
            </>

        );
    }
}