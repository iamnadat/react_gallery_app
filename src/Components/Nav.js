import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

const Nav = props => {
    return(
      <nav className="main-nav">
        <ul>
          <li><Link to='/' >Search</Link></li>
          <li><Link to='/Cats' >Cats</Link></li>
          <li><Link to='/Dogs' >Dogs</Link></li>
          <li><Link to='/Ocean'>Ocean</Link></li>
        </ul>
      </nav>
    );
};

// Nav.propType = {
// };
  
export default Nav;