import { useState, useEffect, useRef } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import Title from "./Title";
import CountButton from "./CountButton";
import FormatTimme from "./FormatTimme";
import DateAndTime from "./DateandTime";

export default function Card() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const starTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - starTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    starTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
    setCount(0);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}: ${minutes} : ${seconds} : ${milliseconds}`;
  };

  const now = new Date();

  const locked = count === 5 ? true : false;

  return (
    <section className="w-full h-full flex flex-col justify-center items-center m-auto px-[5%] py-5 desktopMinWidth:w-[80%]">
      <div className="pt-5">
        <DateAndTime time={now.getTime()} />
      </div>

      <div className="bg-zinc-900 flex flex-col items-center w-full h-full rounded-xl shadow-xl duration-500">
        <div className="flex flex-[2_1_0%] w-full h-full flex-col justify-center items-center gap-5 p-5">
          <Title />
          <Count count={count} />
          <FormatTimme formatTime={formatTime} />
        </div>
        <div className="relative py-5 w-full h-full flex flex-col flex-1 rounded-xl gap-3 ">
          <ButtonContainer>
            <div className="flex w-full h-full flex-col gap-3">
              <CountButton type="done" />
            </div>
            <div className="flex w-full h-full gap-3">
              <CountButton type="start" start={start} />
              <CountButton type="plus" setCount={setCount} locked={locked} />
              <CountButton type="reset" reset={reset} />
            </div>
          </ButtonContainer>
        </div>
      </div>
    </section>
  );
}
