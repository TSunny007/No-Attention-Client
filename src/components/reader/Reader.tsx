import React from 'react';
import { BOOKS } from '../../BooksObjects';
import Carousel from './Carousel';
import { Table } from 'react-bootstrap';

export default class Reader extends React.Component {
    book: string;
    name: string;
    slides: Array<string>;
    state: any;

    results: { spoken: Array<string>, expected: Array<string> };

    constructor(public props: any) {
        super(props);
        let b: string = props.location.search.substring(1).split('?')[0];
        this.name = b.split('&')[1].split('=')[1];
        this.book = b.split('&')[0].split('=')[1];

        const splitLines: Array<string> = (BOOKS[this.book]).text!.split('\n');

        this.slides = [];
        this.results = {
            spoken: ['I got these', 'He wanted to go outside', 'Hello these, how are you', 'I wanted 1',
                'I wanted 2', 'I wanted 3'],
            expected: ['We got these', 'We wanted to go outside', 'I am doing swell', 'I wanted 4',
                'I wanted 5', 'I wanted 6']
        };

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

    public correctPercentage(i: number) {
        let spoken = this.results.spoken[i];
        let expected = this.results.expected[i];
        let denom = expected.split(' ').length;
        var nume = 0;
        spoken.split(' ').forEach(s => {
            if (expected.split(' ').includes(s)) {
                nume++;
            }
        });
        return Math.round((100 * nume) / denom);
    }

    public generateSummaryPage() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Spoken</th>
                        <th>Expected</th>
                        <th>Percentage Correct</th>
                    </tr>
                </thead>
                <tbody>
                    {this.results.spoken.map((verse, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{this.results.spoken[i]}</td>
                                <td>{this.results.expected[i]}</td>
                                <td>{this.correctPercentage(i)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }

    public addRecord(spoken: string, expected: string) {
        this.results.spoken = [...this.results.spoken, spoken]
        this.results.expected = [...this.results.expected, expected]
    }

    public render() {
        const { showSummary } = this.state;
        return (
            <div>
                {!showSummary &&
                    (<Carousel slides={this.slides}
                        name={this.name}
                        book={this.book}
                        callback={() => this.finishSlidesCallback()}
                        updatecallback={(spoken: string, expected: string) => this.addRecord(spoken, expected)}
                    />)
                }
                {showSummary &&
                    this.generateSummaryPage()}
            </div>
        );
    }
}