const inputScroll = document.querySelector('input');
const textField = document.querySelector('#text');
textField.style.fontSize = inputScroll.value + "px"


inputScroll.addEventListener("input", ()=> {
    textField.style.fontSize = inputScroll.value + "px"
})