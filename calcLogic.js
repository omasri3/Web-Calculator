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

// operate function takes in first and second operator and runs the function given by the operation
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

//Initialize the reference to the total display for the calculator
let totalDisplay = document.querySelector("#totalDisplay")

//Clear the text content of the display when hitting the clear button and reset to zero
function clearDisplay() {
    totalDisplay.textContent = "0";
}

//Write functions to add each number to the display when the button is clicked
function addZeroToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "0";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "0";
    }
}

function addOneToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "1";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "1";
    }
}

function addTwoToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "2";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "2";
    }
}

function addThreeToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "3";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "3";
    }
}

function addFourToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "4";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "4";
    }
}

function addFiveToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "5";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "5";
    }
}

function addSixToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "6";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "6";
    }
}

function addSevenToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "7";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "7";
    }
}

function addEightToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "8";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "8";
    }
}

function addNineToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "9";
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "9";
    }
}