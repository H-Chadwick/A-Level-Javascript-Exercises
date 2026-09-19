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
    let minutes = parseFloat(document.getElementById('minutes').value);
    let texts = parseInt(document.getElementById('texts').value);
    let data = parseInt(document.getElementById('data').value);
    let contract = document.getElementById('contract').value;
    let extraMinutes
    let extraData
    let extraMinutesCalc 
    let extraDataCalc
    let contractDiscount
    let isValue = minutes + data
    let bestValue
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
    if (contract === 'basicPlan' + minutes > 500 + data > 2) {
        extraMinutes = minutes - 500;
        extraData = data - 2;
        extraMinutesCalc = extraMinutes * 0.1
        extraDataCalc = extraData * 5.0;
    } else if (contract === 'standardPlan' + minutes > 1000 + data > 10) {
        extraMinutes = minutes - 1000;
        extraData = data - 10;
        extraMinutesCalc = extraMinutes * 0.1
        extraDataCalc = extraData * 5.0
    } else if (contract === 'premiumPlan' + data > 50) {
        extraMinutes = 0
        extraData = data - 50
        extraDataCalc = extraData * 5.0
        extraMinutesCalc = 0
    } else if (contract === 'unltimatePlan') {
        extraMinutes = 0
        extraData = 0
        extraDataCalc = 0
        extraMinutesCalc = 0
    }
    // TODO: Apply contract length discounts
    // 24 months: 10% off
    // 36 months: 15% off
    if (contract <24) {
        contractDiscount = 0
    } else if (contract >= 24) {
        contractDiscount = 0.9
    } else if (contract >=36) {
        contractDiscount = 0.85
    }
    // TODO: Determine the most cost-effective plan
    if (isValue <=502) {
        bestValue = 'Basic Plan'
    } else if (isValue <=1010) {
        bestValue = 'Standard Plan'
    } else if (isValue <=7500) {
        bestValue = 'Premium Plan'
    } else if (isValue >7500) {
        bestValue = 'Ultimate Plan'
    }
    // TODO: Display comparison of all plans

    // TODO: Show recommendation with potential savings
    document.getElementById('recommendation').textContent = `Recommended Plan: ${bestValue}` + ` Discounts Applied: ${contractDiscount}` + `%`;
    if (bestValue === 'basicPlan') {
        document.getElementById('recommendation').textContent = `Cost of Basic Plan is £ ${15}`
    } else if (bestValue === 'standardPlan') {
        document.getElementById('recommendation').textContent = `Cost of Standard Plan is £ ${25}`
    } else if (bestValue ==='premiumPlan') {
        document.getElementById('recommendation').textContent = `Cost of Premium Plan is £ ${35}`
    } else if (bestValue === 'ultimatePlan') {
        document.getElementById('recommendation').textContent = `Cost of Ultimate Plan is £ ${45}`
    }
}
