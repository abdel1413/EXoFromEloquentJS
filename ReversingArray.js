function reverse(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverse(["A", "B", "C"]));
console.log(reverse([1, 2, 3, 4, 5]));

//reverse in place
// loop thru half of the length  (array.length/2)
// create a temp position array[i] that holds the first element
// then assign the first position array[i]
//to the the last position array[array.length -1]
// then assign last position array[array.length -1]
// to the temp position array[i]
//and endly return array
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // (5) [5, 4, 3, 2, 1]
