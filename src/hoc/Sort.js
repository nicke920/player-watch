import axios from 'axios';

export const sortChart = (roster, arrayOfCategories, theStat, graph) => {

		const rosterCopy = roster;
		const newArrayOfCategories = arrayOfCategories;

		rosterCopy.map((player, i) => {
			const potentialStats = {
				pts: player.stats.PtsPerGame["#text"],
				reb: player.stats.RebPerGame["#text"],
				ast: player.stats.AstPerGame["#text"],
				fg3m: player.stats.Fg3PtMadePerGame["#text"],
				blk: player.stats.BlkPerGame["#text"],
				ftm: player.stats.FtMadePerGame["#text"],
				stl: player.stats.StlPerGame["#text"]
			}
			if (player.player.Position === "PG") {
				newArrayOfCategories[0] += Number(potentialStats[theStat])
			} else if (player.player.Position === "SG") {
				newArrayOfCategories[1] += Number(potentialStats[theStat])
			} else if (player.player.Position === "SF") {
				newArrayOfCategories[2] += Number(potentialStats[theStat])
			} else if (player.player.Position === "PF") {
				newArrayOfCategories[3] += Number(potentialStats[theStat])
			} else if (player.player.Position === "C") {
				newArrayOfCategories[4] += Number(potentialStats[theStat])
			}
		})

		return newArrayOfCategories


}

