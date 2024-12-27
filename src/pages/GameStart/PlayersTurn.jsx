import PropTypes from "prop-types";
import { IconX } from "../../components/Icons/IconX";
import { IconO } from "../../components/Icons/IconO";

export function PlayersTurn({ activePlayer }) {
  const isActivePlayerX = activePlayer === "X";
  return (
    <div className="flex items-center gap-3 px-8 pt-4 pb-6 rounded-lg bg-semiDarkNavy shadow-innerCustomElement">
      {isActivePlayerX ? (
        <IconX width="20" height="20" fill="#A8BFC9" />
      ) : (
        <IconO width="20" height="20" fill="#A8BFC9" />
      )}

      <p className="uppercase text-silver text-headingXSmall">turn</p>
    </div>
  );
}

PlayersTurn.propTypes = {
  activePlayer: PropTypes.string,
};
