/**Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for. */

const prompt = require('prompt-sync')();

let numeros = [];
let soma = 0;

const valores = String(prompt("Digite 5 números, separados por vírgula: "));

numeros = valores.split(',').map(Number);

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
console.log('A soma total de todos os valores é: ' + soma); 

