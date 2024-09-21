
let number = 64728;
let array = Array.from(String(number));
array.reverse();
let result = parseInt(array.join(""));
console.log(result);
