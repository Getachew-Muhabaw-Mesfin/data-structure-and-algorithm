function splitAtX(string) {
  let indexOfx = string.indexOf("x");
  let fstr = string.slice(0, indexOfx);
  let sstr = string.slice(indexOfx + 1, string.length);

  if (fstr.length > sstr.length) return fstr;
  else if (fstr.length < sstr.length) return sstr;
  else return "EQual";
}
splitAtX("xDeveloper") // Developer