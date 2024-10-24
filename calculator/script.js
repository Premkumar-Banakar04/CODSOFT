// Function to append number
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); 
    } catch (e) {
        display.value = "Error";
    }
}