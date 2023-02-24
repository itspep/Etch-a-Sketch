const container = document.getElementById("container");
const generateButton = document.getElementById("generate");
const rangeInput = document.getElementById("mySlider");
const sliderValue=document.querySelector(".sliderValue");

function generateSquares(numColumns, numRows) {
  container.style.setProperty("--num-columns", numColumns);
  container.style.setProperty("--num-rows", numRows);
  container.innerHTML = ""; // remove existing squares
  for (let i = 0; i < numColumns * numRows; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mousedown", ()=>{
      isMmouseDown=true;
      square.style.backgroundColor="black";
    });
    square.addEventListener("mousemove", ()=>{
      if(isMmouseDown){
      square.style.backgroundColor="black";}
    });
    square.addEventListener("mouseup", ()=>{
      isMmouseDown=false;
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
rangeInput.addEventListener("input", ()=>{
  const value=rangeInput.value;
  sliderValue.textContent=value;
})

// generate initial set of squares
const numSquares = rangeInput.value;
const numRows = Math.ceil(Math.sqrt(numSquares));
const numColumns = Math.ceil(numSquares / numRows);
generateSquares(numColumns, numRows);
