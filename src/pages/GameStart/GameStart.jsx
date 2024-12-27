import PropTypes from "prop-types";
import { SecondaryButton } from "../../components/Buttons/SecondaryButton";
import { Logo } from "../../components/Logo/Logo";
import { Board } from "./Board";
import { PlayersTurn } from "./PlayersTurn";
import { Scoreboard } from "./Scoreboard";

export function GameStart({ gameLevel, handleSwitchPlayer, activePlayer }) {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Logo />
        <PlayersTurn activePlayer={activePlayer} />
        <SecondaryButton isImageBtn />
      </div>
      <p className="uppercase text-silver text-headingSmall">game level: {gameLevel}</p>
      <Board handleSwitchPlayer={handleSwitchPlayer} activePlayer={activePlayer} />
      <Scoreboard />
    </>
  );
}

GameStart.propTypes = {
  gameLevel: PropTypes.string,
  activePlayer: PropTypes.string,
  handleSwitchPlayer: PropTypes.func,
};
