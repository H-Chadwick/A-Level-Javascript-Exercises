// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateBill);
});

// Function to calculate the restaurant bill
function calculateBill() {

    // Get all input values
    let foodTotal = parseFloat(document.getElementById('foodTotal').value);
    let drinksTotal = parseFloat(document.getElementById('drinksTotal').value);
    let diners = parseInt(document.getElementById('diners').value);
    let kidsCount = parseInt(document.getElementById('kidsCount').value);
    let day = document.getElementById('day').value;
    let time = parseFloat(document.getElementById('time').value);
    let loyaltyCard = document.getElementById('loyaltyCard').value;

    let totalPeople = diners + kidsCount;

    let serviceRate = 0;
    let discountAmount = 0;
    let freeKids = 0;

    // Service charge
    // 1-4: No charge
    // 5-8: 10%
    // 8+: 15%

    if (totalPeople <= 4) {
        serviceRate = 0;
    } else if (totalPeople <= 8) {
        serviceRate = 0.10;
    } else {
        serviceRate = 0.15;
    }

    // Time-based discounts

    if (time < 17) {
        // 20% off food
        discountAmount += foodTotal * 0.20;
    } else if (time >= 17 && time <= 19) {
        // 25% off drinks
        discountAmount += drinksTotal * 0.25;
    } else if (time > 22) {
        // 10% off total
        discountAmount += (foodTotal + drinksTotal) * 0.10;
    }

    // Day-based offers

    if (
        day === 'monday' ||
        day === 'tuesday' ||
        day === 'wednesday' ||
        day === 'thursday'
    ) {
        // Second main half price (simplified)
        discountAmount += foodTotal * 0.50;
    }
    else if (day === 'sunday') {
        freeKids = Math.min(kidsCount, diners * 2);

        if (freeKids > 0) {
            let costPerPerson = foodTotal / totalPeople;
            let kidsDiscount = freeKids * costPerPerson;
            discountAmount += kidsDiscount;
        }
    }

    // Loyalty discount

    let loyaltyRate = 0;

    if (loyaltyCard === 'Bronze') {
        loyaltyRate = 0.05;
    } else if (loyaltyCard === 'Silver') {
        loyaltyRate = 0.10;
    } else if (loyaltyCard === 'Gold') {
        loyaltyRate = 0.15;
    }

    // Subtotal

    let subtotal = foodTotal + drinksTotal;

    // Loyalty discount applied after previous discounts
    discountAmount += (subtotal - discountAmount) * loyaltyRate;

    // Service charge
    let serviceCharge = subtotal * serviceRate;

    // Final total
    let finalTotal = subtotal - discountAmount + serviceCharge;

    // Display results

    document.getElementById('subtotal').textContent =
        `Subtotal: £${subtotal.toFixed(2)}`;

    document.getElementById('discounts').textContent =
        `Discounts: £${discountAmount.toFixed(2)}`;

    document.getElementById('serviceCharge').textContent =
        `Service Charge: £${serviceCharge.toFixed(2)}`;

    document.getElementById('finalTotal').textContent =
        `Final Total: £${finalTotal.toFixed(2)}`;
}

//THAT WAS THE MOST PAINFULL PROGRAM EVER WRITTEN - H.CHADWICK