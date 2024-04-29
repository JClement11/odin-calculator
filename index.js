let currentValue = "";
let previousValue = "";
let operator = "";
let displayValue = "";
let total;

function add(num1, num2) {
    const total = num1 + num2;
    return total;
}

function subtract(num1, num2) {
    const total = num1 - num2;
    return total;
}

function multiply(num1, num2) {
    const total = num1 * num2;
    return total;
}

function divide(num1, num2) {
    const total = num1 / num2;
    return total;
}

function operate(x, y, sign) {
    console.log(add(x, y));
}
