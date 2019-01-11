import React, { Component } from 'react';
import axios from 'axios';
import moviereel from './movie_reel.jpg';
import './App.css';
import SearchMovie from './SearchMovie.js';



class App extends Component {

  render() {
    return (
      <div>
        <img src ={moviereel} className="reel" alt="Movie reel"/>
        <SearchMovie />


      </div>
    );
  }
}




export default App;
