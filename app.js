let display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Optional Bonus: Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendChar(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
