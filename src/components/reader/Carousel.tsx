import React from 'react';
import { carousel_panel, carousel_container, centered_slide, button_layout } from '../../css';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recorder from 'recorder-js';
import { Spinner } from 'react-bootstrap';

export default class Carousel extends React.Component {
    state: any;
    name: string;
    book: string;
    audioContext: AudioContext;
    recorder: Recorder;

    constructor(public props: { slides: Array<string>, callback: any, name: string, book: string }) {
        super(props);
        this.name = props.name;
        this.book = props.book;
        this.state = {
            currentSlide: 0,
            stream: null,
        }

        this.audioContext = new AudioContext();
        this.recorder = new Recorder(this.audioContext);
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.recorder.init(stream);
                this.recorder.start().then(() => console.log('recording now'));
                this.setState({ stream });
            })
            .catch(err => console.log('Uh oh... unable to get stream...', err));
    }

    public setnullstream() {
        this.setState({ stream: null });
    }

    public setstream(stream: any) {
        this.setState({ stream });
    }

    public async nextSlide() {
        this.setnullstream();
        const nextslideNumber: number = this.state.currentSlide + 1;
        const { slides, callback } = this.props;
        this.recorder.stop()
            .then((obj: { blob: Blob, buffer: Array<Float32Array> }) => {
                Recorder.download(obj.blob, `${this.state.currentSlide}`);
            })

        let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        this.recorder.init(stream);
        this.recorder.start().then(() => console.log('recording now'));
        this.setstream(stream);

        if (nextslideNumber >= slides.length) {
            callback();
        } else {
            this.setState({
                currentSlide: nextslideNumber,
            });
        }
    }

    public render() {
        const { slides } = this.props;
        const { currentSlide } = this.state;

        if (!this.state.stream) {
            return (<Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>);
        }

        return (
            <div className={carousel_container}>
                <Slide text={slides[currentSlide]} callback={() => this.nextSlide()}></Slide>
            </div>
        );
    }
}

function Slide(props: { text: string, callback: any }) {
    const { text, callback } = props;
    const withoutSpace: string = text.replace(/ /g, "");

    if (withoutSpace.length === 0) {
        callback();
    }
    return (
        <div className={carousel_panel}>
            <div className={centered_slide}>
                <h1> {text}</h1>
            </div>
            <div className={button_layout} >
                <span onClick={callback}><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
            </div>
        </div >
    );
}
