import React, { useState } from "react";
import "./Program1.css";
import logo from "./logo.svg";

import "../../App.css";


const Program1 = () => {
  const [count,setCount] = useState(0)

  return (
    <div className="divmain">
      <div className="div1">Counter App</div>
      <br />
      <img src={logo} className="App-logo" alt="logo" />
      <span>{count}</span>
      <br />
      <div className="div2">
        <br />
        <button  onClick={() =>{setCount(count+1)}} className="buton">Increment</button>
        <button onClick={() =>{setCount(count-1)}} className="buton" style={{backgroundColor:"red"}}>Decrement</button>
      
      </div>
    </div>
  );
};

export default Program1;
