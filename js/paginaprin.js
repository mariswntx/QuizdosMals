var listaPerguntas = []
listaPerguntas = JSON.parse(localStorage.getItem('bdPerguntas'))

listaPerguntas = []   
if (listaPerguntas == null) {
    listaPerguntas = []
}



function GerarPergunta() {
    
    var i = parseInt(Math.random() * listaPerguntas.length) 
    
    if (listaPerguntas[i].jafoi == 0) {
        
        document.getElementById('resp1').innerHTML = listaPerguntas[i].inp1
        document.getElementById('resp2').innerHTML = listaPerguntas[i].inp2
        document.getElementById('resp3').innerHTML = listaPerguntas[i].inp3
        document.getElementById('resp4').innerHTML = listaPerguntas[i].inp4
        document.getElementById('pergunta').innerHTML = listaPerguntas[i].pergunta
        document.getElementById('cadastroImagem').src = listaPerguntas[i].imagem
        
        listaPerguntas[i].jafoi = 1
    }else {
        GerarPergunta()
    }
}

GerarPergunta()