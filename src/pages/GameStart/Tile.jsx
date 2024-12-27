import PropTypes from "prop-types";

export function Tile({ handleBoard, rowIndex, colIndex, tile }) {
  const isTileEmpty = tile !== " ";
  return (
    <button
      className="grid flex-1 w-36 h-36 bg-semiDarkNavy rounded-2xl shadow-innerCustomElement place-items-center hover:translate-y-1 hover:shadow-none disabled:opacity-90"
      data-row={rowIndex}
      data-col={colIndex}
      onClick={handleBoard}
      disabled={isTileEmpty}
    >
      <p>{tile}</p>
    </button>
  );
}

Tile.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  tile: PropTypes.string,
  handleBoard: PropTypes.func,
};
