import { useState } from "react";

function useCounter(val: number, step: number) {
  const [count, setCount] = useState(val);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return [count, increment, decrement];
}

export default useCounter;
