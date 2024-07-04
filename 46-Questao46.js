// 46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
// 8 + 10 + 12 + 14 + ... + 98 + 100.

let i=6;
let soma=0;

while(i<=100){
    soma+=i;
    i++;
}

console.log('O valor da soma de 6 até 100 : ' + soma);