// let x = 10;
// let y = 5;
// function nameOfFunction(x, y,) {
//   return x + y
// }
// console.log(x + y)
// nameOfFunction(4, 9);

// function myName(name) {
// console.log('Hello', name)
// }
// myName("John");
// myName("Seth");
// myName("Peter");
// myName("Doc");

let age = (x, y) => {
  let results = x + y
  console.log(results)}
age(8,9)



function getFullname(firstName, lastName) {
  console.log('My name is', firstName, lastName);
}
getFullname('Goi', 'Naath');

let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } 
  else {
    return false;
  }
}
console.log(isEven(7));