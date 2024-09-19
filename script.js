// Get the display element
const display = document.getElementById('display');

// Append number or operator to display
function appendNumber(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}