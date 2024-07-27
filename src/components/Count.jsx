export default function Count({ count }) {
  return (
    <p className="text-8xl text-lime-100 tabletMinWidth:text-9xl desktopMinWidth:text-7xl">
      {count}
      <span className="text-sm tabletMinWidth:text-base laptopMinWidth:text-2xl desktopMinWidth:text-base">
        putaran
      </span>
    </p>
  );
}
