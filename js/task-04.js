const decreaseElm = document.querySelector('[data-action="decrement"]');
const increaseElm = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decreaseElm.addEventListener("click", ()=>{
    counterValue-=1;
    value.textContent = counterValue;
});

increaseElm.addEventListener("click", ()=>{
    counterValue+=1;
    value.textContent = counterValue;
})