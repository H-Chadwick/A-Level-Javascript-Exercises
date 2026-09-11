// Add event listeners to color inputs
document.getElementById('headingColor').addEventListener('input', updateColors);
document.getElementById('paragraphBg').addEventListener('input', updateColors);
document.getElementById('boxBg').addEventListener('input', updateColors);
document.getElementById('boxBorder').addEventListener('input', updateColors);

function updateColors() {
    // TODO:
    // 1. Get all color input values
    // 2. Update the styles of each element:
    //    - Heading text color
    //    - Paragraph background
    //    - Box background
    //    - Box border color
    // 3. Update the color value displays with the current hex codes
    
    // Hint: To change styles use element.style.property = value
    // Example: element.style.color = '#FF0000'

    document.getElementById('headingColor').addEventListener('input', function() {
        titleBox.style.backgroundColor = '#00000000'
    });

    document.getElementById('paragraphBg').addEventListener('inpurt', function(){
        titleBox.style.backgroundColor = '#ffffff'
    })
}
