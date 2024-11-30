import React from "react";
import { addcounter, minuscounter } from "./Action";

const initialstate = {
  count: 0,
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case addcounter:
      return {
        count: state.count + 1,
      };
      case minuscounter:
      return {
        count: state.count - 1,
      };
      default:return state
  }
};

export default Reducer;
