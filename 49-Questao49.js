// 49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.

let i =1;
let contPar = 0;
let contImpar =0;
while(i<=6){
    let numero = parseInt(prompt(`Digite o ${i}º número`));
    if(numero%2===0){
        contPar+=1;
    }else{
        contImpar+=1;
    }
    i++
}

alert(`Qtd números pares ${contPar}`);
alert(`Qtd números Ímpares ${contImpar}`);