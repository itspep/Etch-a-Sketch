const container=document.getElementById("container");
for(let i=0; i<256; i++){
    const square=document.createElement("div");
    square.classList.add("square");
    container.appendChild(square); 
}
const events=document.querySelectorAll(".square");
for(let i=0; i<events.length; i++){
    events[1].addEventListener("mouseover", function(){
        events[1].styles.backgroundColor="black";
    })
}