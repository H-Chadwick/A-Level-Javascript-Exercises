const countBtn = document.getElementById('countBtn');
const output = document.getElementById('output');
const numberInput = document.getElementById('numberInput');

countBtn.addEventListener('click', () => {
    countUp();
});

function countUp() {
    let count = 1;
    let result = '';

    // Get the number the user entered
    let N = parseInt(numberInput.value);

    while (count <= N) {
        result += count + '<br>';
        count++;
    }

    output.innerHTML = result;
}