// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePercentage);

function calculatePercentage() {
    // TODO:
    // 1. Get the maximum mark and student's mark from the input fields
    // 2. Calculate the percentage using the formula: (student's mark ÷ maximum mark) × 100
    // 3. Display the result in the percentage span element

    let maxMark = parseInt(document.getElementById('maxMark').value);
    let studentMark = parseInt(document.getElementById('studentMark').value);

    let percentage = (studentMark / maxMark) * 100 ;

    document.getElementById('percentage').textContent = percentage;
}
