// API
const api = 'https://www.omdbapi.com/?s=Batman&page=2&apikey=c23269b4'


window.onload = function(){
    fetch(api)
        .then(response => response.json())
        .then(response => {
            for (let index = 0; index <= response.Search.length; index++) {
                

                let construtor = `<div class="card me-2 ms-2 mb-2" style="width: 20rem;">
                                    <img src="${response.Search[index].Poster}" class="card-img-top" >
                                    <div class="card-body">
                                        <h5 class="card-title">${response.Search[index].Title}</h5>
                                        <p class="card-text mb-4">Ano:${response.Search[index].Year}</p>
                                        <button class="btn btn-danger">
                                        <i class="bi bi-play-btn-fill"></i>&nbsp; Assistir
                                        </button></div></div>`
                
                document.querySelector('#central').innerHTML += construtor
            }
        })
}