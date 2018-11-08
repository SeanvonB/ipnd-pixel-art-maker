function createCanvas(canvasHeight, canvasWidth) {
    // Remove previous canvas
    pixelCanvas.innerHTML = "";
    // Create [canvasHeight] new rows
    for (let row = 1; row <= canvasHeight; row += 1) {
        let newRow = document.createElement("tr");
        pixelCanvas.appendChild(newRow);
        // Create [canvasWidth] new column cells per row
        for (let column = 1; column <= canvasWidth; column += 1) {
            let newColumn = document.createElement("td");
            newRow.appendChild(newColumn);
        }};
    // Set variable to apply changes to all canvas cells
    let allCells = document.querySelectorAll("td");
    // Add color function to all cells
    for (let cell = 0; cell < allCells.length; cell += 1) {
        allCells[cell].addEventListener("click", function(event) {
            event.preventDefault();
            // Update color variable
            let color = colorPicker.value;
            // Draw or erase color as needed
            if (this.style.backgroundColor) {
                this.style.backgroundColor = null;
            } else {
                this.style.backgroundColor = color;
    }})};
};

sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    // Update size variables
    let canvasHeight = inputHeight.value;
    let canvasWidth = inputWidth.value;
    // Create new canvas
    createCanvas(canvasHeight, canvasWidth);
});
