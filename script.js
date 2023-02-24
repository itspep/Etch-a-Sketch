const container = document.getElementById("container");
const generateButton = document.getElementById("generate");
const rangeInput = document.getElementById("mySlider");

function generateSquares(numColumns, numRows) {
  container.style.setProperty("--num-columns", numColumns);
  container.style.setProperty("--num-rows", numRows);
  container.innerHTML = ""; // remove existing squares
  for (let i = 0; i < numColumns * numRows; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", ()=>{
      square.style.backgroundColor="black";
    });
    container.appendChild(square);
  }
}

generateButton.addEventListener("click", function() {
  const numSquares = rangeInput.value;
  const numRows = Math.ceil(Math.sqrt(numSquares));
  const numColumns = Math.ceil(numSquares / numRows);
  generateSquares(numColumns, numRows);
});

// generate initial set of squares
const numSquares = rangeInput.value;
const numRows = Math.ceil(Math.sqrt(numSquares));
const numColumns = Math.ceil(numSquares / numRows);
generateSquares(numColumns, numRows);
