/**Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt("Digite o primeiro número: "));
const valor2 = parseFloat(prompt("Digite o segundo número: "));

if (isNaN(valor1) || isNaN(valor2)) {
  console.log("Você deve digitar apenas números.");
} else if (valor1 === valor2) {
  console.log("Os valores não podem ser iguais.");
} else {
  const menor = Math.min(valor1, valor2);
  const maior = Math.max(valor1, valor2);
  console.log("Ordem crescente:", menor + ", " + maior);
}