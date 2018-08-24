import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Aux from '../../hoc/Aux';

import AllPlayers from './AllPlayers/AllPlayers';
import Roster from './Roster/Roster.js';
import Filters from '../../components/Filters/Filters';
import Reports from './Reports/Reports';

class Players extends Component {
	state = {
		players: [],
		filteredResults: [],
		roster: [],
		sortTeam: 'Nuts',
		finishedLoading: false,
		filters: {
			ppg: 0
		}
	}

	componentDidMount() {
		axios.get("https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/cumulative_player_stats.json", {'headers': {Authorization: 'Basic bmlja2U5MjA6bGFuZ2VyMTE='}})
		.then(response => {
			console.log('CALLING PLAYERS!', response)
			this.setState({
				players: response.data.cumulativeplayerstats.playerstatsentry,
				filteredResults: response.data.cumulativeplayerstats.playerstatsentry,
				finishedLoading: true
			})
		})

	}

	updateFilterState(filters) {
		//ATTEMPT TO FILTER THROUGH ARRAY OF OBJECTS
		const statsArray = filters;

		let something = statsArray.map((player) => {
			return Number(player.stats.PtsPerGame["#text"])
		})

		var summ = something.reduce(function(total, amount) {
			return total + amount
		})

		console.log(summ)
		console.log('AVGGG', summ/something.length)

	}

	addPlayerHandler = (player) => {
		const updatedRosterArray = [...this.state.roster, player];
		console.log('when they click', updatedRosterArray)
		this.setState({
			roster: updatedRosterArray
		})
		this.updateFilterState(updatedRosterArray)
	}


	sortByTeam = name => event => {
		const theValue = event.target.value.toString(); 

		const playersArray = this.state.players;

		let filtered = playersArray.filter(player => {
			return player.team.ID === theValue
		})
			console.log('player', filtered)

		this.setState({
			sortTeam: theValue,
			filteredResults: filtered
		})
	 }

	 sortPlayers = (e) => {
		const playersArray = this.state.filteredResults;

		const typeOfSort = e.target.id;


		const howToSort = typeOfSort.split("sort-")[1];

		let sorted = playersArray.sort((a, b) => {
			if (howToSort === "Pts") {
				return Number(b.stats.PtsPerGame["#text"]) - Number(a.stats.PtsPerGame["#text"])
			} else if (howToSort === "Reb") {
				return Number(b.stats.RebPerGame["#text"]) - Number(a.stats.RebPerGame["#text"])
			} else if (howToSort === "Ast") {
				return Number(b.stats.AstPerGame["#text"]) - Number(a.stats.AstPerGame["#text"])
			} else if (howToSort === "Fg3PtMade") {
				return Number(b.stats.Fg3PtMadePerGame["#text"]) - Number(a.stats.Fg3PtMadePerGame["#text"])
			} else if (howToSort === "Blk") {
				return Number(b.stats.BlkPerGame["#text"]) - Number(a.stats.BlkPerGame["#text"])
			} else if (howToSort === "Blk") {
				return Number(b.stats.BlkPerGame["#text"]) - Number(a.stats.BlkPerGame["#text"])
			} else if (howToSort === "Blk") {
				return Number(b.stats.BlkPerGame["#text"]) - Number(a.stats.BlkPerGame["#text"])
			}
		})

		this.setState({
			filteredResults: sorted
		})
	 }

	render() {
		
		return (
			<Aux>

				<Route 
				path="/players/roster" 
				exact 
				render={() => <Roster roster={this.state.roster} />}/>

				<Route 
					path="/players/players" 
					exact 
					render={
						() => ( 
						<AllPlayers players={this.state.filteredResults} finished={this.state.finishedLoading} addPlayer={this.addPlayerHandler} roster={this.state.roster}>
							<Filters roster={this.state.roster} sortTeam={this.sortByTeam} sortByTeam={this.state.sortTeam} sortPlayers={this.sortPlayers}/>
						</AllPlayers>
						)
					}/>

					<Route path="/reports" exact render={() => <Reports displayLegend={true} roster={this.state.roster} />}/>
			</Aux>
		)
	}
}

export default Players;