import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcounterfun, minuscounterfun } from "./Action";
import style from "./Counter.module.css"

const Countercompo = () => {
  const dispatch = useDispatch();
  const counterdata = useSelector((state) => state.count);

  const Increment = () => {
    dispatch(addcounterfun());
  };
  const Decrement = () => {
    dispatch(minuscounterfun());
  };

  return (
    <div className={style.div1}>
    <div className={style.maindiv}>
     <h1>Hello Redux</h1> 
      <h2>Couter - {counterdata}</h2>
      <div>
      <button onClick={Increment}>Add Counter</button>
      <button onClick={Decrement}>Minus Counter</button>
      </div>
    
    </div>
    </div>
  );
};

export default Countercompo;
