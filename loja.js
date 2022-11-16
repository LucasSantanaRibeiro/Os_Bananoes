async function CarregarTela() {
    var API = `https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products`


    response = await fetch(API)
    BodyJson = await response.json()

    var contador = -1

    var resultado = document.getElementById("main")
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
                <input type="button" onclick="adicionar${contador}()" value="add ao Carrinho" id=" class="carrinho">
            </div>`

        document.querySelector("#main").innerHTML += conteudo

    }


}
/* const testeCarrinho = `<div class="carrinhoCSS">
    <img src="${produto.img}" class="imagemProdutos">
    <ul>
        <li class="nome">${produto.nome}</li>
        <li class="preco">${produto.preco}</li>
    </ul>
</div>`

const carrinhoDeCompras = document.getElementById("carrinhoDeCompras") */
carrinhosalvo = localStorage.getItem("Carrinho")
var carrinhosalvoJSON = JSON.parse(carrinhosalvo)
if (carrinhosalvoJSON == null) {

    carrinho = []

} else {

    carrinho = JSON.parse(carrinhosalvo)

}
function adicionar0() {
    const produto = BodyJson[0]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar1() {
    const produto = BodyJson[1]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar2() {
    const produto = BodyJson[2]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar3() {
    const produto = BodyJson[3]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar4() {
    const produto = BodyJson[4]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar5() {
    const produto = BodyJson[5]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar6() {
    const produto = BodyJson[6]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar7() {
    const produto = BodyJson[7]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar8() {
    const produto = BodyJson[8]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar9() {
    const produto = BodyJson[9]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar10() {
    const produto = BodyJson[10]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar11() {
    const produto = BodyJson[11]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar12() {
    const produto = BodyJson[12]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar13() {
    const produto = BodyJson[13]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar14() {
    const produto = BodyJson[14]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar15() {
    const produto = BodyJson[15]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar16() {
    const produto = BodyJson[16]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar17() {
    const produto = BodyJson[17]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar18() {
    const produto = BodyJson[18]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar19() {
    const produto = BodyJson[19]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar20() {
    const produto = BodyJson[20]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar21() {
    const produto = BodyJson[21]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar22() {
    const produto = BodyJson[22]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar23() {
    const produto = BodyJson[23]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar24() {
    const produto = BodyJson[24]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar25() {
    const produto = BodyJson[25]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar26() {
    const produto = BodyJson[26]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}

function adicionar27() {
    const produto = BodyJson[27]

    var nome = produto.nome
    var preco = produto.preco

    var arrayproduto = [nome, preco]

    carrinho.push(arrayproduto)
    carrinhoJSON = JSON.stringify(carrinho)
    localStorage.setItem("Carrinho", carrinhoJSON)
}


function paginaCarrinho() {
    jsonteste = JSON.parse(carrinhosalvo)
    var varteste = jsonteste[3]
    resultado = document.getElementById("carrinhoDeCompras")
    resultado.append(varteste)
    console.log(varteste)
}

