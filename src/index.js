import getRandomColor from "../getRandomColor";

const starBtn = document.getElementById("start-btn")
const elem = document.createElement("div")
const score = document.querySelector("span")

let startTime ;
let clickedTime;

function blockGenerator(){
    elem.className = "square"
    elem.style.backgroundColor = getRandomColor()
    document.body.appendChild(elem)
    startTime = new Date()
}

starBtn.addEventListener("click", blockGenerator);

elem.addEventListener("click", e=>{
    if(e.target.className === "square"){
        e.target.classList.toggle("vision")
        clickedTime = new Date()
    }
    score.textContent = clickedTime - startTime
    setTimeout(blockGenerator, 2000)
})
