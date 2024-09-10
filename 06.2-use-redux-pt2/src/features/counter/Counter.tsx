import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { CounterState } from "../../app/store";

function Counter() {
  const count = useSelector((state: CounterState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Add by 1</button>
      <button onClick={() => dispatch(decrement())}>Subtract by 1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Add by 10</button>
    </div>
  );
}

export default Counter;
