const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {
        elements: {email, password} 
    } = event.currentTarget;

    if (email.value === "" || password.value.trim() === ""){
        return alert ("all fields must be filled in")
    }

    console.log(`Login: ${email.value}, Password: ${password.value.trim()}`);
    event.currentTarget.reset();
}