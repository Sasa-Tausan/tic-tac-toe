import { useState } from "react";
import { MainPageLayout } from "./layouts/MainPageLayout";
import { GameStart } from "./pages/GameStart/GameStart";
import { GameMenu } from "./pages/GameMenu/GameMenu";

export function App() {
  const [players, setPlayers] = useState({
    playerOne: "X",
    playerTwo: "O",
  });
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [gameLevel, setGameLevel] = useState("");

  function handleGameStart() {
    setIsGameStarted(true);
  }

  function handleGameLevel(e) {
    const id = e.target.id;
    setGameLevel(id);
  }

  function choosePlayerMark(mark) {
    setPlayers({
      playerOne: mark,
      playerTwo: mark === "X" ? "O" : "X",
    });
  }

  return (
    <div className="grid h-screen place-items-center bg-darkNavy ">
      <MainPageLayout rowGap={isGameStarted ? "gap-5" : "gap-10"}>
        {isGameStarted ? (
          <GameStart />
        ) : (
          <GameMenu
            players={players}
            isGameStarted={isGameStarted}
            gameLevel={gameLevel}
            handleGameStart={handleGameStart}
            handleGameLevel={handleGameLevel}
            choosePlayerMark={choosePlayerMark}
          />
        )}
      </MainPageLayout>
    </div>
  );
}
