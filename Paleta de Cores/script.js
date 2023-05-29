const btn_gerar = document.querySelector('.btn')
const div_novas_paletas = document.querySelector('#novas_paletas')
const array_boxes = ['c1', 'c2', 'c3', 'c4', 'c5']

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 256);}
  
btn_gerar.addEventListener('click', () => {

    array_boxes.forEach(element => {
        const num_1 = gerarNumeroAleatorio();
        const num_2 = gerarNumeroAleatorio();
        const num_3 = gerarNumeroAleatorio();

        let cor_final = `rgb(${num_1}, ${num_2}, ${num_3})` //gera e salva o RGB da cor
        let div = document.getElementById(element) // pega o elemento DIV inteiro

        div.style.backgroundColor = cor_final // seta cor da div
        div.querySelector('p').textContent = cor_final // seta o texto da div
    });
})




