// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateMortgage);
});

// Function to calculate the mortgage details
function calculateMortgage() {
    // TODO: Get all input values
    let housePrice = parseFloat(document.getElementById('housePrice').value);
    let deposit = parseFloat(document.getElementById('deposit').value);
    let creditScore = parseFloat(document.getElementById('creditScore').value);
    let annualSalary = parseFloat(document.getElementById('annualSalary').value);
    let employmentStatus = document.getElementById('employmentStatus').value;
    console.log(employmentStatus)
    // TODO: Calculate deposit percentage
    let depositPercentage = housePrice * deposit
    // TODO: Set base interest rate (3%)
    let baseInterest = 0.03
    // TODO: Adjust interest rate based on deposit percentage
    // 10-15%: Base rate + 2%
    // 16-25%: Base rate + 1%
    // Above 25%: Base rate
    if (deposit >10 <15) {
        baseInterest * 1.02
    } else if (deposit >16 <25) {
        baseInterest * 1.01
    } else if (deposit >25) {
        baseInterest * 0
    }
    // TODO: Adjust interest rate based on credit score
    // Excellent (800-950): -0.5%
    // Good (700-799): No change
    // Fair (600-699): +0.5%
    // Poor (below 600): +1%
    if (creditScore >800) {
        baseInterest * 0.995
    } else if (creditScore > 700) {
        baseInterest
    } else if (creditScore > 600) {
        baseInterest * 1.05
    } else if (creditScore <600) {
        baseInterest * 1.1
    }
    // TODO: Calculate maximum borrowing amount based on employment
    // Full-time: 4.5× salary
    // Self-employed: 4× salary
    // Part-time: 3.5× salary
    if (employmentStatus = 'fullTime') {
        annualSalary * 4.5
    } else if (employmentStatus = 'selfEmployed') {
        annualSalary * 4
    } else if (employmentStatus = 'partTime') {
        annualSalary * 3.5
    }
    // TODO: Calculate required loan amount (house price - deposit)
    let loanAmount = housePrice - deposit
    // TODO: Check if loan amount is within acceptable limit
    
    // TODO: Calculate monthly payment using the formula:
    // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // Where:
    // P = Monthly Payment
    // L = Loan Amount
    // c = Monthly Interest Rate (Annual Rate / 12)
    // n = Total Number of Payments (25 years × 12)
    let monthlyInterestRate = baseInterest / 12
    let numberOfPayment = 25 * 12
    let step1 = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayment)
    let step2 = Math.pow((1 + monthlyInterestRate), numberOfPayment) - 1
    let monthlyFormula = loanAmount * step1 / step2
    console.log(step1)
    console.log(step2)
    console.log(monthlyFormula)
    // TODO: Calculate total amount repayable
    const totalRepayable = monthlyFormula * numberOfPayment
    // TODO: Display all results
    document.getElementById('monthlyPayment').textContent = monthlyFormula.toFixed(2);
    document.getElementById('totalRepayable').textContent = totalRepayable.toFixed(2);

}
