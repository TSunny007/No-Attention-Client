import React from 'react';
import { MatchProps } from './Globals'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Redirect
} from 'react-router-dom';

import Header from './components/Header';
import PickBook from './components/pick-book/PickBook';
import Accent from './components/accent/Accent';
import BookSummary from './components/pick-book/book-summary/BookSummary';
import Reader from './components/reader/Reader';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={PickBook} />
        <Route exact path="/pick-book" component={PickBook} />
        <Route path={"/reader"} component={Reader} />
        <Route exact path="/book-summary/:name" render={({ match }: MatchProps) => (
          <BookSummary name={match.params.name} />)} />
      </div>
    </Router>
  );
}

export default App;
