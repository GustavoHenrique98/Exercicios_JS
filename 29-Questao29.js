// 29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
//  - Até 3 anos de empresa: aumento de 3%
//  - entre 3 e 10 anos: aumento de 12.5%
//  - 10 anos ou mais: aumento de 20%

let nome = prompt("Digite o nome do funcionário");
let salario = parseFloat(prompt("Digite o seu salário"));
let qtdAnos = parseInt(prompt("Digite a quantidade de anos que você trabalha"));
let aumento;

if(qtdAnos <=3){
    aumento = salario+(salario*(3/100));
    console.log(`Olá ${nome} você trabalha a  pelomenos  ${qtdAnos} anos  na empresa X e recebeu um aumento de 3% no seu salário totalizando R$R$ ${aumento}`);
    
}else if(qtdAnos >3 && qtdAnos<=10){
    aumento = salario+(salario*(12.5/100));
    console.log(`Olá ${nome} você trabalha a  pelomenos  ${qtdAnos} anos  na empresa X e recebeu um aumento de 12,5% no seu salário totalizandoR$ ${aumento}`);
    
}else if(qtdAnos >10){
    aumento = salario+(salario*(20/100));
    console.log(`Olá ${nome} você trabalha a  pelomenos  ${qtdAnos} anos  na empresa X e recebeu um aumento de 20% no seu salário totalizando R$ ${aumento}`);
}
 