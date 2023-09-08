function scream(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) str += "a";
    if (i % 2 == 0) str += "A";
  }
  return str;
}
scream(5)
scream(10)