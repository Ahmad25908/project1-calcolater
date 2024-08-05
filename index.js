"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "number1",
        message: "Enter your first number:"
    },
    {
        type: "number",
        name: "number2",
        message: "Enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*", "**", "%"],
        message: "select operator"
    }
]);
var number1 = answer.number1, number2 = answer.number2, operator = answer.operator;
if (number1 && number2 && operator) {
    var result = 0;
    if (operator === "+") {
        result = number1 + number2;
    }
    else if (operator === "-") {
        result = number1 - number2;
    }
    else if (operator === "*") {
        result = number1 * number2;
    }
    else if (operator === "/") {
        result = number1 / number2;
    }
    else if (operator === "%") {
        result = (number1 / number2) * 100;
    }
    else if (operator === "**") {
        result = Math.pow(number1, number2);
    }
    console.log("Your result is:", result);
}
else {
    console.log("Please enter the valid value");
}
