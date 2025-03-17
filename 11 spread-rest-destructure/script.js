// ...rest
//The rest operator allows you to collect the remaining elements of an array or properties of an object into a new array or object.
const [first, second, ...restArr] = [1, 2, 3, 4, 5];
console.log(restArr);

const { a, b, ...restObj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(restObj);

//...spread
//The spread operator allows you to expand elements of an array or properties of an object into another array or object.
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2)


//destructure
//Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
const [a1, b1] = [1, 2];
console.log(a);
console.log(b);

const { x, y } = { x: 10, y: 20 };
console.log(x);
console.log(y); 