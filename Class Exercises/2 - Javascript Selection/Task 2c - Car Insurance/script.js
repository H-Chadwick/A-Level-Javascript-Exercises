// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseInt(document.getElementById('age').value);
    let noClaims = parseInt(document.getElementById('noClaims').value);
    let previousClaims = parseInt(document.getElementById('previousClaims').value)
    // TODO: Calculate base premium (£500)
    let basePremium = 500;
    // TODO: Apply age adjustment
    // Under 25: +50%
    // 25-40: No change
    // Over 40: -15%
    if (age < 25) {
        basePremium * 1.5
    } else if (age <40) {
        basePremium
    } else if (age >40) {
        basePremium * 0.5
    }
    // TODO: Apply no claims bonus
    // 0 years: No discount
    // 1-2 years: 10% discount
    // 3-5 years: 25% discount
    // Over 5 years: 35% discount
    if (noClaims === 0) {
        basePremium
    } else if (noClaims <2) {
        basePremium * 0.9
    } else if (noClaims < 5) {
        basePremium * 0.75
    } else if (noClaims > 5) {
        basePremium * 0.65
    }
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    if (previousClaims > 0) {
        basePremium = basePremium * (1 + (previousClaims * 0.2));
    } 
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('breakdownSection').textContent = `Age: ${age} ` + ` No claims: ${noClaims}` + ` Previous Claims ${previousClaims} `
    document.getElementById('result').textContent = basePremium
}
