import PropTypes from "prop-types";
import { IconOutlineO } from "../../components/Icons/IconOutlineO";
import { IconX } from "../../components/Icons/IconX";
import { IconOutlineX } from "../../components/Icons/IconOutlineX";
import { IconO } from "../../components/Icons/IconO";

export function ChoosePlayerMark({ handlePlayerMark, players }) {
  const isPlayerOneX = players.playerOne === "X";
  return (
    <div className="flex w-full gap-3 p-2 rounded-lg bg-darkNavy">
      <button
        className={`grid flex-1 py-3 rounded-lg place-items-center ${
          isPlayerOneX ? "bg-silver" : ""
        } `}
        onClick={() => handlePlayerMark("X")}
      >
        {isPlayerOneX ? (
          <IconOutlineX width="32" height="32" stroke="#1A2A33" fill="#1A2A33" />
        ) : (
          <IconX width="32" height="32" fill="#A8BFC9" />
        )}
      </button>
      <button
        className={`grid flex-1 py-3 rounded-lg place-items-center ${
          !isPlayerOneX ? "bg-silver" : ""
        } `}
        onClick={() => handlePlayerMark("O")}
      >
        {!isPlayerOneX ? (
          <IconOutlineO width="32" height="32" stroke="#1A2A33" fill="#1A2A33" />
        ) : (
          <IconO width="32" height="32" fill="#A8BFC9" />
        )}
      </button>
    </div>
  );
}

ChoosePlayerMark.propTypes = {
  players: PropTypes.object,
  handlePlayerMark: PropTypes.func,
};
