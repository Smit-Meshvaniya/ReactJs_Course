function sumOfDigits(number) {
  let digit = number % 10;
  let div = number / 1000;
  let expression = Math.floor(div);

   digit+=expression; 
  console.log(digit);
}

let number = 1234;
let result = sumOfDigits(number);
