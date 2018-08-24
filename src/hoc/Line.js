export const lineSorting = (playerGameLog, type) => {
	let stats = {};
	let statsArray = []
	if (type === "monthly") {
		stats = {
			oct: {
				games: 0,
				total: 0
			},
			nov: {
				games: 0,
				total: 0
			},
			dec: {
				games: 0,
				total: 0
			},
			jan: {
				games: 0,
				total: 0
			},
			feb: {
				games: 0,
				total: 0
			},
			mar: {
				games: 0,
				total: 0
			},
			apr: {
				games: 0,
				total: 0
			}
		}
		console.log(playerGameLog)
		const arrr = Object.keys(stats) 
		playerGameLog.map((game, i) => {
			// console.log('mapping111', arrr)
			const theMonth = game.game.date.split('-')[1];

			const arrr = Object.keys(stats) 
			// console.log(arrr)
			arrr.map((month, i) => {
				const monthArray = ["10","11","12","01","02","03","04"]
				// console.log('AYO', theMonth)
				// console.log(arrr[i])
				const arrr1 = ["oct", "nov", "dec", "jan", "feb", "mar", "apr"]
				if (theMonth === monthArray[i]) {
					console.log('trust', typeof arrr1[i])
					console.log('st', stats)
					stats[arrr1[i]].games += 1
					stats[arrr1[i]].total += Number(game.stats.Pts["#text"])
				}
				
			})
		})
		stats.oct.total = (stats.oct.total / stats.oct.games).toFixed(1);
		stats.nov.total = (stats.nov.total / stats.nov.games).toFixed(1);
		stats.dec.total = (stats.dec.total / stats.dec.games).toFixed(1);
		stats.jan.total = (stats.jan.total / stats.jan.games).toFixed(1);
		stats.feb.total = (stats.feb.total / stats.feb.games).toFixed(1);
		stats.mar.total = (stats.mar.total / stats.mar.games).toFixed(1);
		stats.apr.total = (stats.apr.total / stats.apr.games).toFixed(1);

			for (let month in stats) {
				const stat = stats[month].total;

				statsArray.push(stat)
			}
			console.log('hurrr22', statsArray)


		return statsArray
	}


	// console.log('pg', playerGameLog)
	// console.log('type', type)

}

