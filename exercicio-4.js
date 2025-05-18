/**Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const menu = parseFloat(prompt("Escolha uma operação... 1-SOMA, 2-SUBTRAÇÃO, 3-MULTIPLICAÇÃO: "));


let resultado = 0

switch (menu) {
    case 1:
        resultado = numero1 +  numero2
        console.log('RESULTADO: ', resultado);
        break;
    case 2:
        resultado = numero1 - numero2
        console.log('RESULTADO: ', resultado);
        break;
    case 3:
        resultado = numero1 * numero2
        console.log('RESULTADO: ', resultado);
        break;
    default:
        console.log('Operação não existente!!!');
        break;
}