// 48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
// entre eles.
let i=1;
let soma =0;
while(i<=7){
    let numeros = parseInt(prompt(`Digite o ${i}º número`));
    soma+=numeros
    i++
}

console.log(soma);