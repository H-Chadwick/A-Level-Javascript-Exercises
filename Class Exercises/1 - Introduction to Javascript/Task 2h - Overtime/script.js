// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePay);

function calculatePay() {
    // TODO:
    // 1. Get all input values:
    //    - Standard hourly rate
    //    - Overtime rate
    //    - Basic hours worked
    //    - Overtime hours worked
    // 2. Calculate:
    //    - Basic pay (standard rate × basic hours)
    //    - Overtime pay (overtime rate × overtime hours)
    //    - Total pay (basic pay + overtime pay)
    // 3. Display all amounts formatted to 2 decimal places

    let standardRate = parseFloat(document.getElementById('standardRate').value);
    let overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
    let basicHours = parseFloat(document.getElementById('basicHours').value);
    let overtimeHours = parseFloat(document.getElementById('overtimeHours').value);

    let basicPay = (standardRate * basicHours);
    let overtimePay = (overtimeRate * overtimeHours);
    let totalPay = (basicPay + overtimePay);

    document.getElementById('basicPay').textContent = basicPay;
    document.getElementById('overtimePay').textContent = overtimePay;
    document.getElementById('totalPay').textContent = totalPay;

}
