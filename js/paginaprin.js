var sorteando;

function sortear() {
    sorteando = parseInt(Math.random() * listaPerguntas.length)

    if (listaPerguntas[sorteando].jafoi == 0) {
        document.getElementById("pergunta").innerHTML = listaPerguntas[sorteando].pergunta
        document.getElementById("resp1").innerHTML = listaPerguntas[sorteando].inp1
        document.getElementById("resp2").innerHTML = listaPerguntas[sorteando].inp2
        document.getElementById("resp3").innerHTML = listaPerguntas[sorteando].inp3
        document.getElementById("resp4").innerHTML = listaPerguntas[sorteando].inp4
        document.getElementById("imagemlink").src = listaPerguntas[sorteando].imagem
    
        listaPerguntas[sorteando].jafoi = 1
    
    }else {
        sortear()
    }
}

var Pontos = 0
function ResponderCerta(Resp) {

    console.log(Resp);
    console.log(listaPerguntas[sorteando].correta)

    if (Resp == listaPerguntas[sorteando].correta) {
        Pontos++
    } else{
        alert('resposta incorreta')
    }

    document.getElementById('pt1').innerHTML = Pontos
    sortear()
}

