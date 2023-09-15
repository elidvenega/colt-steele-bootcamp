import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const add = () => setNum((num) => num + 1);
  const minus = () => setNum((num) => num - 1);
  const multiplyByTwo = () => setNum((num) => num * 2);

  return (
    <>
      <button onClick={add}>Plus One</button>
      <button onClick={() => setNum(0)}>Reset</button>
      <button onClick={minus}>Minus One</button>
      <button onClick={multiplyByTwo}>Times Two</button>
      <p>{num}</p>
    </>
  );
}
