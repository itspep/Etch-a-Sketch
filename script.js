//declaring the  variables to store the various elements collected
const container = document.getElementById("container");//the container ID
const generateButton = document.getElementById("generate");//for the generate button
const rangeInput = document.getElementById("mySlider"); //for the slider
const sliderValue = document.getElementById("sliderValue");// for the  slider value
const clear = document.getElementById("clear");//for the clear button
const colorToggle = document.getElementById("colorToggle");// for the color button
const eraser=document.getElementById("eraser");

let erase="white";
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
      else if (colorMode === "white"){
        square.style.backgroundColor="white";
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
        else if (colorMode==="white"){
          event.target.style.backgroundColor="white";
        }
      }
    });
    //add an event listener for mouseup
    square.addEventListener("mouseup", () => {
      isMouseDown = false;//change the isMouseDown to false
    });
    //now append the child to the container

    //NOTE: only when it is the event listener for mouseup do we have an append child
    container.appendChild(square);
  }
}
//all event listeners that has to do with  the squares are defined inside the the generateSquares function 
//add an event listener to the generate button 
generateButton.addEventListener("click", function () {
  //get the rangeInput value from the slider and store in numSquares
  const numSquares = rangeInput.value;
  //the Math.ceil function rounds the number to the smallest whole number
  //the Math.floor function rounds a number to the highest whole number
  //trhe Math.sqrt function returns the square root of the number passed to it

  //now in this case, the results for numRows and numColumns will be transferred
  //to the parameters of the setProperties which will be given to the custome variables 
  //of the css
  const numRows = Math.ceil(Math.sqrt(numSquares));
  const numColumns = Math.ceil(numSquares / numRows);
  //then call the function
  generateSquares(numColumns, numRows);
});
//this even listener clears the the background color, literally changing them to white
clear.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style.backgroundColor = ""));
});
//this event listener erasers or changes the colorMode to white which further changes the background color
eraser.addEventListener("click", () => {
  //if the colorMode is black or random all must be turned to white
  if(colorMode==="black"){
    colorMode="white";
  }
  else if(colorMode==="random"){
    colorMode="white";
  }
});

//this is the slider event listener
rangeInput.addEventListener("input", () => {
  const value = rangeInput.value;
  //dislplay the value generated
  sliderValue.textContent = value;
});
//another add event listener to change multiple colors for the background
//here the white is not include coze it is either color or black and white will mean to erase
colorToggle.addEventListener("click", () => {
  if (colorMode === "black") {
    colorMode = "random";
  } else{
    colorMode = "black";
  }
});
//now this event listener takes effect when we click on the document and the target will then specify which particular 
//part of the document
document.addEventListener("mousemove", (event) => {
  if (isMouseDown && event.target.classList.contains("square")) {
    if (colorMode === "black") {
      event.target.style.backgroundColor = "black";
    } else if (colorMode === "random") {
      event.target.style.backgroundColor = getRandomColor();
    }
    else if (colorMode==="white"){
      event.target.style.backgroundColor = "white";
    }
  }
});
//this function gets a random color 
function getRandomColor() {
  //first we define a letter and assign 16 hexadecimal values to it
  const letters = "0123456789ABCDEF";
  //color has the "#" to signify hex color format
  let color = "#";
  //The function runs a for loop with six iterations. This is because a valid hex color code requires six digits.
  for (let i = 0; i < 6; i++) {
    //For each iteration, the function generates a random number between 0 and 1 using the Math.random()
    //and then multiplies that number by 16 using Math.floor(Math.random() * 16). 
    //The result is then used as an index to select a character from the letters string.
    //The selected character is then appended to the color variable using the += operator.
    //After the loop completes, the function returns the final value of color, which is a valid hex color code.
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// generate initial set of squares
const numSquares = rangeInput.value;
const numRows = Math.ceil(Math.sqrt(numSquares));
const numColumns = Math.ceil(numSquares / numRows);
generateSquares(numColumns, numRows);
