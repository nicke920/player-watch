import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

import TeamReport from '../../../components/TeamReport/TeamReport';
import RosterDropdown from '../../../components/RosterDropdown/RosterDropdown';

import { sortChart } from '../../../hoc/Sort';
import { lineSorting } from '../../../hoc/Line';

import axios from 'axios';

class Reports extends Component {
	state = {
		roster: this.props.roster,
		chartData: {},
		trendData: {},
		lineFilters: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
		lineChartPlayerId: 0,
		lineChartStats: [],
		lineData: {}
	}
	componentDidMount() {
		const arrayToAdd = sortChart(this.state.roster, [0,0,0,0,0], "pts");

		this.setState({
			chartData: {
				labels: ['PG', 'SG', 'SF', 'PF', 'C'],
				datasets: [
					{
						label: "Stats by position", 
						data: arrayToAdd,
						backgroundColor: [
							'rgba(220,23,43,1)',
							'rgba(20,23,43,1)',
							'rgba(220,223,43,1)',
							'rgba(130,23,143,1)',
							'rgba(220,3,243,1)'
						]
					}
				]
			}
		})
	}

	callGameLogs = name => event  => {
		const theValue = event.target.value.toString(); 
		const index = event.target.selectedIndex;
		const optionElement = event.target.childNodes[index]
		const option =  optionElement.getAttribute('data-value');
		const playerName = theValue.toLowerCase().split(" ").join('-');

		const playerFinal = playerName + "-" + option;
		console.log(playerFinal)
		
		axios.get("https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/player_gamelogs.json?player=" + playerFinal, {'headers': {Authorization: 'Basic bmlja2U5MjA6bGFuZ2VyMTE='}})
		.then(response => { 
			this.setState({
				lineChartStats: response.data.playergamelogs.gamelogs
			})
		})
	}

	lineGraphFunction = (type) => {
		this.callGameLogs()
		const playerGamelogs = this.state.lineChartStats;
		let lineData = this.state.lineData;

		const test = lineSorting(playerGamelogs, type)


		lineData = {
			datasets: [{
				data: test
			}],
			labels: ['October','November', 'December','January', 'February', 'March', 'April']
		}
		this.setState({
			lineData: lineData
		})

	}
	

	getPlayersFromRoster = (theStat) => {
		const arrayToAdd = sortChart(this.state.roster, [0,0,0,0,0], theStat);

		this.setState({
			chartData: {
				labels: ['PG', 'SG', 'SF', 'PF', 'C'],
				datasets: [
					{
						label: "Stats by position", 
						data: arrayToAdd,
						backgroundColor: [
							'rgba(220,23,43,1)',
							'rgba(20,23,43,1)',
							'rgba(220,223,43,1)',
							'rgba(130,23,143,1)',
							'rgba(220,3,243,1)'
						]
					}
				]
			}
		})
	}

	render() {
		return (
			<div>
				<TeamReport rosterStats={this.props.roster}/>
				<div className="chart">
					<button onClick={() => this.getPlayersFromRoster("pts")}>Pts</button>
					<button onClick={() => this.getPlayersFromRoster("reb")}>Reb</button>
					<button onClick={() => this.getPlayersFromRoster("ast")}>Ast</button>
					<button onClick={() => this.getPlayersFromRoster("fg3m")}>3pt FG made</button>
					<button onClick={() => this.getPlayersFromRoster("blk")}>Blocks</button>
					<button onClick={() => this.getPlayersFromRoster("ftm")}>Free throws made</button>
					<button onClick={() => this.getPlayersFromRoster("stl")}>Steals</button>
					<Pie
						data={this.state.chartData}
						options={{
							title: {
								display: true, 
								text: 'Stats by position',
								fontSize: 25
							},
							legend: {
								display: true, 
								position: 'left',
								labels: {
									fontColor: 'rgb(34,54,234)'
								}
							}, 
							maintainAspectRatio: true
						}}
						height={200}
						width={200}
					/>
					<button onClick={() => this.lineGraphFunction('monthly')}>Show this Monthly</button>
					<Line 
						data={this.state.lineData}
						options= {{
							title: {
								display: true,
								text: 'Trend Analysis',
								fontSize: 25
							},
							legend: {
								display: true,
								position: 'left',
								labels: {
									fontColor: 'rba(43,23,22)'
								}
							},
							scales: {
					            yAxes: [{
					                ticks: {
					                    beginAtZero:true
					                }
					            }]
					        }
						}}
					/>
					<RosterDropdown theRoster={this.state.roster} getPlayerId={() => this.callGameLogs()} playerId={this.state.lineChartPlayerId}/>
				</div>
			</div>
		)
	}
}

export default Reports;