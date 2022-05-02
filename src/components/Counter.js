import { useState, useCallback } from "react";
import CounterChild from "./CounterChild";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  //const sumar = () => setCounter(counter + 1);
  const sumar = useCallback(() => setCounter(counter + 1), [counter]);

  //const restar = () => setCounter(counter - 1);
  const restar = useCallback(() => setCounter(counter - 1), [counter]);

  const handleInput = (e) => setInput(e.target.value);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{counter}</h3>
      <input type="text" name="" onChange={handleInput} value={input} />
      <CounterChild counter={counter} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Counter;
