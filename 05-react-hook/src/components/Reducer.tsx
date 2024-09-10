import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGED_NAME": {
      return { ...state, name: action.currName };
    }
    case "INCREMENT_AGE": {
      return { ...state, age: state.age + 1 };
    }
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { name: "Andi", age: 50 });
  //   const [simpleState, setSimpleState] = useState("Gibran");

  return (
    <div>
      {/* <input
        type="text"
        value={simpleState}
        onChange={(event) => setSimpleState(event.target.value)}
      /> */}
      <input
        type="text"
        value={state.name}
        onChange={(event) =>
          dispatch({
            type: "CHANGED_NAME",
            currName: event.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_AGE",
          })
        }
      >
        Increment age
      </button>
      <p>
        Hello, {state.name}, You're {state.age} YO.
      </p>
    </div>
  );
}

export default Reducer;
