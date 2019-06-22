import React, { Component } from 'react';
import Gallery from './Gallery';

class Keyword extends Component {    


	handleRoute()
	{
		const newQuery = this.props.match.params.query;

		if(this.props.query !== newQuery)
		{
			this.props.performSearch(newQuery);
		}

	}

	componentDidMount = () => {
		this.handleRoute();
  }

	componentDidUpdate()
	{
		this.handleRoute();
	}

	render() {
		return(
			<Gallery data={this.props.data} query={this.props.match.params.query} />
		);
	}
}

// Keyword.propType = {
// };
  
export default Keyword;