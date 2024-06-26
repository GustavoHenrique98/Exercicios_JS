// 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.

let numero = parseInt(prompt("Digite um número para saber se é par ou ímpar"));

if(numero%2===0){
    console.log(`O número ${numero} é par`);
}else{
    console.log(`O número ${numero} é ímpar!`)
}