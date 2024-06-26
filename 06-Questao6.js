// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

let numero=parseInt(prompt("Digite um número para saber seu antecessor e sucessor"));
let antecessor = numero-1;
let sucessor = numero+1;

console.log(`O antecessor de ${numero} é ${antecessor} já o sucessor é ${sucessor}`);
