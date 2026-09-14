// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', calculateLeague);
});

// Function to calculate which league the player belongs to
function calculateLeague() {
    // TODO: Get the handicap value from the input field
    let handicap = document.getElementById('handicap').value;
    let message = '';
    // TODO: Check if the handicap is less than 13
    if (handicap < 13) {
        message = "Your handicap is too low"
    } else {
        message = "Your handicap is good"
    }
    // TODO: Display the appropriate message in the result paragraph
    document.getElementById('result').textContent = message;
}
