// 51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
// qual foi o maior e qual foi o menor preço digitados.

let i=1;
let maiorPreco = 0;
let menorPreco = 100000000;
while(i<=8){
    let precoProduto = parseFloat(prompt(`Digite o preço do ${i}º produto`));
    if(precoProduto > maiorPreco){
        maiorPreco = precoProduto;
    }

    if(precoProduto<menorPreco){
        menorPreco = precoProduto;
    }

    i++;
}

console.log(`O preço do produto mais caro registrado no sistema foi de R$${maiorPreco}`);
console.log(`O preço do produto mais barato registrado no sistema foi de R$${menorPreco}`);