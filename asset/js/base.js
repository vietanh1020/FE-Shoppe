var modal = document.querySelector('.modal')
var register = document.querySelector('.js_register')
var login = document.querySelector('.js_login')
var formRegister = document.querySelector('.modal-form--register')
var formLogin = document.querySelector('.modal-form--login')
var modalBody = document.querySelector('.modal-body')
// show form đăng ký
register.addEventListener('click',function(){
    modal.classList.add('open_flex')
    formRegister.classList.add('open_block') 
})

// show form đăng nhập
login.addEventListener('click',function(){
    modal.classList.add('open_flex')
    formLogin.classList.add('open_block') 
})

// click ra ngoài modal thì đóng
modal.addEventListener('click',function(){
    formRegister.classList.remove('open_block')
    formLogin.classList.remove('open_block')
    modal.classList.remove('open_flex')
})

modalBody.addEventListener('click',(event)=>{
    event.stopPropagation()
})

// Hiện form đăng nhập
function showLogin(){
    var modal = document.querySelector('.modal')
    var formLogin = document.querySelector('.modal-form--login')
    modal.classList.add('open_flex')
    formLogin.classList.add('open_block')
    
}

