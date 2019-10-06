export interface IBook {
    name: string,
    author?: string,
    publisher?: string,
    description?: string,
    readingLevel?: 'Easy' | 'Medium' | 'Difficult'
   }