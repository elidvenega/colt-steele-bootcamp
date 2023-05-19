import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  return (
    <>
      <button onClick={() => setNum(num + 1)}>Plus One</button>
      <button onClick={() => setNum(0)}>Reset</button>
      <button onClick={() => setNum(num - 1)}>Minus One</button>
      <button onClick={() => setNum(num * 2)}>Times Two</button>
      <p>{num}</p>
    </>
  );
}
