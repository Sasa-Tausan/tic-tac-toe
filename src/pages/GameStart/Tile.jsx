import PropTypes from "prop-types";

export function Tile({ rowIndex, colIndex }) {
  return (
    <div
      className="grid flex-1 w-36 h-36 bg-semiDarkNavy rounded-2xl shadow-innerCustomElement place-items-center"
      data-attribute-row={rowIndex}
      data-attribute-col={colIndex}
    >
      <p>
        {rowIndex}-{colIndex}
      </p>
    </div>
  );
}

Tile.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
};
