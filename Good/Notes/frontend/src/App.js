import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import NotesList from './components/notes-list';
import AddNotes from './components/add-note';
import ItemNote from './components/item-note';

function App() {
  return (

    <Router>
      <Header />
      <div className="container p-4">

        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={AddNotes} />
        <Route path="/add" component={AddNotes} />
        <Route path="/notes/:id" component={ItemNote} />

      </div>
    </Router>

  );
}

export default App;
