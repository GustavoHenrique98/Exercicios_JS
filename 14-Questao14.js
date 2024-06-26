// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

let kmPer=parseInt(prompt("Digite a quantidade de KM percorridos com o carro alugado"));
let dias=parseInt(prompt("Digite a quantidade de dias que passou com o carro"));

let totalFatura = (kmPer*0.20) + (dias*90.00);

console.log(`O total a se pagar pelo aluguel do carro é de R$ ${totalFatura}`);

