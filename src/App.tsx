import React from 'react';
import { MatchProps } from './Globals'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import PickBook from './components/pick-book/PickBook';
import Accent from './components/accent/Accent';
import BookSummary from './components/pick-book/book-summary/BookSummary';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      <Route exact path="/accent" component={Accent}/>
      <Route exact path="/pick-book" component={PickBook}/>
      <Route exact path="/book-summary/:name" render={( {match}: MatchProps) => (
          <BookSummary name={match.params.name}/> )} />
      </div>
    </Router>
  );
}

export default App;
