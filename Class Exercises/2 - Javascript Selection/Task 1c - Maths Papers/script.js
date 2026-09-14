// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // Get the marks for all three papers
    let paper1 = parseFloat(document.getElementById('paper1').value);
    let paper2 = parseFloat(document.getElementById('paper2').value);
    let paper3 = parseFloat(document.getElementById('paper3').value);

    let result = '';

    // Calculate the total mark
    let total = paper1 + paper2 + paper3;

    // Check if total is greater than 160
    if (total > 160) {
        result = 'Passed';
    } else {
        result = 'Failed';
    }

    // Display the total mark and result
    console.log(`total ${total}`);
    console.log(`result ${result}`);

    document.getElementById('result').textContent = `Total: ${total} — ${result}`;
}