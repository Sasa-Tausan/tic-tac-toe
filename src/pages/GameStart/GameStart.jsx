import { SecondaryButton } from "../../components/Buttons/SecondaryButton";
import { Logo } from "../../components/Logo/Logo";
import { Board } from "./Board";
import { PlayersTurn } from "./PlayersTurn";
import { Scoreboard } from "./Scoreboard";

export function GameStart() {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Logo />
        <PlayersTurn />
        <SecondaryButton isImageBtn />
      </div>
      <Board />
      <Scoreboard />
    </>
  );
}
