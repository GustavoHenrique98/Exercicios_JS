// 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

let nome = prompt("Digite seu nome");
let salario = parseFloat(prompt("Digite seu salário"));

console.log(`O funcionario ${nome} recebe um salario de R$${salario} `)
