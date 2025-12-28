export default function BangladeshMap({ onSelect }) {
  return (
    <svg
      viewBox="0 0 800 1200"
      width="100%"
      height="100%"
      style={{ maxWidth: 500 }}
    >
      <path
        d="M387 35 L420 60 L460 120 L490 200 L480 260 L450 300
           L420 340 L390 380 L360 430 L330 470 L300 520
           L280 580 L260 650 L270 720 L300 780 L340 820
           L380 860 L420 900 L450 950 L470 1000 L450 1080
           L420 1120 L380 1150 L340 1120 L310 1060
           L290 1000 L270 950 L250 880 L240 800
           L260 720 L290 640 L320 560 L350 500
           L380 440 L410 380 L430 320 L450 260
           L460 200 L450 140 L420 80 Z"
        fill="#d9d9d9"
        stroke="#333"
        strokeWidth="2"
        onClick={() => onSelect?.("Bangladesh")}
        style={{ cursor: "pointer" }}
      />
    </svg>
  );
}
