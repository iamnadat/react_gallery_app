import React from 'react';
// import PropTypes from 'prop-types';

const NoResults = props => {
	return (
		<li className="not-found">
			<h3>No Results Found</h3>
			<p>You search did not return any results. Please try again.</p>
		</li>
    );
}

// NoResults.propType = {
// };

export default NoResults;