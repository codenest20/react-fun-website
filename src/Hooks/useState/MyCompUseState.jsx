import { useState } from "react";

function MyCompUseState() {
  let [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>

      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </>
  );
}

export default MyCompUseState;
