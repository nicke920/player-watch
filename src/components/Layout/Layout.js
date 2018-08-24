import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Sidebar from '../Sidebar/Sidebar';

class Layout extends Component {
	render() {
		return (
			<Aux>
				<Sidebar />
				<main>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;