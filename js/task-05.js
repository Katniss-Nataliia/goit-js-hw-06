const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleChange);

function handleChange(event){
    if(event.target.value.length === 0){
        nameOutput.textContent = "Anonymous"
    } else{
        nameOutput.textContent = event.target.value;
    }
}


