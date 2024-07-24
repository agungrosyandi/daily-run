import { RxReset } from 'react-icons/rx';

export default function ResetButton({ setCount }) {
  const resetButton = () => {
    setCount(0);
  };

  return (
    <button className="" onClick={resetButton}>
      <RxReset className="size-10" />
    </button>
  );
}
