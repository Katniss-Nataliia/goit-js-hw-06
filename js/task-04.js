const counter = document.querySelector('#counter');

const decrease = counter.firstElementChild;
const increase = counter.lastElementChild;
const value = document.querySelector('#value');
let counterValue = 0;

decrease.addEventListener("click", ()=>{
    value.textContent = counterValue - 1
});

increase.addEventListener("click", ()=>{
    value.textContent = counterValue + 1
})