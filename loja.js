async function CarregarTela() {
    var API = `https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products`


    var response = await fetch(API)
    var BodyJson = await response.json()

    var resultado = document.getElementById("main")


    for (const produto of BodyJson) {
        const conteudo = `<div class="produtos">
        <img src="${produto.img}" class="teste">
        <ul>
            <li class="nomeEpreco">${produto.nome}
            preço:${produto.preco}
            </li>
        </ul>
        <input type="button" value="" onclick="adicionar()" class="carrinho">
    </div>`

        document.querySelector("#main").innerHTML += conteudo

    }

    /* for (const nomeProduto of BodyJson) {
        const paragrafo = document.createElement("p")
        paragrafo.innerText = nomeProduto.nome
        resultado.append(paragrafo)
        console.log(nomeProduto.nome)
    } */

}
async function adicionar() {
    var id = await fetch`https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/` + id
    var idJson = await id.json()

    localStorage.setItem()

}



