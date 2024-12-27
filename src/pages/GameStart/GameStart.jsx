import { Logo } from "../../components/Logo/Logo";
import { PlayersTurn } from "./PlayersTurn";

export function GameStart() {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Logo />
        <PlayersTurn />
      </div>
    </>
  );
}
