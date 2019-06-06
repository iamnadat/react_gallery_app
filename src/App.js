import React, {Component} from 'react';
import apiKey from './config';
import './App.css';
import axios from "axios";
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';

class App extends Component {

  state = {
    images: [],
    loading: true
  };

  //  https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6c44bce6dad9fa5e8ef4b09f74f99278&tags=Trending&per_page=24&format=json&nojsoncallback=1

  componentDidMount = (query = 'Art') => {
    this.performSearch();
  }

  performSearch = (query = 'Art') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState({
        images:response.data.photos,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="container">

        <SearchForm onSearch={this.performSearch}/>
        <Nav />
        {
          (this.state.loading)
          ? <p> LOADING ...</p>
          : <Gallery data={this.state.images}/>
        }
      </div>
    );
  }
}

export default App;
