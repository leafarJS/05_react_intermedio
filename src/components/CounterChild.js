import { memo, useMemo } from "react";
const CounterChild = ({ counter, sumar, restar }) => {
  // let superNumero = 0;
  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }

  //valor calculado
  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }
    return numero;
  }, []);
  console.log("counter child render");
  return (
    <div className="counter-child">
      <p>Counter of child</p>
      <p>{counter}</p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h4>{superNumero}</h4>
    </div>
  );
};

export default memo(CounterChild);
