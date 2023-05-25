// vars
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let button = document.querySelector('#btn_login')
let forget = document.querySelector('p')

// ocultar 'esqueceu senha ?'
forget.style.display = 'none'

// simula consulta ao banco de dados
let usuario = 'eliel@gmail.com'
let senha = 'xxx'

button.addEventListener('click', () => {
    if(email.value == '' || password.value == ''){
        alert('Todos os campos devem estar preenchidos!')
        forget.style.display = 'inline'

    }else if( email.value == usuario && password.value == senha){
        document.location.href = "todo/index.html"
        
    }else{
        alert('Usuário ou Senha incorretos!')
        forget.style.display = 'inline'
    }
})

