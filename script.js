let display = document.getElementById("display");
let calculation = "";

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  calculation = "";
}

function calculate() {
  calculation += display.value;
  let result = eval(calculation);

  // Check if the result is a decimal number and round to two decimal places
  if (result % 1 !== 0) {
    result = result.toFixed(2);
  }

  display.value = result;
  calculation = "";
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  event.preventDefault();
  if (key === " ") clearDisplay();
  else if (
    !isNaN(key) ||
    key === "." ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "Enter"
  ) {
    if (key === "Enter") {
      //   console.log(key);
      calculate();
    } else {
      appendToDisplay(key);
    }
  }
});
const clearButton = document.querySelector("button[onclick='clearDisplay()']");
clearButton.addEventListener("mousedown", function (event) {
  event.preventDefault();
});
