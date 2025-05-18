/**As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')();

const apples = parseInt(prompt("Digite o número de maças compradas: "));

let total = 0

if(isNaN(apples) || apples < 1){
    console.log('Informe um valor valido!');
} else{
    apples > 11 ? (total = apples * 0.25) : (total = apples * 0.30)
    console.log("Você comprou " + apples + " maçã(s). Total a pagar: R$ " + total.toFixed(2));
}