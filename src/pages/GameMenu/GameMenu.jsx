import PropTypes from "prop-types";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { Logo } from "../../components/Logo/Logo";
import { ChoosePlayerMark } from "./ChoosePlayerMark";
import { SelectLevel } from "./SelectLevel";

export function GameMenu({
  players,
  gameLevel,
  handleGameStart,
  handleGameLevel,
  choosePlayerMark,
}) {
  return (
    <>
      <Logo />
      <section className="flex flex-col items-center w-full gap-6 p-6 bg-semiDarkNavy rounded-2xl shadow-innerCustomElement">
        <p className="uppercase text-headingXSmall text-silver">pick player 1&apos;s mark</p>
        <ChoosePlayerMark choosePlayerMark={choosePlayerMark} players={players} />
        <p className="uppercase text-headingXSmall text-silver">remember: x goes first</p>
      </section>
      <PrimaryButton
        btnText="new game (vs ai)"
        btnClass="w-full bg-lightYellow text-headingSmall shadow-innerCustomYellow"
        clickFunc={handleGameStart}
        disabled={!gameLevel || false}
      />
      <SelectLevel handleGameLevel={handleGameLevel} />
    </>
  );
}

GameMenu.propTypes = {
  players: PropTypes.object,
  gameLevel: PropTypes.string,
  handleGameStart: PropTypes.func,
  handleGameLevel: PropTypes.func,
  choosePlayerMark: PropTypes.func,
};
