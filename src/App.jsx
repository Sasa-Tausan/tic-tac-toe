import { useState } from "react";
import { MainPageLayout } from "./layouts/MainPageLayout";
import { GameStart } from "./pages/GameStart/GameStart";
import { GameMenu } from "./pages/GameMenu/GameMenu";

export function App() {
  const [players, setPlayers] = useState({
    playerOne: "X",
    playerTwo: "O",
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameLevel, setGameLevel] = useState("");
  const [activePlayer, setActivePlayer] = useState("X");

  function handleGameStart() {
    setIsGameStarted(true);
  }

  function handleGameLevel(e) {
    const id = e.target.id;

    setGameLevel(id);
  }

  function handlePlayerMark(mark) {
    setPlayers({
      playerOne: mark,
      playerTwo: mark === "X" ? "O" : "X",
    });
  }

  function handleSwitchPlayer(player) {
    const updatedValue = player === "X" ? "O" : "X";
    setActivePlayer(updatedValue);
  }

  return (
    <div className="grid h-screen place-items-center bg-darkNavy ">
      <MainPageLayout rowGap={isGameStarted ? "gap-5" : "gap-10"}>
        {isGameStarted ? (
          <GameStart
            gameLevel={gameLevel}
            handleSwitchPlayer={handleSwitchPlayer}
            activePlayer={activePlayer}
          />
        ) : (
          <GameMenu
            players={players}
            isGameStarted={isGameStarted}
            gameLevel={gameLevel}
            handleGameStart={handleGameStart}
            handleGameLevel={handleGameLevel}
            handlePlayerMark={handlePlayerMark}
          />
        )}
      </MainPageLayout>
    </div>
  );
}
