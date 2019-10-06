import { IBook } from "./Globals";


export const BOOKS: { [key: string]: IBook } = {
    'cat': {
        name: 'The Cat in the Hat',
        author: 'Dr. Seuss',
        readingLevel: 'Easy',
        description: 'A story about a cat that wears a hat. A funny cat it is!',
        publisher: 'Random House', //This is not the full text of the book
        text: `The sun did not shine. 
        It was too wet to play.
        So we sat in the house
        All that cold, cold, wet day.
        
        I sat there with Sally.
        We sat there, we two.
        And I said, "How I wish
        We had something to do!"
        
        Too wet to go out
        And too cold to play ball.
        So we sat in the house.
        We did nothing at all.`,
        bookThumbnail: '/cat-in-hat.jpeg',
        bookSummaryThumbnail: '/cat-in-hat-summary.jpg',
        bookCoverThumbnail: '/cat-in-hat-cover.jpg',
        year: 2001,
        theme: 'blue'
    },
    'fox': {
        name: 'Fox in Socks',
        author: 'Dr. Seuss',
        readingLevel: 'Medium',
        description: 'A story about a cat that wears socks. A cunning fox it is!',
        publisher: 'Random House', //This is not the full text of the book
        text: `Socks on Knox and Knox in box.
        
        Fox in socks on box on Knox.
        
        Chicks with bricks come.
        Chicks with blocks come.
        Chicks with bricks and blocks and clocks come.
        
        Look, sir.  Look, sir.  Mr. Knox, sir.
        Let's do tricks with bricks and blocks, sir.
        Let's do tricks with chicks and clocks, sir.`,
        bookThumbnail: '/fox-in-socks.jpg',
        bookSummaryThumbnail: '/fox-in-socks-summary.jpg',
        bookCoverThumbnail: '/fox-in-socks-cover.jpg',
        year: 2001,
        theme: 'orange'
    },
    'grinch': {
        name: 'How the Grinch Stole Christmas',
        author: 'Dr. Seuss',
        readingLevel: 'Medium',
        description: 'This book is about a grinch. A very popular and widely loved book.',
        publisher: 'Random House',
        text: `But the Grinch,Who lived just north of Whoville, Did NOT!
        The Grinch hated Christmas! The whole Christmas season!
        Now, please don't ask why. No one quite knows the reason.
        It could be his head wasn't screwed on just right.
        It could be, perhaps, that his shoes were too tight.`,
        bookThumbnail: '/how-the-grinch-stole-christmas.png',
        bookSummaryThumbnail: '/how-the-grinch-stole-christmas-summary.jpg',
        bookCoverThumbnail: '/how-the-grinch-stole-christmas-cover.jpg',
        year: 2001,
        theme: 'green'
    },

}
