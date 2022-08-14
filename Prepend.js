function prepend(value, list) {
  return { value, rest: list };
}

let list = null;
console.log(prepend(10, { value: 20, rest: null }));
//{value: 10, rest: {…}}
//{value: 10, rest: {…}}
//rest:
////rest: null
//value: 20
//[[Prototype]]: Object
//value: 10

console.log(prepend(30, list));
/**{value: 30, rest: null}
rest: null
value: 30
[[Prototype]]: Object */

console.log(prepend(50, prepend(70, { rest: list })));
