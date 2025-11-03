function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbyle() {
  console.log('Goodbye!');
}
greet('Alice', sayGoodbyle)