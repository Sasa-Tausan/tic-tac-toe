import { ScoreboardTile } from "./ScoreboardTile";
export function Scoreboard() {
  return (
    <section className="flex items-center justify-between w-full gap-5">
      <ScoreboardTile tileClass="bg-lightBlue" tileText="you" />
      <ScoreboardTile />
      <ScoreboardTile />
    </section>
  );
}
