function sumEven(array) {
  let sumOfEvenNumbers = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) sumOfEvenNumbers += array[i];
  }
  return sumOfEvenNumbers;
}
sumEven([2,5,8,3,4])