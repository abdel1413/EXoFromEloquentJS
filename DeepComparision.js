function deepComparison(object1, object2) {
  //campare both objects
  if (object1 === object2) return true;

  // conpare whether they are of the same type
  //and chech if each they are not null
  if (
    typeof object2 != "object" ||
    typeof object1 != "object" ||
    object1 == null ||
    object2 == null
  ) {
    return false;
  }

  //checking if both have same length of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // loop thru one object and compare its element to another
  //to see if they both have the same set of properties
  //then compare with its recursive call

  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);
  for (let key of keysOfObject1) {
    if (
      !keysOfObject2.includes(key) ||
      !deepComparison(object1[key], object2[key])
    ) {
      return false;
    }
  }
  return true;
}

console.log(
  deepComparison(
    { here: { is: "an" }, object: 2 },
    { here: { is: "an" }, object: 2 }
  )
); //true

let obje1 = { here: { is: "an" }, object: 2 };
let obje2 = { here: { is: "an" }, object: 2 };

console.log(deepComparison(obje1, { here: { is: "an" }, object: 2 })); //true
console.log(deepComparison(obje2, { here: 1, object: 2 }));
