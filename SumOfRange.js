function range(first, end) {
  let rangeArray = [];
  for (let i = first; i <= end; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}

console.log(range(1, 10));

function Sum(range) {
  let sum = 0;
  for (let i = 1; i <= range; i++) {
    sum += i;
  }
  return sum;
}

console.log(Sum(range(1, 10)));
