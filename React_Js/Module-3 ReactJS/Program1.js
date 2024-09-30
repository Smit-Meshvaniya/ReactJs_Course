import React from "react";
import logo from "../logo.svg";
import "../App.css";
import "../Module-3 ReactJS/Program1.css";

const Program1 = () => {
  return (
    <div className="parentdiv">
      <div className="div1">
        <div className="div2">
          React JS
          <img src={logo} className="App-logo" alt="logo" />
          <div className="h1div">
          Hello World 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program1;
