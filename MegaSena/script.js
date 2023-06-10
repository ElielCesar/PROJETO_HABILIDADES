const btn_gerar = document.querySelector('.btn')
const span_bolas = ['#b0', '#b1', '#b2', '#b3', '#b4', '#b5']
let lista_numeros = []

function sortear_numero() {

   for (let i = 0; i < 6; i++) {
        let numero = Math.floor(Math.random() * 60) + 1

        !lista_numeros.includes(numero) ? lista_numeros.push(numero) : i--
   }
}

btn_gerar.addEventListener('click', () => {
   sortear_numero()

   for (let index = 0; index < 6; index++) {
      document.querySelector(span_bolas[index]).textContent = lista_numeros[index]
   }

   lista_numeros = []
});