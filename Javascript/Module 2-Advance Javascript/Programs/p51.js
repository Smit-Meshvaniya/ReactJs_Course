const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let mm = months[d.getMonth()];
let dd = d.getDate();
let yy = d.getFullYear();

let firstformat = mm + "-" + dd + "-" + yy;
let secondformat = mm + "/" + dd + "/" + yy;
let thirdformat = dd + "-" + mm + "-" + yy;
let fourthformat = dd + "/" + mm + "/" + yy;

console.log(firstformat);
console.log(secondformat);
console.log(thirdformat);
console.log(fourthformat);
