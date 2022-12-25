import React from 'react';
import ReactDOM from 'react-dom/client';
import InputNumber from 'rc-input-number';
import './index.css';

function Square(props) {
	  return (
		<button
		  className={"square " + props.value}
		  onClick={props.onClick}
		>
		  {props.value}
		</button>
	  );
}

  class Board extends React.Component {
	renderSquare(i) {
	  return (
	  <Square 
	  	key={i}
	  	value={this.props.squares[i]}
		onClick={() => this.props.onClick(i)}
		/>

	  );
	}

	renderRow(idx, col_count) {
		let row = [];

		for (let i = idx; i < idx+col_count; i++) {
			row = row.concat(this.renderSquare(i));
		}
		let id="row" + idx;
		return (
			<div key={id} className="board-row">
			{row}
			</div>);
	}

	render() {
		const row_count = this.props.row_count;
		const col_count = this.props.col_count;
		let board = [];
		for (let n = 0; n < row_count; n++) {
			board = board.concat(this.renderRow(n*col_count, col_count))
		}
			
	  return (
		
		<div>
			{board}
		</div>
	  );
	}
  }

  class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{squares: Array(9).fill(null),
			}],
			mark: 'x',
			stepNumber: 0,
			row_count: 3,
			col_count: 3
			
		};
	}
	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length-1];

		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.mark;
		this.setState({
			history: history.concat([{squares: squares,}]),
			mark: (this.state.stepNumber % 2) === 0 ? 'o' : 'x',
			stepNumber: history.length,
		});
		
	  }
	  jumpTo(step) {
		this.setState({
			stepNumber: step,
			mark: (step % 2) === 0 ? 'x' : 'o',
		});
	  }
	  updateRows(i) {
		this.setState({
			row_count: i,
		});
	  }
	  updateCols(i) {
		this.setState({
			col_count: i,
		});
	  }
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		let status;
	  if (winner) {
		  status = 'Winner: ' + winner;
	  }
	  else {
		  status = 'Next player: ' + this.state.mark;
	  }

	  const moves = history.map((step, move) => {
		const desc = move ?
		'Go to move #' + move :
		'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => this.jumpTo(move)}>{desc}</button>
			</li>
		)
	  })
	  return (
		<div className="game">
			<h1>really good tic-tac-toe or connect4 or whatever</h1>
		  <div className="game-board">
			<Board 
				squares={current.squares}
				onClick={(i) => this.handleClick(i)}
				col_count={this.state.col_count}
				row_count= {this.state.row_count}
			/>
		  </div>
		  <div className="game-info">
		  <div className="inputs">
		  	<label for="row_count">Board Height:</label>
		  { <InputNumber name="row_count" defaultValue={3} onChange={(x) => this.updateRows(x)}/> }
		  <label for="col_count">Board Width:</label>
		  { <InputNumber name="col_count" defaultValue={3} onChange={(x) => this.updateCols(x)}/> }
</div>
			<div>{status}</div>
			<ol>{moves}</ol>
		  </div>
		</div>
	  );
	}
  }

  // ========================================

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);


  function calculateWinner(squares) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
	  const [a, b, c] = lines[i];
	  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		return squares[a];
	  }
	}
	return null;
  }