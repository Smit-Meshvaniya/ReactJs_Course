function summation(num) {
  let sum = 0;
  let numtostring = num.toString();

  for (let i = 0; i < numtostring.length; i++) {
    let a = parseInt(numtostring[i]);
    sum += a;
  }
  return sum;
}

let number = summation(1523);
console.log(number)
