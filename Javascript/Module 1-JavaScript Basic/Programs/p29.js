//Pattern Program-1
let n = 5;
for (let i = 1; i <= n; i++) {
  let r = "";
  for (let j = 1; j <= i; j++) {
    if (j % 2 === 1) {
      r = r + "1";
    } else {
      r = r + "0";
    }
  }
  console.log(r);
}

//Pattern Program-2
let num = 5;
let charcode = 65;
let charcount = 1;
for (let i = 1; i <= num; i++) {
  let r = "";
  for (let j = 1; j <= charcount; j++) {
    r = r + String.fromCharCode(charcode);
    charcode++;
  }
  console.log(r);
  charcount = charcount + 1;
}

//Pattern Program-3
let number = 5;
let count = 1;
for (let i = 1; i <= number; i++) {
  let r = "";
  for (let j = 1; j <= i; j++) {
    r = r + count;
    count++;
  }
  console.log(r);
}

//Pattern Program-4
let patern = 5;
for (let i = 1; i <= patern; i++) {
  let r = "";
  for (let j = 1; j <= i; j++) {
    r = r + "*";
  }
  console.log(r);
}
