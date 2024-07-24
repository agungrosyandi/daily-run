import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

export default function CountButton({ type, setCount, locked }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });
  };

  return (
    <div className="flex-1 border border-slate-700 w-full h-full flex justify-center items-center ">
      <button
        disabled={locked}
        onClick={handleClick}
        className="w-full h-full flex items-center justify-center"
      >
        {type === 'minus' && (
          <CiCircleMinus className="fill-yellow-200 size-14" />
        )}

        {type === 'plus' && (
          <CiCirclePlus className="fill-yellow-200 size-14" />
        )}
      </button>
    </div>
  );
}
