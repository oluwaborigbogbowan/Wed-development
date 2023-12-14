const toggle= document.querySelector('#show')
const password= document.querySelector('#password')

toggle.addEventListener("click", ()=>{
    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type ='password'
    }
})