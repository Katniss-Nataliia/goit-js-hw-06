function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let initialBoxSize = 10;

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);


function handleCreate(){
   const boxMarkUp = createBoxes(inputNumber.value);
   boxes.append(...boxMarkUp);
   inputNumber.value = "";
}

function createBoxes(amount){
  let boxSize = 0;
  const boxElm = [];

  for (let i = 0; i<amount; i+=1){
    boxSize=initialBoxSize + i * 10;
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    boxElm.push(box)

  }
  return boxElm;
}

function handleDestroy (){
  boxes.innerHTML = "";
  initialBoxSize = 10;
}