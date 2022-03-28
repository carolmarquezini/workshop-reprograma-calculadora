//pegar valor input da hora
var inputValorHora = document.querySelector("#valor-hora")
console.log("DEU CERTO!" + inputValorHora)

//pegar valor da hora do projeto 
var inputHorasProjeto = document.querySelector("#horas-projeto")
console.log("FOOOi" + inputHorasProjeto)

//acessar elemento html da respostas
var spanResposta = document.querySelector("#resposta")
console.log("FOI DENOOOVO" + spanResposta)

//fazer uma função que retorna valor do resultado

function calcular(){

    var calcularValorProjeot = parseFloat(inputValorHora.value * inputHorasProjeto.value).toFixed(2)
    console.log( "Valor do projeto: R$ " + calcularValorProjeot)
    spanResposta.innerHTML = "Valor do Projeto: R$ " + calcularValorProjeot
    

}