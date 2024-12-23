import { IconOutlineO } from "../../components/Icons/IconOutlineO";
import { IconX } from "../../components/Icons/IconX";

export function ChoosePlayerMark() {
  return (
    <div className="flex w-full gap-3 p-2 rounded-lg bg-darkNavy">
      <button className="grid flex-1 place-items-center">
        <IconX width="32" height="32" fill="#A8BFC9" />
      </button>
      <button className="grid flex-1 py-3 rounded-lg place-items-center bg-silver">
        <IconOutlineO width="32" height="32" stroke="#1A2A33" fill="#1A2A33" />
      </button>
    </div>
  );
}
