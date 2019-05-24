import React, {Component} from 'react';
import apiKey from './config';
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';

class App extends Component {

  componentDidMount () {

  }
  render() {
    return (
      <div className="container">

        <SearchForm />

        <Nav />

        <Gallery />

      </div>
    );
  }
}

export default App;
