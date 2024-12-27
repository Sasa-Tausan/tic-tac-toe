import { IconX } from "../../components/Icons/IconX";

export function PlayersTurn() {
  return (
    <div className="flex items-center gap-3 px-8 pt-4 pb-6 rounded-lg bg-semiDarkNavy shadow-innerCustomElement">
      <IconX width="20" height="20" fill="#A8BFC9" />

      <p className="uppercase text-silver text-headingXSmall">turn</p>
    </div>
  );
}
