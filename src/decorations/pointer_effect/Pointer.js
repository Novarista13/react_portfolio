import { usePointerPosition } from "./usePointerPosition.js";
import { useState, useEffect } from "react";

function useDelayedValue(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  return (
    <div
      style={{
        position: "sticky",
        zIndex: 1,
        backgroundColor: "#61DAFB",
        borderRadius: "50%",
        opacity,
        transformOrigin: "100% 100%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: 28,
        height: 28,
      }}
    />
  );
}
