var usuariosSalvos = localStorage.getItem(`usuarios`)
var usuarios = JSON.parse(usuariosSalvos)


async function login() {

    const corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    }

    var email = corpo.email

    const requisicao = {
        method: 'POST',
        body: JSON.stringify(corpo),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao)
    const resultadoJson = await resultadoApi.json();

    if (resultadoJson.mensagem == "Login feito com sucesso") {

        usuarios.push(email)

        localStorage.setItem("acesso", true)

        var usuariosJSON = JSON.stringify(usuarios)

        localStorage.setItem(`usuarios`, usuariosJSON)

        /* window.location.href = "loja.html" */

    }
    else {
        alert(resultadoJson.mensagem)
        localStorage.setItem("acesso", false)
    }
}