// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto.

let preco = parseFloat(prompt("Digite o preço do produto"));
let precoPromocional = (preco -(preco * (5/100) ) );

console.log(`O valor do produto com 5% de desconto totaliza R$${precoPromocional}`);