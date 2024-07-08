// 54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
// no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.

let i=1;
let mediaAltura = 0;
let somaAltura = 0;
let contaPeso90 = 0;
let contaPesoM50 = 0;
let contaAltura = 0;

while(i<=7){
    let peso = parseFloat(prompt(`Digite o peso da ${i}º pessoa`));
    let altura = parseFloat(prompt(`Digite a altura da ${i}º pessoa`));
    somaAltura+=altura;
    
    if(peso>90){
        contaPeso90+=1;
    }

    if(peso<50 && altura<1.60){
        contaPesoM50+=1;
    }

    if(altura >1.90 && peso>100){
        contaAltura+=1;
    }
    i++;
}

mediaAltura = somaAltura/7;
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.
console.log(`Média de altura do grupo :  ${mediaAltura}`);
console.log(`Quantidade de pessoas com mais de 90KG :  ${contaPeso90}`);
console.log(`Quantidade de pessoas que pesam menos de 50KG e tem menos de 1.60m ${contaPesoM50}`);
console.log(`Quantidade de pessoas que medem mais de 1.90m e pesam mais de 100KG ${contaAltura}`);