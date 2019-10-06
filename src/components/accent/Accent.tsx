import React from 'react';

export default class Accent extends React.Component {
    constructor(public props: Readonly<any>) {
        super(props);
    }

    public render() {
        return (
            <p>I am accent</p>
        );
    }
}