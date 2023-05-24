let button = document.querySelector('.btn')
let input = document.querySelector('#text')
let p_resultado = document.querySelector('p')
let total_p = 0

input.addEventListener('input', () => {
   let palavras = input.value
   total_p = palavras.split(' ').length // conta espacos em branco entre palavras
})

button.addEventListener('click', () => {
    p_resultado.textContent = `o número de palavras é ${total_p}`
})