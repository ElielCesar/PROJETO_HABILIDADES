// API Digimon
const api = 'https://digimon-api.vercel.app/api/digimon'

window.onload = function(){
    fetch(api)
        .then(response => response.json())
        .then(response => {
            for (let index = 0; index < response.length; index++) {

                let construtor = `<div id="modelo_card" class="card">
                                    <img src="${response[index].img}">
                                    <hr>
                                    <div class="card-body">
                                        <h5 class="card-title">${response[index].name}</h5>
                                        <p class="card-text">${response[index].level}</p>
                                    </div>
                                </div>`
                document.querySelector('#digimons').innerHTML += construtor
            }
        })
}



