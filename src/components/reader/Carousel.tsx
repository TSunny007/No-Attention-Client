import React from 'react';
import {
    carousel_blue, carousel_green, carousel_orange,
    centered_slide, carousel_container, button_layout
} from '../../css';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BOOKS } from '../../BooksObjects';
import { IBook } from '../../Globals';
import { css } from 'emotion';


//@ts-ignore
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
const recognition: any = new speechRecognition()

recognition.continous = true;
recognition.interimResults = false;
recognition.lang = 'en-US';

export default class Carousel extends React.Component {
    state: any;
    name: string;
    book: string;

    constructor(public props: { slides: Array<string>, callback: any, name: string, book: string, updatecallback: any }) {
        super(props);
        this.name = props.name;
        this.book = props.book;
        this.state = {
            currentSlide: 0,
            listening: false,
            spoken: '',
        }
        this.toggleListen = this.toggleListen.bind(this);
        this.handleListen = this.handleListen.bind(this);
        this.toggleListen();
    }

    public toggleListen() {
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }


    public handleListen() {

        if (this.state.listening) {
            recognition.start()
            recognition.onend = () => {
                recognition.start()
            }

        } else {
            recognition.stop()
            recognition.onend = () => {
                console.log("Stopped listening per click")
            }
        }
        recognition.onstart = () => {
            console.log("Listening!")
        }


        let finalTranscript = ''
        recognition.onresult = (event: any) => {
            let interimTranscript = ''

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += ' ' + transcript;
            }
            this.setState({ spoken: this.state.spoken + finalTranscript });
        }

        recognition.onerror = (event: any) => {
            console.log("Error occurred in recognition: " + event.error)
        }

    }

    public componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        const { currentSlide } = this.state;
        const { updatecallback, slides } = this.props;
        const oldcurrentSlide = prevState.currentSlide;
        if (currentSlide !== oldcurrentSlide) {
            const { spoken } = this.state;
            this.setState({ spoken: '' });
            updatecallback(spoken, slides[oldcurrentSlide]);
        }
    }


    public nextSlide() {
        const nextslideNumber: number = this.state.currentSlide + 1;
        const { slides, callback } = this.props;
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

        return (
            <div className={carousel_container}>
                {
                    this.slide({ text: slides[currentSlide], callback: () => { this.toggleListen(); this.nextSlide() }, mutecb: () => this.toggleListen(), mute: !this.state.listening })
                }
            </div>
        );
    }

    public slide(props: { text: string, callback: any, mutecb: any, mute: any }) {
        const { text, callback, mute, mutecb } = props;
        const withoutSpace: string = text.replace(/ /g, "");

        if (withoutSpace.length === 0) {
            callback();
        }
        return (
            <div className={BOOKS[this.book].theme === 'green' ? carousel_green :
                (BOOKS[this.book].theme === 'blue' ? carousel_blue : carousel_orange)}>
                <div className={centered_slide}>
                    <h1> {text}</h1>
                </div>
                <div className={button_layout} >
                    <span className={mute ? grey : notgrey} onClick={mute ? () => console.log('ope') : callback}><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                    <span className={!mute? csmall : c} onClick={mutecb}><FontAwesomeIcon icon={!mute ? faMicrophoneSlash : faMicrophone} /></span>
                </div>
            </div >
        );
    }
}


const notgrey: any = css({
    opacity: 1,
    margin: '0px',
    padding: '7px',

});
const grey: any = css({
    opacity: .3,
    margin: '10px',
    padding: '10px',

});

const c: any = css({
});

const csmall: any = css({
    fontSize: '67%',
});