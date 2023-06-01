import { useState } from "react";
import Cell from "./Cell";

function Game(props) {
  const [board, setBoard] = useState(() => {
    const initBoard = [];
    for (let i = 0; i < props.row; i++) {
      const row = [];
      for (let j = 0; j < props.col; j++) {
        row.push(props.p);
      }
      initBoard.push(row);
    }
    return initBoard;
  });

  const shuffle = (arr) => {
    for (let num = 0; num < 10; num++) {
      const temprow = Math.floor(Math.random() * (props.row - 1));
      const tempcol = Math.floor(Math.random() * (props.col - 1));

      for (let i = 0; i < props.row; i++) {
        arr[i][tempcol] =
          ((arr[i][tempcol] + 1) % (props.p + 1)) +
          parseInt((arr[i][tempcol] + 1) / (props.p + 1));
      }
      for (let j = 0; j < props.col; j++) {
        arr[temprow][j] =
          ((arr[temprow][j] + 1) % (props.p + 1)) +
          parseInt((arr[temprow][j] + 1) / (props.p + 1));
      }
      arr[temprow][tempcol] = (arr[temprow][tempcol] + props.p) % (props.p + 1);
    }
    return arr;
  };

  const handleCellClick = (rowIdx, colIdx) => {
    const newBoard = [...board];
    for (let i = 0; i < props.row; i++) {
      newBoard[i][colIdx] =
        ((newBoard[i][colIdx] + 1) % (props.p + 1)) +
        parseInt((newBoard[i][colIdx] + 1) / (props.p + 1));
    }
    for (let j = 0; j < props.col; j++) {
      if (j === colIdx) {
        continue;
      }
      newBoard[rowIdx][j] =
        ((newBoard[rowIdx][j] + 1) % (props.p + 1)) +
        parseInt((newBoard[rowIdx][j] + 1) / (props.p + 1));
    }
    setBoard(newBoard);
  };

  const makeBoard = () => {
    return (
      <div className="GameBoard">
        {board.map((row, rowIndex) => (
          <div className="GameBoard-row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell
                v={cell}
                r={rowIndex}
                c={colIndex}
                p={props.p}
                key={colIndex}
                handleCellClick={handleCellClick}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return <div className="GameBoardContainer">{makeBoard(props)}</div>;
}

export default Game;
