//looping thru a list is
// start by binding pointing to the current sublist
// node will access element in the list
// then node is assigned to the rest of the list
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node);
  }
  return array;
}
console.log(listToArray({ value: 10, rest: { value: 20, rest: null } }));
