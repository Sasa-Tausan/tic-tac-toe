import { useState } from "react";
import { MainPageLayout } from "./layouts/MainPageLayout";
import { NewGameMenu } from "./pages/NewGameMenu/NewGameMenu";
import { GameStart } from "./pages/GameStart/GameStart";

export function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);
  return (
    <div className="grid h-screen place-items-center bg-darkNavy ">
      <MainPageLayout rowGap={isGameStarted ? "gap-5" : "gap-10"}>
        {isGameStarted ? <GameStart /> : <NewGameMenu />}
      </MainPageLayout>
    </div>
  );
}
