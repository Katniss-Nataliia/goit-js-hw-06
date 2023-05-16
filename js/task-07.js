const inputScroll = document.querySelector('input');
const textField = document.querySelector('#text');

inputScroll.addEventListener("input", ()=> {
    
    textField.style.fontSize = inputScroll.value + "px"
})