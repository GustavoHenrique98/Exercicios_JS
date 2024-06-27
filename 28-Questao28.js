// 28) Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
//  - Abaixo de 100m² = TERRENO POPULAR
//  - Entre 100m² e 500m² = TERRENO MASTER
//  - Acima de 500m² = TERRENO VIP


let largura = parseInt(prompt("Digite a largura do terreno"));
let altura = parseInt(prompt("Digite a altura do terreno"));
let areaTerreno = largura*altura;

if(areaTerreno <100){
    console.log('TERRENO POPULAR');
}else if(areaTerreno >=100 && areaTerreno<=500){
    console.log('TERRENO MASTER');
}else{
    console.log('TERRENO VIP');
}

