import { useState } from "react";
import "./colorbox.css";

function randomChoice(arr) {
  // Will get a random number
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}


