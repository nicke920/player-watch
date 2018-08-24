import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TeamReport from '../../../components/TeamReport/TeamReport';

const roster = (props) => {
	let test = <p>Loading players</p>;

	test = props.roster.map((player, i) => {
		let playerStats = {
			pts: Number(player.stats.PtsPerGame["#text"]).toFixed(1),
			reb: Number(player.stats.RebPerGame["#text"]).toFixed(1),
			ast: Number(player.stats.AstPerGame["#text"]).toFixed(1),
			threeMade: Number(player.stats.Fg3PtMadePerGame["#text"]).toFixed(1),
			threeAtt: Number(player.stats.Fg3PtAttPerGame["#text"]).toFixed(1),
			threePct: ((Number(player.stats.Fg3PtMadePerGame["#text"]).toFixed(1) / Number(player.stats.Fg3PtAttPerGame["#text"])) * 100).toFixed(1), 
			freeMade: Number(player.stats.FtMadePerGame["#text"]).toFixed(1),
			freeAtt: Number(player.stats.FtAttPerGame["#text"]).toFixed(1),
			freePct: ((Number(player.stats.FtMadePerGame["#text"]).toFixed(1) / Number(player.stats.FtAttPerGame["#text"])) * 100).toFixed(1),
			blk: Number(player.stats.BlkPerGame["#text"]).toFixed(1)
		}

		return(
			<TableRow key={i} onClick={() => props.addPlayer(player)}>
				<TableCell component="th" scope="row">
					{player.player.FirstName + " " + player.player.LastName}
				</TableCell>
				<TableCell>{player.player.Position}</TableCell>
				<TableCell numeric>{playerStats.pts}</TableCell>
				<TableCell numeric>{playerStats.reb}</TableCell>
				<TableCell numeric>{playerStats.ast}</TableCell>
				<TableCell numeric>{playerStats.threeMade + " / " + playerStats.threeAtt}</TableCell>
				<TableCell numeric>
					{
						playerStats.threeAtt > 0 ? (playerStats.threePct) : 0.0 + "%"
					}
				</TableCell>
				<TableCell numeric>{playerStats.freeMade + " / " + playerStats.freeAtt}</TableCell>
				<TableCell numeric>
					{
						playerStats.freeAtt > 0 ? (playerStats.freePct) : 0.0 + "%"
					}
				</TableCell>
				<TableCell numeric>{playerStats.blk}</TableCell>
			</TableRow>
		)
	})


	return (
		<div>
			<TeamReport rosterStats={props.roster} displayLegend={true} />

			<div className="myTable">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Position</TableCell>
						<TableCell>PPG</TableCell>
						<TableCell>RPG</TableCell>
						<TableCell>AST</TableCell>
						<TableCell>3PT</TableCell>
						<TableCell>3PT%</TableCell>
						<TableCell>FT</TableCell>
						<TableCell>FT%</TableCell>
						<TableCell>BLK</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{test}
				</TableBody>
			</div>
		</div>
	)
}

export default roster;