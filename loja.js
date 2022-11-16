async function CarregarTela() {
    var API = `https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products`


    response = await fetch(API)
    BodyJson = await response.json()

    var contador = -1

    for (const produto of BodyJson) {
        if (contador < 28) {
            contador++
        }
        const conteudo = `<div id="divPrincipal${contador}" class="produtos">
                <img src="${produto.img}" id="imagem${contador} "class="imagemProdutos">
                <ul>
                    <li class="nome" id="nomeProduto${contador}">${produto.nome}
                    </li>
        
                    <li class="preco" id="precoProduto${contador}">R$${produto.preco}
                    </li>
                </ul>
                <input type="button" onclick="adicionar(${contador})" value="add ao carrinho" id="" class="carrinho">
            </div>`

        document.querySelector("#main").innerHTML += conteudo

    }


}
usuario = localStorage.getItem("usuario")
usuarioJSON = JSON.stringify(usuario)
carrinhosalvo = localStorage.getItem(usuario)
var carrinhosalvoJSON = JSON.parse(carrinhosalvo)
if (carrinhosalvoJSON == null) {

    carrinho = []

} else {

    carrinho = JSON.parse(carrinhosalvo)

}
function adicionar(numero) {
    const produto = BodyJson[numero]

    carrinho.push(produto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem(usuario, carrinhoJSON)
}


function paginaCarrinho() {
    var carrinho1 = localStorage.getItem(usuario)
    var carrinhoValores = JSON.parse(carrinho1)

    for (produto of carrinhoValores) {
        const resultado = `<div class="produtos">
        <img src="${produto.img}" class="imagemProdutos">
        <ul>
            <li class="nome">${produto.nome}</li>
            <li class="preco">${produto.preco}</li>
        </ul>
    </div>
    `
        document.querySelector("#mainCarrinho").innerHTML += resultado
    }
}
