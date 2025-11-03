let age = 20;
if (age <= 25) {
  console.log("You're an adult");
} else if (age <= 15 && age <= 20) {
  console.log("You are a teenger");
}
else {
  console.log("You're still a child");
} 

var count = 2;
if (count == 2) {
    console.log("count is 3");
} else if (count > 3) {
  console.log("count is too high");
} else if (count < 3) {
  console.log("count is too low");
}
 else {
  console.log("count is not 3");
}

// to be taken to switch.js later............
let hero = 'green arrow';
switch (hero) {
  case 'superman':
    console.log("super strength");
    console.log("x-ray vision");
    break; // what is the use breake here?
    case 'batman':
    console.log("intelligent");
    console.log("fighting skills");
    break;
    default:
      console.log("member of JLA");
}

// ternary operator
let a = 1, b = "1";
let x = 2, y = "7"
// let result = (a === b) ? "equal" : "inqual";
let result = (a != b) ? "equal" : "inqual";
let resultNotEqual = (a !== b) ? "equal" : "inqual";
console.log(resultNotEqual);
console.log(result);