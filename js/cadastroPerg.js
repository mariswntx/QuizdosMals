var listaPerguntas = []

listaPerguntas = JSON.parse(localStorage.getItem('bdPerguntas')) || bancoPerguntas()

function bancoPerguntas(){
    var dados = [
        {
            "pergunta": "Quem foi campeão da copa de 2014?",
            "imagem": "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ad7523a3d1a139039d9a33bdd76a9ddf.jpg",
            "inp1": "A) França",
            "inp2": "B) Argentina  ",
            "inp3": "C) Itália ",
            "inp4": "D) Alemanha",
            "correta": "D",
            "jafoi": 0
        },
        {
            "pergunta": "Quantos jogadores tem em uma partida de futebol?",
            "imagem": "data:image/jpeg;base64,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",
            "inp1": "A) 11",
            "inp2": "B) 22  ",
            "inp3": "C) 24 ",
            "inp4": "D) 26",
            "correta": "B",
            "jafoi": 0
        },
        {
            "pergunta": "	Ultimo brasileiro que ganhou bola de ouro?",
            "imagem": "https://s2-ge.glbimg.com/BAqx-LPzVP-fomSjegRFJjSzj34=/0x0:1360x909/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/4/j/DpjE8dSNu6Ybe4FiajIg/trofeu1.jpg",
            "inp1": "A) neymar",
            "inp2": "B) ronaldo  ",
            "inp3": "C) kaká ",
            "inp4": "D) cristiano ",
            "correta": "C",
            "jafoi": 0
        },
        {
        "pergunta": "Quantas equipes constitui o brasileirão serie A?",
        "imagem": "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/02/18/919177108-brasileirao-a.jpg",
        "inp1": "A) 20",
        "inp2": "B) 16 ",
        "inp3": "C) 32 ",
        "inp4": "D) 26 ",
        "correta": "A",
        "jafoi": 0
    },
    {
        "pergunta": " Quando foi realizada a primeira Copa do Mundo de futebol?",
        "imagem": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2018/06/24/5accada74b925.jpeg",
        "inp1": "A) 1926",
        "inp2": "B) 1930",
        "inp3": "C) 1934",
        "inp4": "D) 1938",
        "correta": "B",
        "jafoi": 0
    },
    {
        "pergunta": "QuaI pais tem mais finais na copa do mundo?",
        "imagem": "https://cassiozirpoli.com.br/wp-content/uploads/2018/06/copa_do_mundo_2018_russia_oitavas_de_final_chaveamento_730.jpg",
        "inp1": "A) brasil",
        "inp2": "B) alemanha",
        "inp3": "C) argentina",
        "inp4": "D) itália",
        "correta": "B",
        "jafoi": 0
    },
    {
        "pergunta": " Qual a maior liga do mundo?",
        "imagem": "https://s2-ge.glbimg.com/mod4XITa-jIHlNa5g4L53rjAzSI=/0x0:1671x939/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/B/u/UYyM2gSpOsHd1ZUrbnmw/joint-declaration-aad5110b47.jpg",
        "inp1": "A) premier league",
        "inp2": "B) la liga",
        "inp3": "C) brasileirão",
        "inp4": "D) Campeonato Italiano",
        "correta": "C",
        "jafoi": 0
    },
    {
        "pergunta": "Qual time brasileiro tem mais mundial?",
        "imagem": "https://img.quizur.com/f/img62e19896b685f9.43031016.jpeg?lastEdited=1659032478",
        "inp1": "A) são paulo",
        "inp2": "B) cruzeiro",
        "inp3": "C) corinthians",
        "inp4": "D) fluminense",
        "correta": "A",
        "jafoi": 0
    },
    {
        "pergunta": " Qual time tem mais libertadores?",
        "imagem": "https://2.bp.blogspot.com/-BtVHGD27lSs/TkGkqFV2xkI/AAAAAAAAA_s/u1WMCW82Hvc/s1600/Escudos%2Bdos%2Btimes%2Bda%2BCopa%2BSul-Americana%2B2011.jpg",
        "inp1": "A) palmeiras",
        "inp2": "B) river plaite",
        "inp3": "C) boca juniors",
        "inp4": "D) Independiente",
        "correta": "D",
        "jafoi": 0
    },
    {
        "pergunta": " Quem mais tem copa do Brasil?",
        "imagem": "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/23/1601477069-63-taca-da-copa-do-brasil.jpg",
        "inp1": "A) flamengo",
        "inp2": "B) gremio",
        "inp3": "C) cruzeiro",
        "inp4": "D) são paulo",
        "correta": "C",
        "jafoi": 0
    },
    ]
     
    return dados
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


