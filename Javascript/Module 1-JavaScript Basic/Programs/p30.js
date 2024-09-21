function palindromeCheck(number) {
    if (number < 0) {
      return false;
    }
    let original = number;
    let reversed = 0;
  
    let temp = original;
    while (temp > 0) {
      reversed = reversed * 10 + (temp % 10);
      temp = Math.floor(temp / 10);
    }
  
    return number === reversed;
  }
  
  console.log(palindromeCheck(121));
  