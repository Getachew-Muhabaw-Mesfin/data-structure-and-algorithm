function eitherNotBoth(num) {
  if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0))
    return true;
  else return false;
}
eitherNotBoth(5);// true
eitherNotBoth(15) // false