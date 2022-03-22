let eyeIcon = document.querySelector('svg');
let passwordField = document.querySelector('#passfield');

function modifyFieldType(){
    console.log(passwordField.type)
    if (passwordField.type == "text") {
        passwordField.type = "password"
    }else{
passwordField.type = "text"
}}

eyeIcon.addEventListener('click',modifyFieldType)