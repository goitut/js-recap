function sayhello() {
  console.log('............');
  console.log('hello');
  console.log('............');
}
sayhello()

const sayhere = (z, y) => {
  console.log(z + y);
}
sayhere(2, 4)


// Arrow Function
let  calc = (name, age, height) => {
    console.log(`My name is ${name}, ${age} by age and ${height} feets`);
}
calc('Goi', 20, 1.6)

let shoppingCart = (amount) => {
    let results = amount * 0.0025;
    return results;
}
let tax = shoppingCart(1000);
console.log(tax)

function cuteGirl() {
    let herName = 'Nya Lat';
  console.log(`The most beautiful I know is ${herName}`);
}
cuteGirl()

const greet = () => {
  let her = 'Babe'
  return `She is ${her}`
}
console.log(greet());

let addNum =(q, m) => {
    return q * m
}
console.log(addNum(3,5));

let personDetails = (name, age, email) => {

   age = 20;
  age = 34;
  return `My name is ${name}, ${age} years, and here ${email} is my email address`;
}
console.log(personDetails('Goi', 20, 'goinaath@gmail.com'));


//hoisting/ hoisted function
let counter = 0;
function timeout() { // working with time requires () at the start of the function block and at the end as well.
  setTimeout(function() {
    console.log('hi ' + counter++);
    timeout();
  }, 2000); 
}

timeout();
(function(date) {
  console.log(`Imediately Invoked Funnction Expression (IIFI) ${date}`);
})(19,)

// setTimeout();
// (function() {
//   let counter = 0;
//   console.log('Timing' + counter++)
// }, 1000)();

let a = 'second';
function testScope() {
  console.log(a);

  let b = 'her'
  if(b !== 'first') {
    console.log(b);
  } else(
    console.log('Wrong')
  )
}

testScope()

let accessVar = 'Accessing outer scope variable';
function getVariable() {
  let y = 'innerVar';
  console.log(accessVar);
  console.log(y);
}
function secondAccess() {
  let d = 'second';
  console.log(accessVar);
  console.log(y);
}
getVariable()
secondAccess()