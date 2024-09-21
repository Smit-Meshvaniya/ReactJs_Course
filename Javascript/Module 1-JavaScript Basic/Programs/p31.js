function forminandsec(t) {
  return t < 10 ? "0" + t : t;
}

function CurrentTime() {
  const d = new Date();
  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  const ampm = hr >= 12 ? "PM" : "AM";

  const hrformat = hr % 12 || 12;
  console.log(hrformat);

  const minformat = forminandsec(min);
  const secformat = forminandsec(sec);

  return `Current time is : ${hrformat} ${ampm} : ${minformat} : ${secformat}`;
}

console.log(CurrentTime());
