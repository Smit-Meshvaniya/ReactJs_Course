import React from "react";
import "./Program4.css";

export const Program4 = () => {
  let arr = [
    "Use Array.map",
    "Not a for loop",
    "Give each item a unique key",
    "Avoid using array index as the key",
  ];


  return (
    <div className="divmain23">
      React way to Render List
      <ul className="ulp4">
        {arr.map((i) => {
          return (
            <>
            <br/>
            <li className="li1">{i} </li>
            </>
          )
        })}
      </ul>
    </div>
  );
};
