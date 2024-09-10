import { useState, useMemo, useEffect } from "react";
import "./App.css";

function isPrime(num: number) {
  console.info("isPrime called");

  const max = Math.ceil(Math.sqrt(num));

  if (num === 2) return true;

  for (let i = 2; i <= max; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
function App() {
  const [range, setRange] = useState(10);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                            Before Using useMemo                            */
  /* -------------------------------------------------------------------------- */
  // const allPrimes = [];

  // for (let counter = 2; counter < range; counter++) {
  //   if (isPrime(counter)) allPrimes.push(counter);
  // }
  /* ----------------------------- End of use Memo ---------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               Using Use Memo                               */
  /* -------------------------------------------------------------------------- */
  const allPrimes = useMemo(() => {
    const result = [];

    for (let counter = 2; counter <= range; counter++) {
      if (isPrime(counter)) result.push(counter);
    }

    return result;
  }, [range]);
  /* ----------------------------- End Of Use Memo ---------------------------- */

  return (
    <>
      <p>{String(time)}</p>
      <form action="">
        <label htmlFor="num">Your Number</label>
        <input
          type="number"
          id="num"
          value={range}
          onChange={(event) => setRange(Number(event.target.value))}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {range}
      </p>
      <p>{allPrimes.join(", ")}</p>
    </>
  );
}

export default App;
