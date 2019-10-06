import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Header from './components/Header';
import PickBook from './components/pick-book/PickBook';
import Accent from './components/accent/Accent';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      <Route path="/accent" component={Accent}/>
      <Route path="/pick-book" component={PickBook}/>
      </div>
    </Router>
  );
}

export default App;
