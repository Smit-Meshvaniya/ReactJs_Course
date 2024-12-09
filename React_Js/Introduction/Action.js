export const updatename = "UPDATE";

export const updatenamefun = (uname) => {
  return {
    type: updatename,
    payload: uname,
  };
};
