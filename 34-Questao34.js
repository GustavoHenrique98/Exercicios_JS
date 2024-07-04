// 34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
// indivíduo dentro de certas faixas.
//  - abaixo de 18.5: Abaixo do peso
//  - entre 18.5 e 25: Peso ideal
//  - entre 25 e 30: Sobrepeso
//  - entre 30 e 40: Obesidade
//  - acima de 40: Obseidade mórbida
// Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
// da altura)

let peso = parseFloat(prompt("Digite seu peso"));
let altura = parseFloat(prompt("Digite a sua altura"));
const imc = peso/altura**2;

if(imc <18.5){
    console.log('Abaixo do peso');
}else if(imc >=18.5 && imc<25){
    console.log('Peso ideal');
}else if(imc >=25 && imc<30){
    console.log('Sobrepeso');
}else if(imc >=30 && imc<40){
    console.log('Obesidade');
}else if(imc>40){
    console.log('Obesidade mórbida');
    
}