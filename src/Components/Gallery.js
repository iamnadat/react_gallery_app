import React from 'react';
// import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = props => {

		const results = props.data;
		let images;

		if (results.photo.length > 0) {
			images = results.photo.map( image =>
				<GalleryItem 
					farm={image.farm}
					server={image.server}
					id={image.id}
					secret={image.secret}
					title={image.title}
					key={image.id}
				/>
			);
		} else {
			images = <NoResults />
		}

    return(
			<div className="photo-container">
				<h2>{`Results For '${props.query}'`}</h2>
				<ul>
					{images}				
				</ul>
			</div>
    );
}

// Gallery.propType = {
// };
  
export default Gallery;