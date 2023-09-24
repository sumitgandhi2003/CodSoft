// let inputValue = document.querySelector(".display-screen input");
// const displayInput = (input) => {
//   if (input == "ac") inputValue.value = "";
//   else inputValue.value += input;
//   console.log(inputValue.value.length);
//   // for(let i= 0; i<inputValue.value.length; i++){
//   //   if()
//   // }
// };

// function charDelete() {
//   inputValue = String(inputValue).substring(0, inputValue.length - 1);
//   Number(inputValue);
// }

let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function displayInput(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}
function charDelete() {
  displayValue = displayValue.substring(0, displayValue.length - 1);
  updateDisplay();
}

updateDisplay();

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    /[0-9+\-*/=.]/.test(key) ||
    key == "Backspace" ||
    key == "Escape" ||
    key == "Enter"
  ) {
    if (key.toLowerCase() === "escape") {
      clearDisplay();
    } else if (key.toLowerCase() === "enter") {
      calculate();
    } else if (key.toLowerCase() == "backspace") {
      charDelete();
    } else {
      displayInput(key);
    }
  }
});
