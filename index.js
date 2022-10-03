import getRandomColor from "./getRandomColor";
import css from "./style.css";

const starBtn = document.getElementById("start-btn");
const elem = document.createElement("div");
const score = document.querySelector("span");

let startTime;
let clickedTime;

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

function blockGenerator() {
  elem.className = "square";
  elem.style.backgroundColor = getRandomColor();

  let randomTop = getRandomNumber(0, winHeight - 200);
  let randomLeft = getRandomNumber(0, winWidth - 200);

  elem.style.top = randomTop + "px";
  elem.style.left = randomLeft + "px";

  document.body.appendChild(elem);
  startTime = new Date();
}
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

starBtn.addEventListener("click", blockGenerator);

elem.addEventListener("click", (e) => {
  if (e.target.className === "square") {
    e.target.classList.toggle("vision");
    clickedTime = new Date();
  }
  const time = Math.floor(Math.random() * 5500);
  const miliSec = clickedTime - startTime;
  const seconds = Math.floor(miliSec / 1000);
  const minutes = Math.floor(seconds / 60);

  if (miliSec < 1000) {
    score.textContent = miliSec + "ms";
  } else if (seconds < 60) {
    score.textContent = `${seconds}sec ${miliSec - seconds * 1000}ms`;
  } else if (seconds > 60) {
    score.textContent = `${minutes}min ${seconds - minutes * 60}sec ${
      miliSec - seconds * 1000
    }ms`;
  }

  setTimeout(blockGenerator, time);
});
