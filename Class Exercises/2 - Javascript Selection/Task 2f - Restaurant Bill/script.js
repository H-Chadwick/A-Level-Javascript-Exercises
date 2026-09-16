// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateBill);
});

// Function to calculate the restaurant bill
function calculateBill() {
    // TODO: Get all input values
    let foodTotal = parseFloat(document.getElementById('foodTotal').value);
    let drinksTotal = parseFloat(document.getElementById('drinksTotal').value);
    let diners = parseFloat(document.getElementById('diners').value);
    let kidsCount = parseFloat(document.getElementById('kidsCount').value);
    let day = document.getElementById('day').value;
    let time = parseFloat(document.getElementById('time').value);
    let loyaltyCard = document.getElementById('loyaltyCard').value;
    let totalPeople = diners + kidsCount
    let mandatory
    let discountTime
    // TODO: Calculate service charge based on group size
    // 1-4: No mandatory charge
    // 5-8: 10%
    // 8+: 15%
    if (totalPeople <4) {
        mandatory = 0
    } else if(totalPeople >5 && totalPeople < 8){
        mandatory = 1.10
    } else if(totalPeople > 8) {
        mandatory = 1.15
    }
    // TODO: Apply time-based discounts
    // Before 5 PM: 20% off food
    // 5-7 PM: 25% off drinks
    // After 10 PM: 10% off total
    if (time < 17) {
        discountTime = (foodTotal) * 0.8
    } else if (time >17 && time < 19) {
        discountTime = (drinksTotal) * 0.75
    } else if (time > 22) {
        discountTime = (foodTotal + drinksTotal) * 0.9
    }
    // TODO: Apply special offers
    // Mon-Thu: Second main half price
    // Sunday: Kids eat free (max 2 per adult)
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thurday') {
        let disocuntDay = foodTotal * 0.5
    } else if (day === 'Sunday') {
        let freeKids = Math.min(kidsCount, diners * 2);
        if (kidsCount > 0) {
            let costPerPerson = foodTotal / totalPeople;
            foodTotal = foodTotal - (freeKids * costPerPerson);
        }
    }
    // TODO: Apply loyalty card discount
    // Bronze: 5% off
    // Silver: 10% off
    // Gold: 15% off
    let loyaltyRate = 0
    if (loyaltyCard === 'Bronze') {
        loyaltyRate = 0.05;
    } else if (loyaltyCard === 'Silver') {
        loyaltyCard = 0.10;
    } else if (loyaltyCard === 'Gold') {
        loyaltyCard = 0.15;
    }
    // TODO: Calculate subtotal
    let subtotal = foodTotal + drinksTotal
    document.getElementById('subtotal').textContent = `Subtotal: ${subtotal}`;
    // TODO: Create breakdown of all discounts applied
    document.getElementById('discounts').textContent = `Discounts: ${disocuntTime} && ${discountDay} && ${freeKids}`; 
    document.getElementById('serviceCharge').textContent = `Service Charge: ${mandatory}`
    // TODO: Calculate and display final total
    document.getElementById('finalTotal').textContent = `Final Total is: ${}`
}
