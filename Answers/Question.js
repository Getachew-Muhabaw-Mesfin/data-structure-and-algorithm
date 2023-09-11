function countElements(elements) {
  let elementsCount = {};
  for (let i = 0; i < elements.length; i++) {
    if (!elementsCount[elements[i]]) elementsCount[elements[i]] = 1;
    else elementsCount[elements[i]] += 1;
  }
  return elementsCount;
}
