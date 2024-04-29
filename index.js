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
    console.log(add(x, y));
}
