// 63) Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
// A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na 
// tela: 
//  a) O somatório entre todos os valores 
//  b) Qual foi o menor valor digitado 
//  c) A média entre todos os valores 
//  d) Quantos valores são pares

let resp;
let soma = 0;
let contador = 0;
let menorN = 100000;
let maiorN = 0;
let media = 0;
let contaPar = 0;

do{
    let numeros = parseInt(prompt(`Digite o ${contador+1}º número`));
    soma += numeros;
    if(numeros > maiorN){
        maiorN = numeros;
    }
    if(numeros < menorN){
        menorN = numeros;
    }

    if(numeros %2===0){
        contaPar ++
    }
    contador++;
    console.log(contador)
    resp = prompt("Deseja continuar?");
}while(resp === "sim" || resp=="s");

media = soma/contador;

alert(`Resultado da soma de todos os números :${soma}`);
alert(`Menor valor digitado ${menorN}`);
alert(`A média entre todos os valores ${media.toFixed(2)}`);
alert(`Quantidade de valores pares: ${contaPar}`);

