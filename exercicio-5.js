/**Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. */

const prompt = require('prompt-sync')();

const peso = parseFloat(prompt("Digite seu peso: "));
const altura = parseFloat(prompt("Digite sua altura: "));

imc = peso / (altura * altura)

const classificacoes = [
    { min: 0, max: 18.4, categoria: "Abaixo do peso" },
    { min: 18.5, max: 24.9, categoria: "Peso normal" },
    { min: 25, max: 29.9, categoria: "Sobrepeso" },
    { min: 30, max: 34.9, categoria: "Obesidade grau I" },
    { min: 35, max: 39.9, categoria: "Obesidade grau II" },
    { min: 40, max: Infinity, categoria: "Obesidade grau III" }
];  

if (isNaN(imc) || imc < 1) {
    console.log("Por favor, preencha os valores corretamente.");
} else {
    const categoria = classificacoes.find(item => imc >= item.min && imc <= item.max);
    console.log(`Categoria: ${categoria.categoria}`);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
}

