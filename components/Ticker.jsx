const TECHS = [
  "REACT","REACT NATIVE","TYPESCRIPT","NODE.JS","EXPRESS","MONGODB",
  "JWT","VITE","TAILWIND","MATERIAL UI","GIT",
];

export default function Ticker() {
  const row = (
    <span>
      {TECHS.map((t) => (
        <b key={t}>{t}</b>
      ))}
    </span>
  );
  return (
    <div className="ticker">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  );
}
