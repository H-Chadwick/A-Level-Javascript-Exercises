// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    // 2. Calculate:
    //    - (A + B + C) / 3
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements

    let num1 = parseFloat(document.getElementById('numberA').value);
    let num2 = parseFloat(document.getElementById('numberB').value);
    let num3 = parseFloat(document.getElementById('numberC').value);

    const average = (num1 * num2 * num3) / 3;
    const product = num1 * num2 * num3;
    const expression = num1 + (num2 * num3);
    document.getElementById('average').textContent = average;
    document.getElementById('product').textContent = product;
    document.getElementById('expression').textContent = expression;
    }

