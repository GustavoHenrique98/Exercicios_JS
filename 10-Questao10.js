// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let largura = parseFloat(prompt("Digite a largura da parede"));
let altura = parseFloat(prompt("Digite a altura da parede"));
let area = (largura*altura);
let litrosTinta = area/2;

console.log(`A área da parede é ${area} metros quadrados, portanto são necessários ${litrosTinta} litros de tinta.`);
