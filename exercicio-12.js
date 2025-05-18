/**Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10 utilizando um loop for. */

const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Qual valor deseja ver a tabuada? "));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imprimir() {
    if (numero >= 1 && numero <= 10) {
        console.log(`Tabuada do ${numero}:`);

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
            await sleep(1000); // espera 1000 milissegundos (1 segundo)
        }
    } else {
        console.log("Por favor, digite um número entre 1 e 10.");
    }
}
imprimir();