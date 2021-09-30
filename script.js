var nome = "Ana"
var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 4
var notaQuartoBimestre = 2

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vinda " + nome)
console.log(notaFixada)

if (notaFixada >= 6) {
    console.log('Você foi aprovado(a)');
}
else {
    console.log('Você foi reprovado(a)');
}

// Isso é um comentário

// Revisão
// variaveis, strings, console.log, toFixed, operações matematicas, concatenação