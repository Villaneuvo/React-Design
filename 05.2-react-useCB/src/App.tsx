import { useState, useCallback } from "react";
import MegaBoost from "./components/MegaBoost";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleMegaBoost = useCallback(() => {
    setCount((prevCount) => prevCount + 10);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}> Small Boost</button>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}

export default App;
