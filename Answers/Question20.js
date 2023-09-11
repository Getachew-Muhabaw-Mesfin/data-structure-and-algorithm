function halfValue(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) newArray.push(numbers[i] / 2);
    if (numbers[1] % 2 !== 0) newArray.push((numbers[i] + 1) / 2);
  }
  return newArray;
}
