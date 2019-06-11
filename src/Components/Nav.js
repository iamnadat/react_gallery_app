import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

const Nav = props => {
    return(
        <nav className="main-nav">
        <ul>
          <li><a href='/Cats' >Cats</a></li>
          <li><a href='/Dogs' >Dogs</a></li>
          <li><a href='/Ocean'>Ocean</a></li>
        </ul>
      </nav>
    );
};

// Nav.propType = {
// };
  
export default Nav;