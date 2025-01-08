import PropTypes from "prop-types";
import { IconX } from "../../components/Icons/IconX";
import { IconO } from "../../components/Icons/IconO";

export function Tile({ handleBoard, rowIndex, colIndex, tile }) {
  const isTileEmpty = tile !== " ";
  const isTileX = tile === "X";
  return (
    <button
      className="grid flex-1 w-36 h-36 bg-semiDarkNavy rounded-2xl shadow-innerCustomElement place-items-center hover:translate-y-1 hover:shadow-none disabled:opacity-90"
      data-row={rowIndex}
      data-col={colIndex}
      onClick={handleBoard}
      disabled={isTileEmpty}
    >
      <p>
        {isTileX ? (
          <IconX width="64" height="64" fill="#31C3BD" />
        ) : (
          <IconO width="64" height="64" fill="#F2B137" />
        )}
      </p>
    </button>
  );
}

Tile.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  tile: PropTypes.string,
  handleBoard: PropTypes.func,
};
