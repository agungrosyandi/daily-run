export default function FormatTimme({ formatTime }) {
  return (
    <div className="text-2xl text-lime-100 tabletMinWidth:text-4xl laptopMinWidth:text-5xl desktopMinWidth:text-3xl">
      {formatTime()}
    </div>
  );
}
