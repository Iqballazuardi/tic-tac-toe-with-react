import { useState } from "react";
import Square from "./componets/Square";
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Player " + winner + " wins!!!";
  } else {
    status = xIsNext ? "Next player: X" : "Next player: O";
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(square) {
  const lineRules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lineRules.length; i++) {
    const [a, b, c] = lineRules[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return false;
}

export default function Game() {
  return (
    <div>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info"></div>
    </div>
  );
}
