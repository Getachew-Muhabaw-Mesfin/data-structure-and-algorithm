function topDouble(value, top) {
  let t;
  for (let i = value; i <= top; i *= 2) {
    t = i;
  }
  return t;
}

topDouble(2,100);