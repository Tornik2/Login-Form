const emailInp = document.getElementById('e-mail')
const passInp = document.getElementById('password')
const emailSpan = document.querySelector('.email')
const passSpan = document.querySelector('.password')

document.body.addEventListener('click', (e)=> {    
    if (e.target.id === "e-mail") {
        emailSpan.classList.add("email-clicked")
    } else if (emailInp.value){
        emailSpan.classList.add("email-clicked")
    } else {
        emailSpan.classList.remove("email-clicked")
    }
    
    if (e.target.id === "password") {
        passSpan.classList.add('password-clicked')
    } else if (passInp.value){
        passSpan.classList.add("password-clicked")
    } else {
        passSpan.classList.remove('password-clicked')
    }
})


