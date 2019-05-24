import React from 'react';
// import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = props => {
    return(
			<div className="photo-container">
				<h2>Results</h2>
				<ul>
					<GalleryItem />
					<NoResults />
				</ul>
			</div>
    );
}

// Gallery.propType = {
// };
  
export default Gallery;