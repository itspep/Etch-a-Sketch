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