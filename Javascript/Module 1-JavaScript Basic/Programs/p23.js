function Factorial(num) {
  let i;
  let fact = 1;
  // let num=5;

  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

Factorial(5);
