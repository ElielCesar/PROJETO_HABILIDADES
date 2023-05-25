// vars
let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let button = document.querySelector('#btn01')
let p = 0
let a = 0
let imc = 0

peso.addEventListener('input', () => { p = peso.value })

altura.addEventListener('input', () => { a = altura.value/100 })

button.addEventListener('click', () => {
    if(p > 0 && a > 0){
        imc = p / (a*a)
        document.querySelector('#resultado').textContent = 'Seu IMC é de: ' + imc.toFixed(2)

        switch (true) {
            case (imc <= 18.5):
                document.querySelector('#detalhes').textContent = 'Você esta muito magro(a)';
                break;
    
            case (imc >= 18.5 && imc <= 24.9):
                document.querySelector('#detalhes').textContent = 'Você esta dentro da normalidade';
                break;
    
            case (imc >= 25 && imc <= 29.9):
                document.querySelector('#detalhes').textContent = 'Você esta com sobrepeso';
                break;
    
            case (imc >= 30 && imc <= 39.9):
                document.querySelector('#detalhes').textContent = 'Você esta com obesidade';
                break;
    
            default:
                document.querySelector('#detalhes').textContent = 'Algo deu errado, favor verificar os dados.';
                break;
        }
    }else{
        alert('Insira seu peso e altura. Nenhum campo pode estar em branco ou igual a zero')
    }

    
})
