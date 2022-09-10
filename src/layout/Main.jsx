import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));
    }

    moviesUpdate = (newRequest, type='all') => {
        this.setState({loading: false});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${newRequest}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));
    }

    render() {
        const {movies, loading} = this.state;

        return <div className="main">
            <div className="container">
                <div className='search_block'>
                <Search moviesUpdate={this.moviesUpdate} />
                </div>
                {
                loading ? (
                    <Preloader />
                ) : <Movies movies={movies} />
                }
            </div>
        </div>
    }
    
  }
  
  export {Main}