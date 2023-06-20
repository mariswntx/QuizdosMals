var listaPerguntas = []

listaPerguntas = JSON.parse(localStorage.getItem('bdPerguntas')) || bancoPerguntas()

function bancoPerguntas(){
    var dados = colar
}
function cadastrarPergn() {

    var pergunta = document.getElementById("inp").value
    var imagem = document.getElementById("imagem").value
    var AlternativaA = document.getElementById("inp1").value
    var AlternativaB = document.getElementById("inp2").value
    var AlternativaC = document.getElementById("inp3").value
    var AlternativaD = document.getElementById("inp4").value
    var correta = document.getElementById("correta").value

    if (pergunta == "" || imagem == "" || AlternativaA == "" || AlternativaB == '' || AlternativaC == '' || AlternativaD == "") {
        alert('Preencha todas as partes, não pode conter campos vazios!')
        return false
    }


    var pergunta = {
        pergunta: pergunta,
        imagem: imagem,
        inp1: AlternativaA,
        inp2: AlternativaB,
        inp3: AlternativaC,
        inp4: AlternativaD,
        correta: correta,
        jafoi: 0
    }

    listaPerguntas.push(pergunta)
    localStorage.setItem('bdPerguntas', JSON.stringify(listaPerguntas))

    location.href="pagPrincipal.html"
}

function carregarImagem() {
    document.getElementById("img").src = document.getElementById('imagem').value
}


function sortear(){
    var sorteando = parseInt(Math.random()* listaPerguntas.length)
    document.getElementById("pergunta").innerHTML = listaPerguntas[sorteando].pergunta
    document.getElementById("resp1").innerHTML = listaPerguntas[sorteando].inp1
    document.getElementById("resp2").innerHTML = listaPerguntas[sorteando].inp2
    document.getElementById("resp3").innerHTML = listaPerguntas[sorteando].inp3
    document.getElementById("resp4").innerHTML = listaPerguntas[sorteando].inp4
    document.getElementById("cadastroImagem").src = listaPerguntas[sorteando].imagem
}
        

