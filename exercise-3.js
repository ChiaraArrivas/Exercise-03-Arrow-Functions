const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const value = function (value) {
  console.log(value);
}

let tot = divide(subtract(multiply(sum(2, 4), sum(5,2)), 2), 5);

value(tot);

/*const arrowOne = (a, b) => a+b;
let sum = arrowOne(2, 4);

const arrowThree=(a,b) => a*b;
let multiply=arrowThree(sum, (5 + 2));

const arrowTwo=(a, b) => a-b;
let subtract=arrowTwo(multiply,2);

const arrowFour=(a,b)=> a/b;
let  divide =arrowFour(subtract, 5);

console.log(divide);*/


//Avevo frainteso la consegna.