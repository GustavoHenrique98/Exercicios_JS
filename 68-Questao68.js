// 68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura 
// “para”. No final, mostre na tela: 
//  a) Quantas mulheres foram cadastradas 
//  b) Quantos homens pesam mais de 100Kg 
//  c) A média de peso entre as mulheres  
//  d) O maior peso entre os homens

//Mulheres
let contagemMulherCadastradas = 0;
let mediaPesoMulheres;
let somaPesoMulheres = 0;
//Homens
let contaPesoHomem = 0;
let somaPesoHomem = 0;
let maiorPesoHomem = 0;
for(let i=1;i<=8;i++){
    let sexo = prompt(`Digite o sexo da ${i}º pessoa!`);
    let peso  = parseFloat(`Digite o peso da ${i}º pessoa!`);

    if(sexo === "Feminino" || sexo ==="feminino" || sexo ==="f"){
        contagemMulherCadastradas++;
        somaPesoMulheres+=peso;
    }
    
    if((sexo === "Masculino" || sexo ==="masculino" || sexo ==="m") && peso >100){
        contaPesoHomem++;
    }

    if((sexo === "Masculino" || sexo ==="masculino" || sexo ==="m") && peso > maiorPesoHomem){
        maiorPesoHomem = peso;
    }
} 
mediaPesoMulheres= somaPesoMulheres/contagemMulherCadastradas;

alert(`Quantidade de mulheres cadastradas : ${contagemMulherCadastradas}`);
alert(`Quantidade de homens que pesam mais de 100KG : ${contaPesoHomem}`);
alert(`Quantidade de mulheres cadastradas : ${mediaPesoMulheres}`);
alert(`Maior peso entre os homens: ${maiorPesoHomem}`);