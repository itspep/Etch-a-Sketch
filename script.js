const container = document.getElementById("container");
const generateButton = document.getElementById("generate");
const rangeInput = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");
const clear = document.getElementById("clear");
const colorToggle = document.getElementById("colorToggle");

let colorMode = "black";
let isMouseDown = false;

function generateSquares(numColumns, numRows) {
  container.style.setProperty("--num-columns", numColumns);
  container.style.setProperty("--num-rows", numRows);
  container.innerHTML = ""; // remove existing squares
  for (let i = 0; i < numColumns * numRows; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = "white"; // set default color to white
    square.addEventListener("mousedown", () => {
      isMouseDown = true;
      if (colorMode === "black") {
        square.style.backgroundColor = "black";
      } else if (colorMode === "random") {
        square.style.backgroundColor = getRandomColor();
      }
    });
    square.addEventListener("mousemove", (event) => {
      if (isMouseDown && event.target.classList.contains("square")) {
        if (colorMode === "black") {
          event.target.style.backgroundColor = "black";
        } else if (colorMode === "random") {
          event.target.style.backgroundColor = getRandomColor();
        }
      }
    });
    square.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    container.appendChild(square);
  }
}

generateButton.addEventListener("click", function () {
  const numSquares = rangeInput.value;
  const numRows = Math.ceil(Math.sqrt(numSquares));
  const numColumns = Math.ceil(numSquares / numRows);
  generateSquares(numColumns, numRows);
});

clear.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style.backgroundColor = ""));
});

rangeInput.addEventListener("input", () => {
  const value = rangeInput.value;
  sliderValue.textContent = value;
});

colorToggle.addEventListener("click", () => {
  if (colorMode === "black") {
    colorMode = "random";
  } else {
    colorMode = "black";
  }
});

document.addEventListener("mousemove", (event) => {
  if (isMouseDown && event.target.classList.contains("square")) {
    if (colorMode === "black") {
      event.target.style.backgroundColor = "black";
    } else if (colorMode === "random") {
      event.target.style.backgroundColor = getRandomColor();
    }
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// generate initial set of squares
const numSquares = rangeInput.value;
const numRows = Math.ceil(Math.sqrt(numSquares));
const numColumns = Math.ceil(numSquares / numRows);
generateSquares(numColumns, numRows);
