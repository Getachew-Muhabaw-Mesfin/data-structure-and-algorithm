function reverse(string) {
  let reverseStr = "";
  if (string) {
    for (let i = string.length - 1; i >= 0; i--) {
      reverseStr += string[i];
    }
    return reverseStr;
  } else return "";
}
reverse('cat')