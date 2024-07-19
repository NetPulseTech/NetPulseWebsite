import { FC } from "react";

interface Props {
  isLeftDone: boolean;
  isRightDone: boolean;
}

const ProgressBar: FC<Props> = ({ isLeftDone, isRightDone }) => {
  return (
    <div className="flex items-center">
      <span
        className={`block w-full h-1 ${isLeftDone ? "bg-custom-green" : "bg-white/10"}`}
      ></span>

      <span
        className={`w-8 aspect-square rounded-full border-4 ${isLeftDone ? "border-custom-green" : "border-white/10"}`}
      ></span>

      <span
        className={`block w-full h-1 ${isRightDone ? "bg-custom-green" : "bg-white/10"}`}
      ></span>
    </div>
  );
};

export default ProgressBar;
