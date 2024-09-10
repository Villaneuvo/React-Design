import { useState } from "react";
import Decoration from "./Decoration";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  console.info("Counter Rendered");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}> +</button>
      <button onClick={handleSub}> -</button>
      <Decoration />
    </>
  );
}
