const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const percentageBtn = document.querySelector(".percentage");
const decimal = document.querySelector(".decimal");
const clearBtn = document.querySelector(".all-clear");

let prevNumber = "";
let currentNumber = "0";
let calculationOperator = "";
let result = 0;

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }

  calculationOperator = operator;
  currentNumber = '0';
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});



percentageBtn.addEventListener("click", function () {
  if (currentNumber === "0") {
    prevNumber /= 100;
    updateScreen(prevNumber);
  } else {
    currentNumber /= 100;
    updateScreen(currentNumber);
  }
});

const calculate = () => {
  let result = "";

  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }

  currentNumber = eval(result);
  calculationOperator = '';
}

equalSign.addEventListener("click", () => {
  if (currentNumber === "0") {
    return;
  } else {
    calculate();
    updateScreen(currentNumber);
  }
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  } else {
    currentNumber += dot;
  }
}

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

