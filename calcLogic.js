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
        nextNumberResetsDisplay = true;
        return "You can't divide by zero, nerd!"
    } else {
        return a/b
    }
}

// Initialize Two Operators for Basic Calculator Functionality
let firstOperator = null;
let secondOperator = null;
let operation = null;

//Track whether the next number needs to reset the display for second operator
let nextNumberResetsDisplay = false;

//Track whether the number has already been operated on
let numberHasBeenOperated = false;

// operate function takes in first and second operator and runs the function given by the operation
function operate(firstOperator, secondOperator, operation) {
    if (operation === "+") {
        result =  add(firstOperator,secondOperator);
    } else if (operation === "-") {
        result = subtract(firstOperator, secondOperator);
    } else if (operation === "*") {
        result =  multiply(firstOperator, secondOperator);
    } else if (operation === "/") {
        result = divide(firstOperator, secondOperator);
    } else {
        return error;
    }
    return Math.round(result * 10**8) / (10**8)
}

//Initialize the reference to the total display for the calculator
let totalDisplay = document.querySelector("#totalDisplay")

//Clear the text content of the display when hitting the clear button and reset to zero
function clearDisplay() {
    totalDisplay.textContent = "0";
    firstOperator = null;
    secondOperator = null;
    operation = null;
    nextNumberResetsDisplay = false;
}

//Write functions to add each number to the display when the button is clicked
function addZeroToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "0";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "0";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "0";
    }
}

function addOneToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "1";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "1";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "1";
    }
}

function addTwoToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "2";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "2";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "2";
    }
}

function addThreeToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "3";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "3";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "3";
    }
}

function addFourToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "4";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "4";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "4";
    }
}

function addFiveToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "5";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "5";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "5";
    }
}

function addSixToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "6";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "6";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "6";
    }
}

function addSevenToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "7";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "7";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "7";
    }
}

function addEightToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "8";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "8";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "8";
    }
}

function addNineToDisplay() {
    if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = "9";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "9";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + "9";
    }
}

function addDecimalToDisplay() {
    isThereAlreadyDecimal = totalDisplay.textContent.split(".").length >= 2;
    if (isThereAlreadyDecimal && !nextNumberResetsDisplay) {
        //Do Nothing
    } else if (totalDisplay.textContent === "0") {
        totalDisplay.textContent = totalDisplay.textContent + ".";
    } else if (nextNumberResetsDisplay) {
        totalDisplay.textContent = "0.";
        nextNumberResetsDisplay = false;
    } else {
        totalDisplay.textContent = totalDisplay.textContent + ".";
    }
}

//On operation click, store the number currently on the display as the first operator
//Then reset the display once the next number is pressed to that number
//On equals click, calculate the result and store the result as the first operator for more calculations

//Initialize operations
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equals = document.querySelector("#equals");

//Add event listeners that will run the calculation based on the current display and produce the correct result
addition.addEventListener("click", function (e) {
    if (nextNumberResetsDisplay) {
        operation = "+"
    } else if (operation !== null) {
        secondOperator = Number(totalDisplay.textContent);
        totalDisplay.textContent = operate(firstOperator, secondOperator, operation)
        firstOperator = Number(totalDisplay.textContent);
        secondOperator = null;
        operation = "+"
        nextNumberResetsDisplay = true;
    } else {
        operation = "+";
        firstOperator = Number(totalDisplay.textContent);
        nextNumberResetsDisplay = true;
    }
});

subtraction.addEventListener("click", function (e) {
    if (nextNumberResetsDisplay) {
        operation = "-";
    } else if (operation !== null) {
        secondOperator = Number(totalDisplay.textContent);
        totalDisplay.textContent = operate(firstOperator, secondOperator, operation)
        firstOperator = Number(totalDisplay.textContent);
        operation = "-"
        nextNumberResetsDisplay = true;
    } else {
        operation = "-";
        firstOperator = Number(totalDisplay.textContent);
        nextNumberResetsDisplay = true;
    }
});

multiplication.addEventListener("click", function (e) {
    if (nextNumberResetsDisplay) {
        operation = "*"
    }
    else if (operation !== null) {
        secondOperator = Number(totalDisplay.textContent);
        totalDisplay.textContent = operate(firstOperator, secondOperator, operation)
        firstOperator = Number(totalDisplay.textContent);
        operation = "*"
        nextNumberResetsDisplay = true;
    } else {
        operation = "*";
        firstOperator = Number(totalDisplay.textContent);
        nextNumberResetsDisplay = true;
    }
});

division.addEventListener("click", function (e) {
    if (nextNumberResetsDisplay) {
        operation = "/"
    }
    else if (operation !== null) {
        secondOperator = Number(totalDisplay.textContent);
        totalDisplay.textContent = operate(firstOperator, secondOperator, operation)
        firstOperator = Number(totalDisplay.textContent);
        operation = "/"
        nextNumberResetsDisplay = true;
    } else {
        operation = "/";
        firstOperator = Number(totalDisplay.textContent);
        nextNumberResetsDisplay = true;
    }
});

equals.addEventListener("click", function (e) {
    if (operation !== null) {
        secondOperator = Number(totalDisplay.textContent);
        totalDisplay.textContent = operate(firstOperator, secondOperator, operation)
        operation = null;
        nextNumberResetsDisplay = true;
    } else {
        firstOperator = totalDisplay.textContent;
        nextNumberResetsDisplay = true;
    }
});

//Delete the last character if backspace is pressed
function backspace() {
    let toBeDeleted = totalDisplay.textContent.slice(totalDisplay.textContent.length - 1);
    let isThereADecimalNext = totalDisplay.textContent.slice(totalDisplay.textContent.length - 2, totalDisplay.textContent.length - 1);
    if (totalDisplay.textContent === "0") {
        //Do Nothing
    } else if (totalDisplay.textContent.length === 1) {
        totalDisplay.textContent = "0";
    } else if (totalDisplay.textContent.length === 2 && totalDisplay.textContent.slice(0,1) === "-") {
        totalDisplay.textContent = "0";
    } else if (isThereADecimalNext === ".") {
        totalDisplay.textContent = totalDisplay.textContent.slice(0,totalDisplay.textContent.length - 2);
    } else {
        totalDisplay.textContent = totalDisplay.textContent.slice(0,totalDisplay.textContent.length-1);
    }
}

//Pressing a number on the keyboard should let you run the appropriate function
document.addEventListener( "keydown", function (e) {
    console.log(e);
    switch (e.key) {
        case "1":
            addOneToDisplay();
            break;
        case "2":
            addTwoToDisplay();
            break;
        case "3":
            addThreeToDisplay();
            break;
        case "4":
            addFourToDisplay();
            break;
        case "5":
            addFiveToDisplay();
            break;
        case "6":
            addSixToDisplay();
            break;
        case "7":
            addSevenToDisplay();
            break;
        case "8":
            addEightToDisplay();
            break;
        case "9":
            addNineToDisplay();
            break;
        case "0":
            addZeroToDisplay();
            break;
        case ".":
            addDecimalToDisplay();
            break;
        case "+":
            addition.click();
            break;
        case "-":
            subtraction.click();
            break;
        case "*":
            multiplication.click();
            break;
        case "/":
            division.click();
            break;
        case "=":
            equals.click();
            break;
        case "Enter":
            equals.click();
            break;
        case "Backspace":
            backspace();
            break;
    }
})