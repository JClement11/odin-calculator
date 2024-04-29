let currentValue = "";
let previousValue = "";
let operator = "";
let displayValue = "";
let total;

function add(num1, num2) { 
    total = +num1 + +num2;
    display.textContent = total;
    currentValue = "";
    previousValue = "";
}

function subtract(num1, num2) {
    total = +num1 - +num2;
    display.textContent = total;
    currentValue = "";
    previousValue = "";
    return total;
}

function multiply(num1, num2) {
    total = +num1 * +num2;
    display.textContent = total;
    currentValue = "";
    previousValue = "";
    return total;
}

function divide(num1, num2) {
    total = +num1 / +num2;
    display.textContent = total;
    currentValue = "";
    previousValue = "";
    return total;
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

const display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

numbers.forEach((number) => number.addEventListener("click", function(e) {
    handleNumber(e.target.textContent);
    display.textContent = displayValue;
}));

operators.forEach((operator) => operator.addEventListener("click", function(e) {
    handleOperator(e.target.textContent);
    display.textContent = displayValue;
}));

function handleNumber(num) {
    displayValue += num;
    currentValue += num;
}

function handleOperator(op) {
    displayValue += op;
    previousValue = currentValue;
    operator = op;
    currentValue = "";
}

const buttonDecimal = document.querySelector(".decimal");
buttonDecimal.addEventListener("click", () => {
    display.textContent += ".";
    displayValue += ".";
    currentValue += ".";
});

const buttonEnter = document.querySelector(".enter");
buttonEnter.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    operate(previousValue, currentValue, operator);
});