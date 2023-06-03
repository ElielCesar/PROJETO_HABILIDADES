// vars
const btn_calcular = document.querySelector('#calcular')

btn_calcular.addEventListener('click', () => {

    let valor =  document.querySelector('#valor').value
    let qualidade = document.querySelector('#qualidade').value
    let gorjeta = ''

    if (valor == ''){
        setTimeout(function() {
            document.getElementById('alerta').style.display = ''
            document.querySelector('#valor_gorjeta').value = ''
            document.querySelector('#valor_total').value = ''
        })
    }
    else {
        switch (qualidade) {
            case 'excelente':
                gorjeta = valor * 0.1
                break;
    
            case 'otimo':
                gorjeta = valor * 0.08
                break
    
            case 'bom':
                gorjeta = valor * 0.05
                break
    
            case 'ruim':
                gorjeta = valor * 0.02
                break
            
            default:
                break;
        }
    
        gorjeta = parseFloat(gorjeta)
        valor = parseFloat(valor)
        let total = gorjeta + valor
        
        document.querySelector('#valor_gorjeta').value = ('R$' + gorjeta.toFixed(2))
        document.querySelector('#valor_total').value = ('R$'+ total.toFixed(2))
    }
})