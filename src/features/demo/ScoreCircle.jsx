import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import interpolate from "color-interpolate";
import "react-circular-progressbar/dist/styles.css";

function ScoreCircle({ value = 10, label = "Bias" }) {
  const palette = interpolate(["#e03131", "#e8590c", "#f08c00", "#2f9e44"]);

  const weight = value === 0 ? 0 : Math.pow(1 - value / 100, 3) * 0.7 + 0.3;
  const color = palette(weight);

  return (
    <div className="flex h-full w-18 flex-col items-center gap-2">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        className="w-full font-bold"
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
          pathColor: `${color}`,
          textColor: `${color}`,
          trailColor: "oklch(92.2% 0 0)",
          textSize: `1.4rem`,
        })}
      />
      <p className="text-sm font-medium text-neutral-400">{label}</p>
    </div>
  );
}

export default ScoreCircle;
