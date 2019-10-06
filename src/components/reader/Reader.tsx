import React from 'react';
import { BOOKS } from '../../BooksObjects';
import Carousel from './Carousel';
import { Table } from 'react-bootstrap';

export default class Reader extends React.Component {
    book: string;
    name: string;
    slides: Array<string>;
    state: any;

    constructor(public props: any) {
        super(props);
        let b: string = props.location.search.substring(1).split('?')[0];
        this.name = b.split('&')[1].split('=')[1];
        this.book = b.split('&')[0].split('=')[1];

        const splitLines: Array<string> = (BOOKS[this.book]).text!.split('\n');

        this.slides = [];

        splitLines.forEach((line: string, index: number) => {
            if (index % 2 === 0) {
                this.slides.push(line);
            }
            else {
                this.slides[Math.floor(index / 2)] += line;
            }
        });

        this.state = {
            showSummary: false,
        }
    }

    public finishSlidesCallback() {
        this.setState({
            showSummary: true,
        });
    }

    public generateSummaryPage() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    public render() {
        const { showSummary } = this.state;
        const { book, slides } = this;
        return (
            <div>
                {!showSummary &&
                    (<Carousel slides={this.slides} 
                        name={this.name} 
                        book={this.book} 
                        callback={() => this.finishSlidesCallback()} />)
                }
                {showSummary &&
                    this.generateSummaryPage()}
            </div>
        );
    }
}