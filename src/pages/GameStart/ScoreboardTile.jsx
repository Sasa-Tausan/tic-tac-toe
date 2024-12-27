import PropTypes from "prop-types";

export function ScoreboardTile({ tileClass, tileText, score }) {
  return (
    <div className={`${tileClass} flex flex-col items-center rounded-2xl`}>
      <p>{tileText}</p>
      <p>{score}</p>
    </div>
  );
}

ScoreboardTile.propTypes = {
  tileClass: PropTypes.string,
  tileText: PropTypes.string,
  score: PropTypes.number,
};
