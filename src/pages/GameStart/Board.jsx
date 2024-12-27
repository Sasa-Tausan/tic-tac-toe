import { useState } from "react";
import { initialBoard } from "../../utils/constants";
import { Tile } from "./Tile";

export function Board() {
  const [gameBoard, setGameBoard] = useState(initialBoard);
  return (
    <section className="flex flex-col w-full gap-5">
      {gameBoard.map((row, rowIndex) => {
        return (
          <div
            className="flex items-center justify-between gap-5"
            key={rowIndex}
          >
            {row.map((tile, colIndex) => {
              return (
                <Tile
                  key={`${rowIndex}-${colIndex}`}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
