import React from 'react';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Towers, {Tower} from './config/Towers';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete'
import Asset from './types/Asset'
import RoundAssets from './components/RoundAssets'

function Checkbox(props: {id: string, children: string}) {
	return (
		<div className="Checkbox">
			<label htmlFor={props.id}>{props.children}</label> <input id={props.id} type="checkbox" />
		</div>
	)
}


function Settings() {
	return (
		<div className="Settings">
			<h1>Settings</h1>
			<Checkbox id="mk">
				Monkey Knowledge
			</Checkbox>
			<Checkbox id="mode">
				Mode
			</Checkbox>
			<Checkbox id="difficulty">
				Difficulty
			</Checkbox>
		</div>
	);

}
function RoundInfo(props: {data: IState, assetList: Asset[], children: number, changeRecurringIncome: any, changeSingleIncome: any, addTower: any, changeExpenses: any}) {
	let round = props.children;


	return (
		<tr>
			<td>{round}</td>
			<td><input className="readonly" type="text" inputMode="numeric" readOnly={true} defaultValue={props.data.bloonIncome[round]} /></td>
			<td className="credit"><input min="0" type="text" inputMode="numeric" onChange={props.changeRecurringIncome} value={props.data.recurringIncome[round]}/></td>
			<td className="credit"><input min="0" type="text" inputMode="numeric" onChange={props.changeSingleIncome} value={props.data.singleIncome[round]}/></td>
			<td className="debit"><input min="0" type="text" inputMode="numeric" onChange={props.changeExpenses} value={props.data.expenses[round]}/></td>
			<td><input className="readonly" type="text" inputMode="numeric" readOnly={true} value={props.data.balances[round]} /></td>
			<td><ActionSummary/></td>
			<td><RoundAssets addTower={(event: any) => props.addTower(event)}  currentRound={round} assetList={props.assetList} /></td>
			{/* <td><Button onClick={(event: any) => props.addTower(event)} variant="contained">add_tower</Button></td> */}

		</tr>
	)
}

function ActionSummary() {
	return (<textarea />
	);
}

function IncomeTable(props: {data: IState, assetList: Asset[], endRound: number, addTower: any, changeRecurringIncome: Function, changeSingleIncome: Function, changeExpenses: Function}) {

	let rounds: JSX.Element[] = [];
	for(let i=0; i<props.endRound; i++) {
		rounds = rounds.concat(
		<RoundInfo 
			addTower={(event: any) => props.addTower(i, event)}
			changeRecurringIncome={(event: React.ChangeEvent<HTMLInputElement>) => props.changeRecurringIncome(i, event)} key={i} data={props.data}
			changeSingleIncome={(event: React.ChangeEvent<HTMLInputElement>) => props.changeSingleIncome(i, event)}
			changeExpenses={(event: React.ChangeEvent<HTMLInputElement>) => props.changeExpenses(i, event)}
			assetList={props.assetList}
		>
				{i}
		</RoundInfo>
		)
}

	return (
		<div className="IncomeTable">
			<table>
				<thead>
					<tr>
						<th>Round</th>
						<th>Bloon Value</th>
						<th>Recurring Income</th>
						<th>Single Income</th>
						<th>Expenses</th>
						<th>Balance</th>
						<th>Action Log</th>
						<th>Buy / Upgrade / Sell</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
						{rounds}
					</tbody>
			</table>
		</div>
	);
}

interface IState {
	bloonIncome: Array<number>,
	recurringIncome: Array<number>, 
	singleIncome: Array<number>, 
	expenses: Array<number>, 
	balances: Array<number>,
	towers: Array<Asset>,
}


class App extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		const endRound = this.props.Modes.medium.endround;
		this.state = {
			bloonIncome: [850,121,137,138,175,164,163,182,200,199,314,189,192,282,259,266,268,165,358,260,186,351,298,277,167,335,333,662,266,389,337,537,627,205,912,1150,896,1339,1277,1759,521,2181,659,1278,1294,2422,716,1637,2843,4758,3016,1098.5,1595.5,924.5,2197.5,2483,1286.5,1859,2298,2159, 922.5],
			recurringIncome: Array(endRound).fill(0),
			singleIncome: Array(endRound).fill(0),
			expenses: Array(endRound).fill(0),
			balances: Array(endRound).fill(0),
			towers: [],


		}
		this.changeRecurringIncome = this.changeRecurringIncome.bind(this);
	}

	updateBalance() {
		let balances: number[] = [];
		for(let i=0;i<this.props.Modes.medium.endround;i++) { 
			let roundBalance =
			this.state.bloonIncome.slice(0, i+1).reduce((a, b) => a + b, 0) + 
			this.state.recurringIncome.slice(0, i+1).reduce((a, b) => a + b, 0) + 
			this.state.singleIncome.slice(0, i+1).reduce((a, b) => a + b, 0) -
			this.state.expenses.slice(0, i+1).reduce((a, b) => a + b, 0) ;
			balances = balances.concat(roundBalance);
		}
		this.setState({
			balances: balances,
		});
	}
	changeRecurringIncome(endRound: number, currentRound: number, event: React.ChangeEvent<HTMLInputElement>): void {
		event.stopPropagation();
		event.preventDefault();

		let value = parseInt(event.target.value);
		if(isNaN(value)) {
			value = 0;
		}

		const unchangedRecurringIncome = this.state.recurringIncome.slice(0, currentRound);
		const newRecurringIncome = unchangedRecurringIncome.concat(Array(endRound-currentRound).fill(value));
		this.setState({
			recurringIncome: newRecurringIncome,
		}, this.updateBalance);
	}

	changeExpenses(currentRound: number, event: React.ChangeEvent<HTMLInputElement>): void {
		event.stopPropagation();
		event.preventDefault();

		const value = parseInt(event.target.value);
		const oldExpenses = this.state.expenses.slice();
		let newExpenses = oldExpenses;
		newExpenses[currentRound] = value;
		if(isNaN(value)) {
			newExpenses[currentRound] = 0;
		}
		this.setState((prevState) => ({
			expenses: newExpenses,
		}), this.updateBalance);
	}

	addExpense(currentRound: number, amount: number) {
		const oldExpenses = this.state.expenses.slice();
		let newExpenses = oldExpenses;
		newExpenses[currentRound] += amount;

		this.setState((prevState) => ({
			expenses: newExpenses,
		}), this.updateBalance);
	}

	changeSingleIncome(currentRound: number, event: React.ChangeEvent<HTMLInputElement>): void {
		event.stopPropagation();
		event.preventDefault();

		const value = parseInt(event.target.value);
		const oldIncome = this.state.singleIncome.slice();
		let newIncome = oldIncome;
		newIncome[currentRound] = value;
		if(isNaN(value)) {
			newIncome[currentRound] = 0;
		}

		this.setState({
			singleIncome: newIncome,
		}, this.updateBalance);
	}
	addTower(currentRound: number, event: any): void {
		const towerId = event.target.dataset.towerid;
		const cost = Towers[towerId].cost;
		const dummy = { towerId: towerId, upgrades: [0, 0, 0], purchasedRound: currentRound, purchasedPrice: cost} as Asset;
		this.setState(prevState => ({
			towers: [...prevState.towers, dummy],
		}), () => this.addExpense(currentRound, cost));
	}
	componentDidMount() {
		this.updateBalance();
	}
	
	render() {
		// console.log(this.props);
	return (
		<div className="App">
			<header className="App-header">
				<h1>BTD6 Income Simulator</h1>
				{/* <p>{JSON.stringify(this.state.towers)}</p> */}
			</header>
			<Settings />
			<IncomeTable 
				assetList={this.state.towers}
				endRound={this.props.Modes.medium.endround}
				data={this.state}
				addTower={(round: number, event: any) => this.addTower(round, event)}
				changeRecurringIncome={(round: number, event: React.ChangeEvent<HTMLInputElement>) => this.changeRecurringIncome(this.props.Modes.medium.endround,round, event)}
				changeSingleIncome={(round: number, event: React.ChangeEvent<HTMLInputElement>) => this.changeSingleIncome(round, event)}
				changeExpenses={(round: number, event: React.ChangeEvent<HTMLInputElement>) => this.changeExpenses(round, event)}

				 />
			{/* <AddAction /> */}
		</div>
	);
}
}


export default App;
