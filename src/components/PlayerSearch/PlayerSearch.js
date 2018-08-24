import React, { Component } from 'react';

class PlayerSearch extends Component {
	state = {
		searchText: ''
	}

	onPlayerSearch = (e) => {
		console.log('yooo')
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.onPlayerSearch}/>
			</div>
		)
	}
}

export default PlayerSearch;