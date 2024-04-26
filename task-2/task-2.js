$(document).ready(function () {
  $(".buttons").on("click", "button", function (event) {
    const value = $(this).text();
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearResult();
    } else if (value === "%") {
      calculatePercentage();
    } else if (value === "+/-") {
      toggleSign();
    } else {
      appendToResult(value);
    }
  });

  $(document).on("keydown", function (event) {
    const key = event.key;
    if (
      !isNaN(key) ||
      key === "." ||
      key === "*" ||
      key === "/" ||
      key === "-" ||
      key === "+"
    ) {
      appendToResult(key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      clearLastCharacter();
    }
  });
});

function appendToResult(value) {
  $("#result").val(function (_, currentValue) {
    return currentValue + value;
  });
}

function clearResult() {
  $("#result").val("");
}

function clearLastCharacter() {
  $("#result").val(function (_, currentValue) {
    return currentValue.slice(0, -1);
  });
}

function calculatePercentage() {
  const currentInput = $("#result").val();
  const percentage = parseFloat(currentInput) / 100;
  $("#result").val(percentage);
}

function toggleSign() {
  $("#result").val(function (_, currentValue) {
    if (currentValue.startsWith("-")) {
      return currentValue.substr(1);
    } else {
      return "-" + currentValue;
    }
  });
}

function calculateResult() {
  const expression = $("#result").val();
  try {
    const result = evalExpression(expression);
    $("#result").val(result);
  } catch (error) {
    $("#result").val("Error");
  }
}

function evalExpression(expression) {
  const operators = /[+\-*/]/g;
  const parts = expression.split(operators);
  const operands = parts
    .filter((part) => part !== "")
    .map((part) => parseFloat(part));
  const ops = expression.match(operators);

  let result = operands[0];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const nextOperand = operands[i + 1];
    switch (op) {
      case "+":
        result += nextOperand;
        break;
      case "-":
        result -= nextOperand;
        break;
      case "*":
        result *= nextOperand;
        break;
      case "/":
        if (nextOperand === 0) {
          throw new Error("Division by zero");
        }
        result /= nextOperand;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
  return result;
}
