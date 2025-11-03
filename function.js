// const products = [
//   {nsme: 'laptop', price: 25000, onSale: true},
//   {nsme: 'mouse', price: 5000, onSale: true},
// ]

// const getSaleItems = (saleProducts) => {
//   return saleProducts.filter(products => products.price === 1000);
// }

// console.log(getSaleItems);

let counter = 0;
function timeout() {
  setTimeout(function () {
    console.log('hi ' + counter++);
    timeout();
  }, 2000);
}

timeout();


let a = 'first';

function scope() {
  console.log(a);
  a = 'New GUY';
  let c = 'third';
 if ( a != "") {
   console.log(a);

 }
};

scope();
console.log(a);

// local scope can't be call outside the code block
// console.log(c);

function greet(name, callback) {
  console.log(`hello, ${name}!`);
  callback();
}

function sayGoogle() {
  console.log('Goodbye!');
}

greet('Naath', sayGoogle);

