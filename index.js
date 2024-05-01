let currentValue = "";
let previousValue = "";
let operator = "";
let displayValue = "";
let total;

function add(num1, num2) { 
    total = +num1 + +num2;
    total = parseFloat(total.toFixed(2));
    display.textContent = total;
    currentValue = "";
    previousValue = "";
}

function subtract(num1, num2) {
    total = +num1 - +num2;
    total = parseFloat(total.toFixed(2));
    display.textContent = total;
    currentValue = "";
    previousValue = "";
    return total;
}

function multiply(num1, num2) {
    total = +num1 * +num2;
    total = parseFloat(total.toFixed(2));
    display.textContent = total;
    currentValue = "";
    previousValue = "";
    return total;
}

function divide(num1, num2) {
    if (num2 == 0) {
        display.style.fontSize = "35px";
        display.textContent = "ERROR! You can't divide by zero silly!";
        currentValue = "";
        previousValue = "";
    } 
    else {
        total = +num1 / +num2;
        total = parseFloat(total.toFixed(2));
        display.textContent = total;
        currentValue = "";
        previousValue = "";
        return total;
    }
}

function operate(x, y, sign) {
    if (sign === "+") {
        add(x, y);
    }
    else if (sign === "−") {
        subtract(x, y);
    }
    else if (sign === "×") {
        multiply(x, y);
    }
    else if (sign === "÷") {
        divide(x, y);
    }
}

let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

numbers.forEach((number) => number.addEventListener("click", function(e) {
    handleNumber(e.target.textContent);
}));

function handleNumber(num) {
    display.style.fontSize = "75px";
    displayValue += num;
    currentValue += num;
    display.textContent = displayValue;
}

operators.forEach((operator) => operator.addEventListener("click", function(e) {
    handleOperator(e.target.textContent);
}));

function handleOperator(op) {
    if (displayValue.includes("+") === false && displayValue.includes("−") === false
    && displayValue.includes("×") === false && displayValue.includes("÷") === false) {
        displayValue += op;
        previousValue = currentValue;
        operator = op;
        currentValue = "";
        display.textContent = displayValue;
    }
}

const buttonDecimal = document.querySelector(".decimal");
buttonDecimal.addEventListener("click", addDecimal);

function addDecimal() {
    if (display.textContent === "ERROR! You can't divide by zero silly!") {
        display.textContent = "";
    }
    display.style.fontSize = "75px";
    display.textContent += ".";
    displayValue += ".";
    currentValue += ".";  
}

const buttonEnter = document.querySelector(".enter");
buttonEnter.addEventListener("click", calculateExpression);

function calculateExpression() {
    display.textContent = "";
    displayValue = "";
    operate(previousValue, currentValue, operator);
}

const buttonBackspace = document.querySelector(".backspace");
buttonBackspace.addEventListener("click", deleteLastElement);

function deleteLastElement() {
    if (currentValue.length !== 0 && previousValue.length !== 0 && operator.length !== 0) {
        currentValue = currentValue.slice(0, -1);
        display.textContent = displayValue.slice(0, -1);
        displayValue = displayValue.slice(0,-1);
    }
    else if (currentValue.length === 0 && previousValue.length !== 0 && operator.length !== 0) {
        operator = operator.slice(0, -1);
        display.textContent = displayValue.slice(0, -1);
        displayValue = displayValue.slice(0,-1);
        currentValue = previousValue;
        previousValue = "";
    }
    else if (currentValue.length === 0 && previousValue.length === 0 && operator.length !== 0) {
        operator = operator.slice(0, -1);
        display.textContent = displayValue.slice(0, -1);
        displayValue = displayValue.slice(0,-1);
    }
    else if (currentValue.length === 0 && previousValue.length !== 0 && operator.length === 0) {
        previousValue = previousValue.slice(0, -1);
        display.textContent = displayValue.slice(0, -1);
        displayValue = displayValue.slice(0,-1);
    }
    else if (currentValue.length !== 0 && previousValue.length === 0 && operator.length === 0) {
        currentValue = currentValue.slice(0, -1);
        display.textContent = displayValue.slice(0, -1);
        displayValue = displayValue.slice(0,-1);
    }
}

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", clearCalculator);

function clearCalculator() {
    currentValue = "";
    previousValue = "";
    displayValue = "";
    display.textContent = "";
}

window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    }
    if (e.key === "+") {
        handleOperator(e.key);
    }
    if (e.key === "-") {
        handleOperator("−");
    }
    if (e.key === "*") {
        handleOperator("×");
    }
    if (e.key === "/") {
        handleOperator("÷");
    }
    if (e.key === ".") {
        addDecimal(e.key);
    }
    if (e.key === "Enter") {
        calculateExpression(e.key);
    }
    if (e.key === "Backspace") {
        deleteLastElement(e.key);
    }
}