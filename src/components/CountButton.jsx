import { CiCirclePlus } from "react-icons/ci";
import { MdNotStarted, MdResetTv } from "react-icons/md";
import { FaStop } from "react-icons/fa";
import { GiFinishLine } from "react-icons/gi";

import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

export default function CountButton({ type, setCount, start, stop, reset }) {
  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="flex-1 text-zinc-900 bg-lime-400 font-PoppinsFont font-normal not-italic border border-slate-700 w-full h-full flex justify-center items-center rounded-xl ">
      {type === "plus" && (
        <button
          onClick={handleClick}
          className="w-full h-full flex flex-col items-center justify-center gap-2 p-5"
        >
          <IoIosAddCircle className="fill-zinc-900 size-10 tabletMinWidth:size-16 laptopMinWidth:size-20 desktopMinWidth:size-10" />
          <p className="text-xs laptopMinWidth:text-base desktopMinWidth:text-sm">
            Add
          </p>
        </button>
      )}

      {type === "done" && (
        <button className="w-full h-full flex flex-col items-center justify-center gap-2 p-5">
          <IoCheckmarkDoneCircleSharp className="fill-zinc-900 size-10 tabletMinWidth:size-16 laptopMinWidth:size-20 desktopMinWidth:size-10" />
          <p className="text-xs laptopMinWidth:text-base desktopMinWidth:text-sm">
            Akhiri & lihat hasil
          </p>
        </button>
      )}

      {type === "start" && (
        <button
          onClick={start}
          className="w-full h-full flex flex-col items-center justify-center gap-2 p-5"
        >
          <MdNotStarted className="fill-zinc-900 size-10 tabletMinWidth:size-16 laptopMinWidth:size-20 desktopMinWidth:size-10" />
          <p className="text-xs laptopMinWidth:text-base desktopMinWidth:text-sm">
            Mulai
          </p>
        </button>
      )}

      {type === "stop" && (
        <button
          onClick={stop}
          className="w-full h-full flex flex-col items-center justify-center gap-2 p-5"
        >
          <FaStop className="fill-zinc-900 size-10 tabletMinWidth:size-16 laptopMinWidth:size-20 desktopMinWidth:size-10" />
          <p className="text-xs laptopMinWidth:text-base desktopMinWidth:text-sm">
            Berhenti{" "}
          </p>
        </button>
      )}

      {type === "reset" && (
        <button
          onClick={reset}
          className="w-full h-full flex flex-col items-center justify-center gap-2 p-5"
        >
          <MdResetTv className="fill-zinc-900 size-10 tabletMinWidth:size-16 laptopMinWidth:size-20 desktopMinWidth:size-10" />
          <p className="text-xs laptopMinWidth:text-base desktopMinWidth:text-sm">
            Reset
          </p>
        </button>
      )}
    </div>
  );
}
