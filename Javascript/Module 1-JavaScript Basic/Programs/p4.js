function daysUntilChristmas(inputDate) {
  const today = inputDate ? new Date(inputDate) : new Date();
  const currentYear = today.getFullYear();
  const setchristmansdate = new Date(currentYear, 11, 25); 

  if (today > setchristmansdate) {
    setchristmansdate.setFullYear(currentYear + 1);
  }

  const timeDifference = setchristmansdate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

console.log(daysUntilChristmas("2024-12-28"));
