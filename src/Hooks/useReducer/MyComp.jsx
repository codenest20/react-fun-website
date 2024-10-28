import { useReducer } from "react";

let MyComp = () => {
  // Initial state is set as a simple number value
  const initialState = {
    count : 0,
    name : "React",
  }

  // Reducer function to handle state changes
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {...state , count : state.count + 1};
      case "DECREMENT":
        return {...state , count : state.count - 1};
      case "RESET":
        return {...state , count : 0};
      default:
        return {...state , count : state.count};
    }
  }

  // Using useReducer with the reducer function and initial state
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <h2>{state.name}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default MyComp;
