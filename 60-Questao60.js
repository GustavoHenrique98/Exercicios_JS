// 60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
// a) O nome da pessoa mais velha
// b) O nome da mulher mais jovem
// c) A média de idade do grupo
// d) Quantos homens tem mais de 30 anos
// e) Quantas mulheres tem menos de 18 anos

let resp="sim";
let nomePMaisVelha = "";
let maiorIdade = 0;
let menorIdade = 100000000;
let somaidade = 0;
let contaHomemM30 = 0;
let contaMulherM18 = 0;
let i=1;
while(resp="sim" || resp==="s"){
    let nome = prompt(`Digite o nome da ${i}º pessoa`);
    let idade = parseInt(prompt(`Digite a idade da ${i}º pessoa`));
    let sexo = prompt(`Digite o sexo da ${i}º pessoa`);
    somaidade+=idade;
    if(idade>maiorIdade){
        maiorIdade = idade;
        nomePMaisVelha = nome;
    }

    if( (sexo ==="f" || sexo ==="F") && idade<menorIdade ){
        menorIdade=idade;
        nomeMulherMaisJovem = nome;
    }

    if( (sexo ==="m" || sexo==="M")&& idade>30 ){
        contaHomemM30++;
    }

    if( (sexo==="f" || sexo ==="F" ) && idade<18 ){
        contaMulherM18++;
    }
    
    i++;

    resp=prompt("Deseja continuar?");

} 


let mediaIdadeGrupo = somaidade/i;

alert(`Nome da pessoa mais velha : ${nomePMaisVelha}`);
alert(`Nome da mulher mais jovem : ${nomeMulherMaisJovem}`);
alert(`Media de idade do grupo : ${mediaIdadeGrupo}`);
alert(`Quantidade de homens com idade maior que 30 :  ${contaHomemM30}`);
alert(`Quantidade de mulheres com menos de 18 anos : ${contaMulherM18}`);