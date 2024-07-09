// 62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
// na tela:
// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.

let resp;
let idade;
let qtdIdade=0;
let mediaIdade=0;
let contaPessoas21=0;
let i=1;
do{
    idade=parseInt(prompt(`Digite a idade da ${i}º pessoa`));
    somaidade+=idade;

    if(idade>=21){
        contaPessoas21++;
    }

    qtdIdade++;

    resp=prompt("Quer continuar?");
    
}while(resp="sim" || resp=="s");

mediaIdade = somaIdade/qtdIdade;

alert(`Quantidade de idades digitadas : ${qtdIdade}`);
alert(`Media entre as idades digitadas : ${mediaIdade}`);
alert(`Quantidade de pesoas com 21 anos ou mais : ${contaPessoas21}`);

