export const addcounter = "Increment";
export const minuscounter = "Decrement";

export const addcounterfun = () => {
  return {
    type: addcounter,
  };
};

export const minuscounterfun = () => {
  return {
    type: minuscounter,
  };
};
