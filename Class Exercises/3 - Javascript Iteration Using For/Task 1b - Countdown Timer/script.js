// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    // Check if start number is positive
    // Check if delay is at least 100ms
    if (isNaN(startNum) || isNaN(delay)) {
        display.textContent = 'Please enter valid numbers.';
        return;
    }
    if (startNum <= 0) {
        display.textContent = 'Start number must be a positive integer.';
        return;
    }
    if (delay < 100) {
        display.textContent = 'Delay must be at least 100ms.';
        return;
    }
    // TODO: Disable button during countdown
    button.disabled = true;
    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    // Use setTimeout to create the delay between numbers
    for (let i = startNum; i >= 0; i--) {
        setTimeout(() => {
            display.textContent = i;
            if (i === 0) {
                display.textContent = 'Blast off!';
                button.disabled = false; // Re-enable button after countdown finishes
            }
        }, (startNum - i) * delay);
    }       
    // TODO: Show "Blast off!" at the end
                                         
    // TODO: Re-enable button after countdown finishes
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
