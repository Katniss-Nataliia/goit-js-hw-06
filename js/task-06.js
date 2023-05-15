const textInput = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", () => {

    //not sure about a better reference to data-length att instead using number 6....
    if (textInput.value.length == 6){
        textInput.style.borderColor = "#4caf50";
    }else{
        textInput.style.borderColor = "#f44336";
    }
})