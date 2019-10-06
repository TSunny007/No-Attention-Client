import { RouteComponentProps } from 'react-router-dom';

export interface IBook {
    name: string,
    author?: string,
    publisher?: string,
    description?: string,
    readingLevel?: 'Easy' | 'Medium' | 'Difficult',
    text?: string,
    bookThumbnail: string
   }

export interface MatchParams {
    name: string;
}

export interface MatchProps extends RouteComponentProps<MatchParams> {
}
