function isPalindrome(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (string.toLowerCase() === reverse.toLowerCase()) return true;
  else return false;
}
isPalindrome('pop')//true