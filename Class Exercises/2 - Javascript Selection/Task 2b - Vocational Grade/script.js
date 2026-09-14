// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory = parseInt(document.getElementById('theory').value);
    let practical = parseInt(document.getElementById('practical').value);
    let percentage = theory + practical;
    // TODO: Check if both scores are above 50% (Pass requirement)
    if (percentage >= 50) {
        let result = 'Passed'
    } else {
        result = 'Failed'
    }
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    if (percentage >= 70) {
        result = 'Distinciton'
    }
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    // Also display the average score

    let average = (percentage) / 2

    document.getElementById('result').textContent = result;
    document.getElementById('average').textContent = average;
}
