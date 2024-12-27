import PropTypes from "prop-types";

export function Tile({ rowIndex, colIndex }) {
  return (
    <button
      className="grid flex-1 w-36 h-36 bg-semiDarkNavy rounded-2xl shadow-innerCustomElement place-items-center hover:translate-y-1 hover:shadow-none"
      data-attribute-row={rowIndex}
      data-attribute-col={colIndex}
    >
      <p>
        {rowIndex}-{colIndex}
      </p>
    </button>
  );
}

Tile.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
};
