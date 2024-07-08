// 53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
// a) Quantos homens foram cadastrados
// b) Quantas mulheres foram cadastradas
// c) A média de idade do grupo
// d) A média de idade dos homens
// e) Quantas mulheres tem mais de 20 anos

let i=1;
let contaF = 0;
let contaF20 = 0;
let contaM = 0 ;
let somaIdade = 0;
let somaIdadeM=0;
let mediaIdadeG;
let mediaIdadeH;
while(i<=5){
    let idade = parseInt(prompt(`Digite a idade da ${i}º pessoa`));
    let sexo = prompt(`Digite o gênero da ${i}º pessoa`);
    somaIdade+=idade;
    if(sexo ==="masculino" || sexo==="Masculino"){
        contaM+=1;
        somaIdadeM+=idade;
    }else if(sexo ==="feminino" || sexo==="Feminino"){
        contaF+=1;
    }

    if(sexo ==="feminino" || sexo==="Feminino" && idade>20){
        contaF20+=1;
    }
    i++
}

mediaIdadeG = somaIdade/5;
mediaIdadeH = somaIdadeM/contaM;

console.log(`Quantidade de Homens cadastrados ${contaM}`);
console.log(`Quantidade de Mulheres cadastradas ${contaF}`);
console.log(`Media de idade do grupo ${mediaIdadeG}`);
console.log(`Media de idade dos Homens ${mediaIdadeH}`);
console.log(`Quantidade de Mulheres acima de 20 anos ${contaF20}`);