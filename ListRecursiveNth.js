function nth(list, n) {
  //n is the index
  if (!list) {
    return undefined;
  } else if (n === 0) {
    console.log(`this is the element  ${list.value} from index ${n}`);
    return list.value;
  } else {
    console.log(`the remaining from the list is ${(list.rest, n - 1)}`);
    return nth(list.rest, n - 1);
  }
}

console.log(
  nth({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }, 2)
);
