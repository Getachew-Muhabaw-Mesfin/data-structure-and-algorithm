function isAllX(string) {
  let str1 = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == "x") str1 += string[i];
  }
  if (str1.toLowerCase() == string.toLowerCase()) return true;
  else return false;
}
isAllX("Xx"); // true
isAllX("xAbX"); // false