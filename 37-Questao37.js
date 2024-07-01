// 37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
//  - menos de 15 anos de empresa: +5%
//  - de 15 até 20 anos de empresa: +12%
//  - mais de 20 anos de empresa: +23%
// - Homens
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25%

let salarioAtual = parseFloat(prompt("Digite seu salário atual"));
let genero  = prompt("Digite seu gênero por gentileza.");
let qtdAnos = parseInt(prompt("Digite a quanto tempo trabalha na empresa"));
let aumentoSalarial;
if(genero==="Feminino" || genero==="feminino" && qtdAnos <15){
    aumentoSalarial = salarioAtual + (salarioAtual*0.05);     
}else if(genero==="Feminino" || genero==="feminino" && qtdAnos >=15 && qtdAnos <=20){
    aumentoSalarial = salarioAtual + (salarioAtual*0.12);     
}else if(genero==="Feminino" || genero==="feminino" && qtdAnos>20){
    aumentoSalarial = salarioAtual + (salarioAtual*0.23);     
}else if(genero==="Masculino" || genero==="masculino" && qtdAnos <20){
    aumentoSalarial = salarioAtual + (salarioAtual*0.03);     
}else if(genero==="Masculino" || genero==="masculino" && qtdAnos >=20 && qtdAnos<=30){
    aumentoSalarial = salarioAtual + (salarioAtual*0.13);     
}else if(genero==="Masculino" || genero==="masculino" && qtdAnos >30){
    aumentoSalarial = salarioAtual + (salarioAtual*0.25);     
}

console.log(`O funcionario(a) do genero ${genero} trabalha a ${qtdAnos} anos  na empresa X portanto seu novo salário é :  ${aumentoSalarial}`);