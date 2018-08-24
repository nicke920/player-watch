import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const filters = (props) => {

	return (
		<div>
		<Grid container justify="flex-start">
			<FormControl>
	         <InputLabel htmlFor="age-native-helper">Select a team...</InputLabel>
	         <NativeSelect
	           value={props.sortByTeam}
	           onChange={props.sortTeam('sortByTeam')}
	           input={<Input name="sortByTeam" id="sort-by-team" />}
	         >
	           <option value="Select a team...">Select a team..</option>
	           	<option value={81}>Toronto Raptors</option>
	           	<option value={85}>Philadelphia 76ers</option>
	           	<option value={96}>Oklahoma City Thunder</option>
	           	<option value={101}>Golden State Warriors</option>
	           	<option value={105}>Los Angeles Lakers</option>
	           	<option value={108}>Dallas Mavericks</option>
	         </NativeSelect>
	         <FormHelperText>Some important helper text</FormHelperText>
	       </FormControl>
			
				<Grid item>
						<button id="sort-Pts" onClick={props.sortPlayers}>Points</button>


						<button id="sort-Reb" onClick={props.sortPlayers}>Rebounds</button>


						<button id="sort-Ast" onClick={props.sortPlayers}>Assists</button>


						<button id="sort-Fg3PtMade" onClick={props.sortPlayers}>3PT Made</button>


						<button id="sort-Blk" onClick={props.sortPlayers}>Blocks</button>
				</Grid>
			</Grid>
		</div>

	)

}

export default filters;