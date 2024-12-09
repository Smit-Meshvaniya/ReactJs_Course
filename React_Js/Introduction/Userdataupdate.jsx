import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatenamefun } from "./Action";

const Userdataupdate = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const dataupdate = useSelector((state) => state.name);

  const handlenameupdate = () => {
    dispatch(updatenamefun(name));
  };
  return (
    <div>
      <h2>Name:{dataupdate}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handlenameupdate}>Click</button>
    </div>
  );
};

export default Userdataupdate;
