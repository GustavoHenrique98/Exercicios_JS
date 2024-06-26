// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

let nome= prompt("Digite o nome do funcionário ");
let salario = parseFloat(prompt("Digite o salário do funcionário "));

let aumento = salario+(salario * (15/100));

console.log(`O funcionário ${nome} recebeu um aumento de 15% , o novo salário e de R$${aumento}`);