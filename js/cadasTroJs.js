var listaCadastrados = []

listaCadastrados = JSON.parse(localStorage.getItem('bdCadastro', listaCadastrados))
if (listaCadastrados == null){
    listaCadastrados = []
}


function cadastrar(){
    var nome = document.getElementById("inp").value
    var email =document.getElementById("inp1").value 
    var senha = document.getElementById("inp2").value
    

    var cadastro = validarCadastro(nome, email, senha)
    if (cadastro ==  false){
        return 
    }
    
    var objCadastro = {
        nome: nome,
        email: email,
        senha: senha
    }

     listaCadastrados.push(objCadastro)
     localStorage.setItem('bdCadastro', JSON.stringify(listaCadastrados))
     

     document.getElementById("inp").value =''
     document.getElementById("inp1").value =''
     document.getElementById("inp2").value= ''
     document.getElementById("inp").focus()

     location.href="index.html"
}


function validarCadastro(nome, email, senha){
if (nome == '' || email == '' || senha == '') {
    alert("é obrigatorio preencher todos os campos")
    return false
}
}
