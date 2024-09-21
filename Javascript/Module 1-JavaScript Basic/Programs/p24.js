let n;
let first = 0;
let second = 1;
console.log("Fibonaci series", first, second);

for (let i = 2; i < 8; i++) {
  n = first + second;
  first = second;
  second = n;
  console.log(n);
}
