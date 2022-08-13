function range(first, end) {
  let rangeArray = [];
  for (let i = first; i <= end; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}

console.log(range(1, 10));
//= first < end ? 1 : -1

//Note this function  is from book
function rangeModified(first, end, step = first < end ? 1 : -1) {
  let rangeArray = [];
  if (step > 0) {
    for (let i = first; i <= end; i += step) {
      rangeArray.push(i);
    }
  } else {
    for (let i = first; i >= end; i += step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

console.log(rangeModified(1, 10, 2)); // [1, 3, 5, 7, 9]

console.log(rangeModified(5, 1, -2)); // (3) [5, 3, 1]

function rangeArray(start, end, step) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = end; i >= start; i += step) {
      array.push(i);
    }
  }

  return array;
}

console.log(rangeArray(1, 10, 2)); // [1, 3, 5, 7, 9]

console.log(rangeArray(1, 10, -2)); // [10, 8, 6, 4, 2]

function Sum(range) {
  let sum = 0;
  for (let i = 1; i <= range.length; i++) {
    sum += i;
  }
  return sum;
}

console.log(Sum(range(1, 10)));
