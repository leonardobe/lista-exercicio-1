//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else if (numero % 2 === 0) {
    console.log("O número é PAR.");
} else {
    console.log("O número é ÍMPAR.");
}

