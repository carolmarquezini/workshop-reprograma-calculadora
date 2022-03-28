//pegar o valor input do quanto a pessoa ganha por mês

var inputGanhoMes = document.querySelector("#ganho-mes")
console.log (inputGanhoMes)

//pegar o valor do input de quantas horas a pessoa quer trabalhar
var inputHorasDia = document.querySelector("#horas-dia")
console.log(inputHorasDia)

//acessar o elemento html da resposta
var spanResposta = document.querySelector("#resposta")
console.log(spanResposta)

//fazer uma função que retorna esse resultado para escrever o valor na página
function calcularValorHora() {
  
    var qtTotalHoras = inputHorasDia.valueAsNumber*22 
    

    var resultadoValorHora = parseFloat(inputGanhoMes.value /qtTotalHoras).toFixed(2)
    

    console.log ("Quantidade de horas: " + resultadoValorHora)

    spanResposta.innerHTML = "R$ " + resultadoValorHora
    //spanResposta.textContent = "R$ " + resultadoValorHora

}

//calcular o resultado

//orientar onde o resultado precisa ser visualizado: acessar o elemento html do resultado


//calcularValorHora()