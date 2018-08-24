import React from 'react';

import { NavLink } from 'react-router-dom';



const sidebar = () => (
	<header>
		<nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/players/players">Players</NavLink></li>
				<li><NavLink to="/players/roster">My Team</NavLink></li>
				<li><NavLink to="/reports">Reports</NavLink></li>
			</ul>
		</nav>
	</header>
)

export default sidebar;