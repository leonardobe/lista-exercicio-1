/**Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for. */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function contagemRegressiva() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
        await sleep(1000); // espera 1000 milissegundos (1 segundo)
    }
}

contagemRegressiva();