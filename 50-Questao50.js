// 50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
// mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3


let i=1;
let maiorQ5 = 0;
let divisiveisPor3=0;
while(i<=20){
    let random = Math.floor(Math.random()*20);
    console.log(random);
    if(random>5){
        maiorQ5 +=1
    }
    if(random%3===0){
        divisiveisPor3+=1
    }
    i++
}

console.log(`Qtd de números acima de 5 : ${maiorQ5}`);
console.log(`Qtd de números divisíveis por 3 : ${divisiveisPor3}`);