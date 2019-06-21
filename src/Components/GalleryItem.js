import React from 'react';
// import PropTypes from 'prop-types';

  // https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg

  // farm-id: 1
  // server-id: 2
  // photo-id: 1418878
  // secret: 1e92283336
  // size: m

const GalleryItem = props => {
	return (
    <li>
      <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
    </li>
  );
}

// GalleryItem.propType = {
// };

export default GalleryItem;