// 59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
// perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens

let resp = "sim";
let i = 1;
let maiorIdade = 0;
let qtdHomens = 0;
let mulherJovem = 10000000000;
let mediaIdadeHomens = 0;
let somaIdadeHomen = 0;

 
 while(resp==="sim" || resp==="s"){
    let idade = parseInt(prompt(`Digite a idade da ${i}º pessoa`));
    let sexo = prompt(`Digite o sexo da ${i}º pessoa.`);
    resp=prompt("Deseja continuar?");

    if(sexo==="m" || sexo ==="M"){
        qtdHomens++;
        somaIdadeHomen+=idade;
    }
    
    if(idade>maiorIdade){
        maiorIdade=idade;
    }

    if((sexo ==="f" || sexo ==="F") && idade<mulherJovem){
        mulherJovem=idade;
    }

    i++;

 }

 mediaIdadeHomens=somaIdadeHomen/qtdHomens;

 alert(`Maior idade lida ${maiorIdade}`);
 alert(`Qtd homens cadastrados : ${qtdHomens}`);
 alert(`Idade da mulher mais jovem ${mulherJovem}`);
 alert(`Média de idade dos homens ${mediaIdadeHomens}`);