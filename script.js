const container=document.getElementById("container");
for(let i=0; i<256; i++){
    const square=document.createElement("div");
    square.classList.add("square");
    container.appendChild(square); 
}
const events=document.querySelectorAll(".square");
for(let i=0; i<events.length; i++){
    events[i].addEventListener("mouseover", function(){
        events[i].style.backgroundColor="black";
    });
}
const sliderContainer = document.getElementById('container');
const generateButton = document.getElementById('generateButton');
const deleteButton = document.getElementById('deleteButton');
const numSquaresInput = document.getElementById('numSquares');
const squareSizeInput = document.getElementById('squareSize');

function createSquares(numSquares, squareSize) {
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        sliderContainer.appendChild(square);
    }
}
// Add event listener to generate button
generateButton.addEventListener('click', function() {
  // Remove existing squares
  while (sliderContainer.firstChild) {
      sliderContainer.removeChild(sliderContainer.firstChild);
  }
  // Create new squares
  const numSquares = numSquaresInput.value;
  const squareSize = squareSizeInput.value;
  createSquares(numSquares, squareSize);
});

// Set maximum value for input fields
numSquaresInput.max = 1000;
squareSizeInput.max = 50;

