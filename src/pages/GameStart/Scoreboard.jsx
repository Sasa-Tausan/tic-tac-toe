import { ScoreboardTile } from "./ScoreboardTile";
export function Scoreboard() {
  return (
    <section className="flex items-center justify-between w-full gap-5">
      <ScoreboardTile tileClass="bg-lightBlue" tileText="you" score={0} />
      <ScoreboardTile tileClass="bg-silver" tileText="ties" score={0} />
      <ScoreboardTile tileClass="bg-lightYellow" tileText="AI" score={0} />
    </section>
  );
}
