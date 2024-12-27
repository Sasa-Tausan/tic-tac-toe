import { useState } from "react";
import PropTypes from "prop-types";
import { initialBoard } from "../../utils/constants";
import { Tile } from "./Tile";
import { getTileCoordinate } from "../../utils/helperFunctions";

export function Board({ handleSwitchPlayer, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleBoard(e) {
    const [row, col] = getTileCoordinate(e);
    console.log(row, col);

    setGameBoard((prevState) => {
      const updatedBoard = [...prevState];
      updatedBoard[row][col] = activePlayer;
      return updatedBoard;
    });

    handleSwitchPlayer(activePlayer);
  }

  return (
    <section className="grid w-full grid-cols-3 gap-5">
      {gameBoard.map((row, rowIndex) => {
        {
          return row.map((tile, colIndex) => {
            return (
              <Tile
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                handleBoard={handleBoard}
                tile={tile}
              />
            );
          });
        }
      })}
    </section>
  );
}

Board.propTypes = {
  activePlayer: PropTypes.string,
  handleSwitchPlayer: PropTypes.func,
};
