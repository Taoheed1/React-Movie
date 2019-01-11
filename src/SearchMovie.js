import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class SearchMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userSearch: "",
            movies: [],
            isLoading: false,
            error: null
        };
        this.handleChange = this.handleChange.bind(this)
        //this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ userSearch: e.target.value });
    }

    // handleSubmit(e) {
    //     alert('You searched for: ' + this.state.value);
    //     preventDefault
    // }
    getMovieData() {

        const apiURL = "http://www.omdbapi.com/?apikey=77ad0c8";
        //let userSearch = document.getElementById("search").value;
        let searchURL = apiURL + "&s=" + this.props.userSearch;
        let store = [];
        axios.get(searchURL).then(response => response.json()).then(data => {this.setState({userSearch: data.userSearch, movies: data.Search})
            /*  for (let movie in films) {}
            push*/
            /*,
            isLoading: false*/
        });//.catch(error => this.setState({ error, isLoading: false }));
    }






    render() {
        const { isLoading, movies, store, error } = this.state
        if (isLoading) {
            return <p>Loading data...</p>;
        }
        if (error) {
            return <p>{error.message}</p>;
        }
        return (

            <div>

                <input type="button" id="search" handleChange={this.state.userSearch}>Search by Title</input>
                <input className="search" id="search" type="text" placeholder="Enter a movie" />
                <p> {this.state.movies.Title}</p>
                <p> {this.state.movies.Year}</p>
                <p> {this.state.movies.Plot}</p>
                <img src={this.state.movies.Poster} />

            </div>
        );
    }

}
export default SearchMovie;



  //search url with key apiURL = http://www.omdbapi.com/?apikey=[yourkey]&
  //api key = 77ad0c8 const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'



    //movieName.innerHTML = "(An error has occured)";
    //let userSearch = document.getElementById("search").value