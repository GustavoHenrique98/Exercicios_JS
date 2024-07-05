// 52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
// a) Qual é a média de idade do grupo
// b) Quantas pessoas tem mais de 18 anos
// c) Quantas pessoas tem menos de 5 anos
// d) Qual foi a maior idade lida
let i=1;
let media = 0;
let somaIdade = 0;
let maior18 = 0;
let menor5=0;
let maiorIdadeLida = 0; 
while(i<=10){
    let idade = parseInt(prompt(`Digite a idade da ${i}º pessoa`));
    somaIdade = somaIdade+idade;
    if(idade>18){
        maior18+=1;
    }else if(idade<5){
        menor5+=1;
    }

    if(idade>maiorIdadeLida){
        maiorIdadeLida=idade;
    }
    i++;
}

media=somaIdade/10;
console.log(`Media de idade do grupo : ${media}`);
console.log(`Quantidade de pessoas com idade maior que 18 : ${maior18}`);
console.log(`Quantidade de pessoas com idade menor que 5 : ${menor5}`);
console.log(`Maior idade lida : ${maiorIdadeLida} `);