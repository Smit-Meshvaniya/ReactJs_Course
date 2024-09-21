if (typeof "10" === "number") {
  console.log("testing 10");
} else {
  //   let n = Number("10");
  let n = +"10";
  if (n === 10) {
    console.log("after convert,'10' = 10 ");
  } else {
    console.log("convert failed");
  }
}
