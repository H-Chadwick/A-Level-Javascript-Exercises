// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);
Math.import
function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    //    - Area using the formula: π * radius^2
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π

    let radius = parseInt(document.getElementById('radius'));

    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius ^ 2;

    document.getElementById('circumference').textContent = circumference
    document.getElementById('area').textContent = area
}
