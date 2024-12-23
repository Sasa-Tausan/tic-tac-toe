import { useState } from "react";
import { MainPageLayout } from "./layouts/MainPageLayout";
import { GameStart } from "./pages/GameStart/GameStart";
import { GameMenu } from "./pages/GameMenu/GameMenu";

export function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <div className="grid h-screen place-items-center bg-darkNavy ">
      <MainPageLayout rowGap={isGameStarted ? "gap-5" : "gap-10"}>
        {isGameStarted ? <GameStart /> : <GameMenu />}
      </MainPageLayout>
    </div>
  );
}
