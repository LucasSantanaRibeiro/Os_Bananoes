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

        localStorage.setItem("acesso", true)

        localStorage.setItem(`usuario`, email)

        window.location.href = "index.html"

    }
    else {
        alert(resultadoJson.mensagem)
        localStorage.setItem("acesso", false)
    }
}