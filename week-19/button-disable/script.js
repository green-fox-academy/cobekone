let favpet = document.querySelectorAll('[name="favanimal"]');
let catFacts = document.querySelectorAll('[name="catfacts"]');
let buttons = document.querySelectorAll('[type="button"]');
let form = document.querySelector('form')
let alertMessage = document.querySelector('#alertmessage')

let iLoveCatsButton = buttons[0]
let signUpButton = buttons[1]

let dog = false
let cat = false
let viktor = false
let yes = false
let no = false

function buttonEnabler(event){
console.log(event.target.form[0].checked)
dog = event.target.form[0].checked
cat = event.target.form[1].checked
viktor = event.target.form[2].checked
yes = event.target.form[3].checked
no = event.target.form[4].checked

if (dog || cat) {
    signUpButton.disabled = false;
}else if(viktor && no){
    signUpButton.disabled = false;
}else{
    signUpButton.disabled = true;
}
if(yes){
    iLoveCatsButton.disabled = false;
}else{
    iLoveCatsButton.disabled = true;
}

if (no){
    iLoveCatsButton.disabled = true;
}}

function writeMessage(){
alertMessage.innerHTML = "Thank you, you've successfully signed up for cat facts"
if (viktor && no) {
    alertMessage.innerHTML = "Sigh, we still added you to the cat facts list"
}
}

form.addEventListener('click', buttonEnabler)
iLoveCatsButton.addEventListener('click', writeMessage)
signUpButton.addEventListener('click', writeMessage)