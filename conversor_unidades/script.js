// variaveis DOM
let qtd = document.querySelector('#qtd')
let input_de = document.querySelector('#de_tipox')
let input_para = document.querySelector('#para_tipoy')
let btn = document.querySelector('#converter')
let result = document.querySelector('#resultado')

// variaveis de controle/texto
let de_x = ''
let para_y = ''
const Metro = 'Metro'
const Quilometro = 'Quilometro'
const Centimetro = 'Centimetro'
const Milimetro = 'Milimetro'

// funcão master
function converter(x, y){
    
    if( qtd.value == '' || qtd.value < 1){ // verifica se é zero ou vazio
        alert('A quantidade deve ser maior que 1')}
    
    if(input_de.value === input_para.value){ // se valores dos inputs forem iguais, nada precisa ser feito.
        result.setAttribute('value', qtd.value)}
   
    if(x == Metro && y == Quilometro){  // metros para quilometros
        result.setAttribute('value', ((qtd.value/1000) + ` ${Quilometro}(s)`))}
    
    if(x == Metro && y == Centimetro){  // metros para centimetros
        result.setAttribute('value', ((qtd.value*100) + ` ${Centimetro}(s)`))}

    if(x == Metro && y == Milimetro){   // metros para milimetros
        result.setAttribute('value', ((qtd.value*1000) + ` ${Milimetro}(s)`))}

    if(x == Quilometro && y == Metro){  // quilometros para metros
        result.setAttribute('value', ((qtd.value*1000) + ` ${Metro}(s)`))}

    if(x == Quilometro && y == Centimetro){ // quilometros para centimetros
        result.setAttribute('value', ((qtd.value*100000) + ` ${Centimetro}(s)`))}

    if(x == Quilometro && y == Milimetro){  // quilometros para milimetros
        result.setAttribute('value', ((qtd.value*1000000) + ` ${Milimetro}(s)`))}

    if(x == Centimetro && y == Metro){  // centimetros para metros
        result.setAttribute('value', ((qtd.value/100) + ` ${Metro}(s)`))}

    if(x == Centimetro && y == Quilometro){ // centimetros para quilometros
        result.setAttribute('value', ((qtd.value/100000) + ` ${Quilometro}(s)`))}

    if(x == Centimetro && y == Milimetro){  // centimetros para milimetros
        result.setAttribute('value', ((qtd.value*10) + ` ${Milimetro}(s)`))}

    if(x == Milimetro && y == Centimetro){   // Milímetro para centímetro
        result.setAttribute('value', ((qtd.value/10) + ` ${Centimetro}(s)`))}

    if(x == Milimetro && y == Metro){   // Milímetro para metro
        result.setAttribute('value', ((qtd.value/1000) + ` ${Metro}(s)`))}
 
    if(x == Milimetro && y == Quilometro){  // Milímetro para Quilometro
        result.setAttribute('value', ((qtd.value/1000000) + ` ${Quilometro}(s)`))}
}

// monitora input De:
input_de.addEventListener('input', () => {
    de_x = input_de.value })

// monitora input Para:
input_para.addEventListener('input', () => {
    para_y = input_para.value })

// Ao clicar no botão
btn.addEventListener('click', () => { 
    converter(de_x, para_y) })
