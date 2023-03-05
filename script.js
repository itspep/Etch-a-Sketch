//declaring the  variables to store the various elements collected
const container = document.getElementById("container");//the container ID
const generateButton = document.getElementById("generate");//for the generate button
const rangeInput = document.getElementById("mySlider"); //for the slider
const sliderValue = document.getElementById("sliderValue");// for the  slider value
const clear = document.getElementById("clear");//for the clear button
const colorToggle = document.getElementById("colorToggle");// for the color button
//set the default color for the squares
let colorMode = "black";
//set the isMouseDown to false, meaning the mouse is not pressed
let isMouseDown = false;
//create a function to generate the squares
//here the function takes two arguments
function generateSquares(numColumns, numRows) {
  /* the custome properties (--num-columns, --num-rows) will be replaced by the new values contained
  in the numColumns and the numRows respectively
  the setProperty allows us to modify the properties of a custom property*/
  container.style.setProperty("--num-columns", numColumns);
  container.style.setProperty("--num-rows", numRows);
  container.innerHTML = ""; // remove existing squares
  //the for loop creates the new squares based on the numColumns and numRows
  for (let i = 0; i < numColumns * numRows; i++) {
    const square = document.createElement("div");
    //create a class for each square named "square"
    square.classList.add("square");
    square.style.backgroundColor = "white"; // set default background color to white
    /*after creating the new divs (squares)
    add an event listener with mouseDown as a parameter*/
    square.addEventListener("mousedown", () => {
      isMouseDown = true;//set the isMouseDown to true
      if (colorMode === "black") {//already color mode was set initially to black
        square.style.backgroundColor = "black";//if colorMode is black set the background color to black
      } else if (colorMode === "random") { //else if color mode is random set the background to getRandom
        square.style.backgroundColor = getRandomColor();
      }
    });
    //add a mousemove to change the background color when the user drags the mouse 
    square.addEventListener("mousemove", (event) => {
      //check to see of isMouseDown is true and check if the event has a classlist which contains square
      if (isMouseDown && event.target.classList.contains("square")) {
        //check to see if color mode is black
        if (colorMode === "black") {
          event.target.style.backgroundColor = "black";
        } else if (colorMode === "random") {//else if it is random call the random function
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
