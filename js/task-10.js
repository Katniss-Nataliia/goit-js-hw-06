function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

// createBoxes(amount){

// }


createBtn.addEventListener("click", () => {
  const newElm = document.createElement("div");
  newElm.style.width = "30px";
  newElm.style.height = "30px";
  newElm.style.backgroundColor = getRandomHexColor();
  boxes.append(newElm);
  
})

// destroyBtn.addEventListener("click", () => {
//   newElm.remove()
// })