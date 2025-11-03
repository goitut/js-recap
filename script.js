// numbers 
let num = 10;
console.log(typeof num);

console.log(5 /0);
console.log(-5 / 0);

console.log('Hi' / 3);
console.log(Math.sqrt(-4));

let largeNumber = 882345678987654n;
console.log(largeNumber);
let lNumber = BigInt('882345678987654');
console.log(lNumber);
console.log(largeNumber + lNumber);
console.log(lNumber * lNumber);

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2); // exponential in programming Js
console.log(Math.sqrt(16));
console.log(Math.floor(16.9));
console.log(Math.ceil(16.1));
console.log(Math.round(16.4));
console.log(Math.round(16.4566656));

let heightt = 10; // double t avoid redeclaration in line 41


console.log(Math.round(16.4566656));


// calculating area of a triangle in js
const radius = 5;
const height = 12;

const volume = Math.PI * (radius ** 2) * height;
const volume2 = Math.PI * (radius ** 2) * height;

console.log(volume.toFixed(2));
console.log(volume2.toFixed(2));

// Booleans
let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn);

// undefined
let lastName;
console.log( lastName);

// null 
let employment = null;
console.log(typeof employment);

// an objec
let name = "John";
let age = 30;
let isStudent = true;
let gender = "male";

let persn = {
  name: "John", 
  age: 30, 
  isStudent: true, 
  gender: "male",
  address: {
    city: "Nairobi",
    street: "Mpaka Road",
  },
};
// updating values of an object
persn.age = 45;
console.log(persn.age);
console.log(persn.address.city);
console.log(persn["name"]);


/*
Writing an object values and displaying or rendering the purpose/execution on browser
*/
let appartment = "Casamia"
document.writeln(`Hello ${appartment}.`); 



// Arrays (lists)
const laptops = ["ThinkPad", "HP", "MacBook", "Dell", ];
document.writeln(`Lists of Laptops for sell ${laptops}.`)
console.log(laptops);

let mixedArray = ["John", true, 40, null, undefined, {
  gender: "male",
}];

console.log(mixedArray);

// Accessing elements in an array using index
console.log(laptops[2]);

// Accessing an object that's in an array
console.log(mixedArray[5].gender);

console.log(mixedArray.length);

// Adding an element to an array
laptops.push("Asus"); // added to end of list
laptops.unshift("Toshiba"); // added to beginning of list
laptops.splice(2, 0, "Acer"); // added to specifi index on the list.
console.log(laptops);
console.log(laptops.indexOf("Dell")); // check the index of an element in array


laptops.pop();
laptops.shift();
laptops.splice(2, 0);
console.log(laptops);

const sortedArray = laptops.sort();
console.log(sortedArray);
const reversedArray = sortedArray.reverse();
console.log(reversedArray);




function groupBy() {
  let employers = [
    {
      name: 'Alice', age: 25, city: 'New York'
    },
    {
      name: 'Bob', age: 30, city: 'Chicago'
    },
    {
      name: 'Charlie', age: 35, city: 'New york'
    },
    {
      name: 'Dave', age: 40, city: 'Chicago'
    }
  ]

  return
};

groupBy();

  const employers = [
    {
      name: 'Alice', age: 25, city: 'New York'
    },
    {
      name: 'Bob', age: 30, city: 'Chicago'
    },
    {
      name: 'Charlie', age: 35, city: 'New york'
    },
    {
      name: 'Dave', age: 40, city: 'Chicago'
    }
  ];
const groupedByName = Object.groupBy(employers, (employers) => employers.name);

console.log(groupedByName);

let fullName = "Goi Naath";
let aged = 17;
let isStudentAt = true;


// rendering/displaying on brower
document.getElementById("p1"). textContent = `Your name is ${fullName}`;
document.getElementById("p2"). textContent = `You are ${aged} years old.`;
document.getElementById("p3"). textContent = `Goi Naath is a student ${isStudentAt}`;

let contact = [1, 2, 3, 4, 5, 6];

document.getElementById("num"). textContent = `Contact code of friends ${contact}`;


// data conversion
let agge = window.prompt('how old are you');
agge+=1;
agge = Number(agge);
console.log(agge.typeof.agge);

let x = 'pizza';
let y = 'pizza';
let z = 'pizza';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

let machine = {
  cpu: 'i9',
  ram: 16,
  brand: 'HP',

  greet: function() {
    console.log('Hello World');
  }
};

machine.greet();