export default function Title({ locked }) {
  return (
    <h1 className="text-4xl font-RobotoBold font-bold">{`${
      locked ? "Buy Premium" : "Daily Run testing"
    }`}</h1>
  );
}
