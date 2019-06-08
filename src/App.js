import React, {Component} from 'react';
import apiKey from './config';
import './App.css';
import axios from "axios";
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Route404 from './Components/404';
import Gallery from './Components/Gallery';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {

  state = {
    query: '',
    images: [],
    loading: true
  };

  componentDidMount = () => {
    this.performSearch();
  }

  performSearch = (query = 'Art') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState({
        query: query,
        images:response.data.photos,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  
  gallery = ({match}) => {
    if(match.params.query){
      this.performSearch(match.params.query);
    }
    return(
      (this.state.loading)
      ? <p>Loading...</p>
      : <Gallery 
          data={this.state.images}
          query={this.state.query}
        />
    )
  }

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <Nav onSearch={this.performSearch} />
          <Switch>
              <Route exact path="/" component={this.gallery} />
              <Route exact path="/:query" render={this.gallery} />
              <Route component={ Route404 } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
