var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdCadastro'))
if (listaCadastro == null) {
    listaCadastro = []
}
console.log(listaCadastro);

function entrar() {
    var nome = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    var encontrado = false
    listaCadastro.forEach((item, i) => {
        if (nome == item.email && senha == item.senha) {
            encontrado = true
        }
    })

    if (encontrado == false) {
        alert ('Usuário não encontrado')
        return
    } else {
        alert('Bem Vindo ao Quiz dos Mals')
        location.href="pagPrincipal.html"
    }

    
}   