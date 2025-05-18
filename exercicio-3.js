//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

const nota = parseFloat(prompt("Digite sua nota: "));

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Informe uma nota válida entre 0 a 10');
} else if (nota < 5 ) {
    console.log('Você está REPROVADO!');
} else if (nota < 7 ){
    console.log('Você está em RECUPERAÇÃO!');
} else {
    console.log('Você está APROVADO!');
}