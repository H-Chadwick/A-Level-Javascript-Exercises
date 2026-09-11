// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    // TODO:
    // 1. Get the order number and quantity from the input fields
    // 2. Calculate the total cost (£2.45 per bag)
    // 3. Display:
    //    - Order number
    //    - Quantity
    //    - Total cost (format to 2 decimal places)

    let orderNumber = parseInt(document.getElementById('orderNumber').value);
    let quantity = parseInt(document.getElementById('quantity').value);

    let total = quantity * 2.45

    document.getElementById('displayOrderNumber').textContent = orderNumber;
    document.getElementById('displayQuantity').textContent = displayQuantity;
    document.getElementById('totalCost').textContent = Math.round(total) + '.00';
}
