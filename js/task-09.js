function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const colorSpan = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", ()=>{
  colorSpan.textContent = getRandomHexColor();
  widget.style.backgroundColor = getRandomHexColor();
})