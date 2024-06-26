// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.

let diasTrabalhados = parseInt(prompt("Digite a quantidade de dias trabalhados"));
let calculoSalario = diasTrabalhados * (8*25.00);
console.log(`O funcionário trabalhou ${diasTrabalhados} portanto vai ganhar R$${calculoSalario} `);
