import React from 'react';

const TeamReport = (props) => {
	let rosterAvg = {
		pts: 0,
		reb: 0,
		ast: 0,
		fg3m: 0,
		blk: 0
	};
	props.rosterStats.map((player, i) => {
		rosterAvg = {
			pts: rosterAvg.pts += Number(player.stats.PtsPerGame["#text"]),
			reb: rosterAvg.reb += Number(player.stats.RebPerGame["#text"]),
			ast: rosterAvg.ast += Number(player.stats.AstPerGame["#text"]),
			fg3m: rosterAvg.fg3m += Number(player.stats.Fg3PtMadePerGame["#text"]),
			blk: rosterAvg.blk += Number(player.stats.BlkPerGame["#text"])
		}
	})

	return (
		<div>
			<p>Pts: {rosterAvg.pts.toFixed(1)}</p>
			<p>Reb: {rosterAvg.reb.toFixed(1)}</p>
			<p>Ast: {rosterAvg.ast.toFixed(1)}</p>
			<p>Fg3m: {rosterAvg.fg3m.toFixed(1)}</p>
			<p>Blk: {rosterAvg.blk.toFixed(1)}</p>
		</div>
	)
}

export default TeamReport;