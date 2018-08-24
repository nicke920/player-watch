import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const RosterDropdown = (props) => {
	let roster = null;

	roster = props.theRoster.map((player, i) => {
		return (
			<option data-value={player.player.ID}>{player.player.FirstName + ' ' + player.player.LastName}</option>
		)
	})

	return (
		<div>
			<FormControl>
	         <InputLabel htmlFor="player-selector">Select a player...</InputLabel>
	         <NativeSelect
	           value={props.playerId}
	           onChange={props.getPlayerId()}
	           input={<Input name="reportSelectPlayer" id="report-select-player" />}
	         >
	           <option value="Select a player...">Select a player..</option>
	           	{roster}
	         </NativeSelect>
	         <FormHelperText>Some important helper text</FormHelperText>
	       </FormControl>
		</div>
	)
}

export default RosterDropdown;