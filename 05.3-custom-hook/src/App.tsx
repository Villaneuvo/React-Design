import useCounter from "./hooks/useCounter";
import "./App.css";
import { MouseEventHandler } from "react";

function App() {
  const [count, increment, decrement] = useCounter(0, 1);

  return (
    <>
      <h1>Count: {Number(count)}</h1>
      <button onClick={increment as MouseEventHandler}>Increment</button>
      <button onClick={decrement as MouseEventHandler}>Decrement</button>
    </>
  );
}

export default App;
