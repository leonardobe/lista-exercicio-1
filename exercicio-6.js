/**Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. */

const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt("Digite o valor do lado A: "));

const ladoB = parseFloat(prompt("Digite o valor do lado B: "));

const ladoC = parseFloat(prompt("Digite o valor do lado C: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
      console.log("Triângulo Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      console.log("Triângulo Isósceles");
    } else {
      console.log("Triângulo Escaleno");
    }
  } else {
    console.log("Os valores fornecidos não formam um triângulo.");
  }