import React from "react";
import { updatename } from "./Action";

const initialstate = {
  name: "Hello",
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case updatename:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
