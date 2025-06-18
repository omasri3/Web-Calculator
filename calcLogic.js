// Basic Functions for addition, subtraction, multiplication, and division, to be called later during calculator functions

function add(a,b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) {
        return "You can't divide by zero, nerd!"
    } else {
        return a/b
    }
}

// Initialize Two Operators for Basic Calculator Functionality
let firstOperator = null;
let secondOperator = null;
let operation = null;

function operate(firstOperator, secondOperator, operation) {
    if (operation === "+") {
        return add(firstOperator,secondOperator);
    } else if (operation === "-") {
        return subtract(firstOperator, secondOperator);
    } else if (operation === "*") {
        return multiply(firstOperator, secondOperator);
    } else if (operation === "/") {
        return divide(firstOperator, secondOperator);
    } else {
        return error;
    }
}