let v = ["a", "e", "i", "o", "u"];
let char = "3";
let checkbol = false;

for (let i = 0; i < v.length; i++) {
  if (char === v[i]) {
    checkbol = true;
  }
}

if (checkbol) {
  console.log("Enter no is vowel");
} else {
  console.log("Enter no is not vowel");
}
