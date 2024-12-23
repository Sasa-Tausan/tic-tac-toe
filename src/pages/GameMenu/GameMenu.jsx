import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { Logo } from "../../components/Logo/Logo";
import { ChoosePlayerMark } from "./ChoosePlayerMark";
import { SelectLevel } from "./SelectLevel";

export function GameMenu() {
  return (
    <>
      <Logo />
      <section className="flex flex-col items-center w-full gap-6 p-6 bg-semiDarkNavy rounded-2xl shadow-innerCustomElement">
        <p className="uppercase text-headingXSmall text-silver">pick player 1&apos;s mark</p>
        <ChoosePlayerMark />
        <p className="uppercase text-headingXSmall text-silver">remember: x goes first</p>
      </section>
      <PrimaryButton
        btnText="new game (vs ai)"
        btnClass="w-full bg-lightYellow text-headingSmall shadow-innerCustomYellow"
      />
      <SelectLevel />
    </>
  );
}
