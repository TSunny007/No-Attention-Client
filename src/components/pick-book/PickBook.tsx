import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { card_div } from '../../css';
import { BOOKS } from '../../BooksObjects';

export default class PickBook extends React.Component {

    constructor(public props: Readonly<any>) {
        super(props);
    }

    public renderBookCard(bookName: string) {
        let book = BOOKS[bookName];
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.bookThumbnail} />
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                    <Button variant="primary" href={"#book-summary/"+bookName}>Read this book!</Button>
                </Card.Body>
            </Card>
        );
    }

    public render() {
        return (
            <div className={card_div}>
                <Row>
                    {
                        Object.keys(BOOKS).map((bookName: string) => {
                        return (
                        <Col key={bookName}>
                            {this.renderBookCard(bookName)}
                        </Col>);
                        })
                    }
                </Row>
            </div>
        );
    }
}