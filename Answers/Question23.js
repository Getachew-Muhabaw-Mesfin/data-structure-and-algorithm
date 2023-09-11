function sumTogether(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i] + arr2[i];
    newArray.push(element);
  }
  return newArray;
}
