async function CarregarTela() {
    var API = `https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products`


    var response = await fetch(API)
    var BodyJson = await response.json()

    var resultado = document.getElementById("main")

    for (const produto of BodyJson) {
        const img = document.createElement("img")
        img.src = produto.img
        resultado.append(img)
        img.classList.add("borda")
    }

    /* for (const nomeProduto of BodyJson) {
        const paragrafo = document.createElement("p")
        paragrafo.innerText = nomeProduto.nome
        resultado.append(paragrafo)
        console.log(nomeProduto.nome)
    } */

}

function carregarlivros(){
   
}



