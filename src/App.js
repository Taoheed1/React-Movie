import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      store: [],
      isLoading: false
    }
  }

  //search url with key apiURL = http://www.omdbapi.com/?apikey=[yourkey]&
  //api key = 77ad0c8 const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'


  getMovieData() {
    const apiURL = "http:www.omdbapi.com/?apikey=77ad0c8";
    let searchURL = apiURL + "&" + userSearch;
    axios.get(searchURL).then(response => this.setState({
      movies: response.data.Search[0],
      isLoading: false
    })).catch(this.setState({ error, isLoading: false }));
    <button className="search" onClick={() => this.retrieveData()}>Search by Title</button>
      <input className="search" id="search" type="text" placeholder="enter a movie" />
      <p> {this.state.film.Title}</p>
      <p> {this.state.film.Year}</p>
    //movieName.innerHTML = "(An error has occured)";
    //let userSearch = document.getElementById("search").value

  }

  render() {
    return (
      <div>


      </div>
    );
  }
}

export default App;
