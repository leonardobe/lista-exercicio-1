//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
/**
Criança: 0 a 11 anos | Adolescente: 12 a 17 anos | Adulto: 18 a 59 anos | Idoso: 60 anos ou mais
 */
const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite sua idade: "));

if(isNaN (idade) || idade < 0){
    console.log("Por favor, digite uma idade válida.");
} else if (idade < 12 ){
    console.log("Categoria: Criança");
} else if (idade < 18){
    console.log("Categoria: Adolescente");
} else if (idade < 60){
    console.log("Categoria: Adulto"); 
} else {
    console.log("Categoria: Idoso");
}