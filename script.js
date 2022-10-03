const nameField = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordRe = document.querySelector("#passwordRe");
const submit = document.querySelector("#submit");

function checker() {
    const checkPass = password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g)
    const checkName = /^[a-zA-Z ]{2,30}$/;
    
    if(checkName.test(nameField.value) === false) alert("Specify the Proper Name");
    else console.log('name');
    if(!email.value.includes('@')) alert("Specify Correct Mail Address");
    else console.log('mail');
    if(!password.value.includes(checkPass) && password.value.length < 8) alert("Specify Correct Password Address " + password.value);
    else console.log("password");
    if(passwordRe.value !== password.value) alert("Specify Correct PasswordRe Address");
    else console.log("passwordRe");
}

submit.addEventListener("click", checker);