/**Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require('prompt-sync')();

const valor = parseFloat(prompt("Digite um número: "));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imprimir() {
    for (let i = 0; i < 10; i++) {
        console.log(valor);
        await sleep(1000); // espera 1000 milissegundos (1 segundo)
    }
}

imprimir();