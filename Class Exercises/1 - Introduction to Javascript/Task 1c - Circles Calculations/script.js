// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    //    - Area using the formula: π * radius^2
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π

    let radius = parseFloat(document.getElementById('radius').value);

    let circumference = Math.PI * (2 * radius);
    let area = Math.PI * (radius * radius);

    document.getElementById('circumference').textContent = Math.round(circumference)
    document.getElementById('area').textContent = Math.round(area)
}