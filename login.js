async function login() {
    debugger
    const corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    }

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
        localStorage.setItem("usuario", JSON.stringify(corpo.email))

        window.location.href = "loja.html"
    }
    else {
        alert(resultadoJson.mensagem)
        localStorage.setItem("acesso", false)
        localStorage.setItem("usuario", "")
    }
}