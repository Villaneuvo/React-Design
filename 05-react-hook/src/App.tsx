import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

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
    </>
  );
}

export default App;
