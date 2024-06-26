// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45

let real = prompt("Digite a quantidade de dinheiro em R$ que você possui");
let conversaoDolar = real/3.45;

console.log(`Com R$${real} ao converter esse valor para dolar terá em sua carteira ${conversaoDolar}`);
