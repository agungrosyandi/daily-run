import { useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);

  const locked = count === 5 ? true : false;

  return (
    <section className="relative bg-zinc-100 w-screen h-screen flex flex-col justify-center items-center">
      <div
        className={`bg-zinc-100 flex flex-col items-center w-[90%] h-[90%] rounded-xl shadow-xl duration-500 ${
          locked
            ? "bg-zinc-200 flex flex-col items-center w-[90%] h-[90%] rounded-xl shadow-xl"
            : ""
        } `}
      >
        <div className="flex flex-[2_1_0%] w-full h-full flex-col justify-center items-center gap-5 p-5">
          <Title locked={locked} />
          <Count count={count} />
          <ResetButton setCount={setCount} />
        </div>
        <div className="relative bg-slate-800 w-full h-full flex flex-1 items-center justify-center rounded-xl ">
          <ButtonContainer>
            <CountButton type="minus" setCount={setCount} locked={locked} />
            <CountButton type="plus" setCount={setCount} locked={locked} />
          </ButtonContainer>
        </div>
      </div>
    </section>
  );
}
