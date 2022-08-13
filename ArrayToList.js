function arrayToList(array) {
  let list = null;
  // loop backward to add element to list from array
  for (let i = array.length - 1; i >= 0; i--) {
    list = { vaule: array[i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20, 30]));
