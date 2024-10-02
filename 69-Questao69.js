// 69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma 
// PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e 
// a soma entre todos os valores da sequência.


let termo = parseInt(prompt("Digite o primeiro termo da P.A"));
let razao = parseInt(prompt("Digite a razão da P.A"));
let contagem = parseInt(prompt("Até quanto quer contar?"));
let soma =0
for(let i = 1 ; i<=contagem;i++){
    document.write(`${termo}<hr>`)
    soma+=termo;
    termo+=razao;
}

console.log(`Resultado da soma :${soma}`);