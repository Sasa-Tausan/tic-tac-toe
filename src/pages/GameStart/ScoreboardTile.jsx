import PropTypes from "prop-types";

export function ScoreboardTile({ tileClass, tileText, score }) {
  return (
    <div
      className={`${tileClass} flex flex-col items-center rounded-2xl flex-1 uppercase text-darkNavy  py-3`}
    >
      <p className="text-bodyText">{tileText}</p>
      <p className="text-headingMedium">{score}</p>
    </div>
  );
}

ScoreboardTile.propTypes = {
  tileClass: PropTypes.string,
  tileText: PropTypes.string,
  score: PropTypes.number,
};
