let displayValue = '0';

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (value === 'C') {
        clearDisplay();
    } else {
        if (displayValue === '0' || displayValue === 'Error') {
            displayValue = value;
        } else {
            displayValue += value;
        }
        updateDisplay();
    }
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function calculatePercentage() {
    try {
        displayValue = (eval(displayValue) / 100).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}
