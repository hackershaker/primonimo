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

  const handleCellClick = (rowIdx, colIdx) => {
    const newBoard = [...board];
    for (let i = 0; i < props.row; i++) {
      newBoard[i][colIdx] = (newBoard[i][colIdx] + 1) % (props.p + 1);
    }
    for (let j = 0; j < props.col; j++) {
      newBoard[rowIdx][j] = (newBoard[rowIdx][j] + 1) % (props.p + 1);
    }
    newBoard[rowIdx][colIdx] =
      (newBoard[rowIdx][colIdx] + props.p) % (props.p + 1);
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
