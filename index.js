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

const display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

numbers.forEach((number) => number.addEventListener("click", function(e) {
    display.style.fontSize = "75px";
    handleNumber(e.target.textContent);
    display.textContent = displayValue;
}));

function handleNumber(num) {
    displayValue += num;
    currentValue += num;
}

operators.forEach((operator) => operator.addEventListener("click", function(e) {
    handleOperator(e.target.textContent);
    display.textContent = displayValue;
}));

function handleOperator(op) {
    displayValue += op;
    previousValue = currentValue;
    operator = op;
    currentValue = "";
}

const buttonDecimal = document.querySelector(".decimal");
buttonDecimal.addEventListener("click", () => {
    if (display.textContent === "ERROR! You can't divide by zero silly!") {
        display.textContent = "";
    }
    display.style.fontSize = "75px";
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
const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", () => {
    currentValue = "";
    previousValue = "";
    displayValue = "";
    display.textContent = "";
});