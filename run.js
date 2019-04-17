// Step 1: import/require the calculator.js file
var calculator = require('./calculator');

var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// Step 2: Calculate the results using the exported function from the calculator file.
calculator.calculate(operand, num1, num2);
