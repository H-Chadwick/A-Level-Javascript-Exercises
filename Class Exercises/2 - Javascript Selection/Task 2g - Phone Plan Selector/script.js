// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', comparePlans);
});

// Function to compare different phone plans
function comparePlans() {
    // TODO: Get usage values from inputs
    let minutes = parseFloat(document.getElementById('mintes').value);
    let texts = parseInt(document.getElementById('texts').value);
    let data = parseInt(document.getElementById('data').value);
    let contract = document.getElementById('contract').value;
    let extraMinutes
    let extraData
    let extraMinutesCalc 
    // TODO: Define plan limits and costs
    const plans = {
        basic: {
            name: "Basic Plan",
            cost: 15,
            minutes: 500,
            texts: "unlimited",
            data: 2
        },
        standard: {
            name: "Standard Plan",
            cost: 25,
            minutes: 1000,
            texts: "unlimited",
            data: 10
        },
        premium: {
            name: "Premium Plan",
            cost: 35,
            minutes: "unlimited",
            texts: "unlimited",
            data: 50
        },
        ultimate: {
            name: "Ultimate Plan",
            cost: 45,
            minutes: "unlimited",
            texts: "unlimited",
            data: "unlimited"
        }
    };
    
    // TODO: Calculate costs for each plan including overages
    // Extra minutes: 10p per minute
    // Extra data: £5 per GB
    if (contract === 'basicPlan' + minutes > 500) {
        extraMinutes = minutes - 500;
        extraMinutesCalc = extraMinutes * 0.1
    } else if (contract === 'standardPlan')
    // TODO: Apply contract length discounts
    // 24 months: 10% off
    // 36 months: 15% off
    
    // TODO: Determine the most cost-effective plan
    
    // TODO: Display comparison of all plans
    
    // TODO: Show recommendation with potential savings
}
