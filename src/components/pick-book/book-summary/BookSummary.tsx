import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { IBook, MatchProps } from '../../../Globals';
import { BOOKS } from '../../../BooksObjects';
import './BookSummary.css';
import { Redirect, Route } from 'react-router';
import Reader from '../../reader/Reader';
import PickBook from '../PickBook';

export default class BookSummary extends React.Component {
    book: IBook;
    state: any;

    constructor(public props: Readonly<any>) {
        super(props);
        this.book = BOOKS[this.props.name];
        this.state = { name: '', submitted: false }
        this.handleTextEntered = this.handleTextEntered.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleTextEntered(event: any) {
        this.setState({ name: event.target.value });
    }

    public validateForm() {
        return this.state.name.length > 0;
    }

    public handleSubmit() {
        this.setState({ submitted: true });
    }


    public render() {
        if (this.state.submitted === true) {
            return (
            <>
                <Redirect to={`/reader?book=${this.props.name}&name=${this.state.name}`}/>
            </>
                )
        }
        return (
            <>
                <Row>
                    <Col className='background_container'>
                        <img src={this.book.bookSummaryThumbnail} className='background_img' />
                        <img src={this.book.bookCoverThumbnail} className="book_art" />
                        <h3 className="book_title">{this.book.name}</h3>
                        <h4 className="book_author">{this.book.author}</h4>
                        <h5 className="book_publisher">{this.book.publisher}</h5>
                        <h5 className="book_year">{this.book.year}</h5>
                    </Col>
                </Row>
                <Row>
                    <Form className="user_info" onSubmit={this.handleSubmit}>
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