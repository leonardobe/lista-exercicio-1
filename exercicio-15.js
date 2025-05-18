/**Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for. */

let n1 = 1;
let n2 = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci são:");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imprimir() {
    for (let i = 0; i < 10; i++) {
        console.log(n1);
        let proximo = n1 + n2;
        n1 = n2;
        n2 = proximo;
        await sleep(1000); 
    }
}

imprimir();