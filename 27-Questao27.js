// 27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:
//  - Média até 4.9: REPROVADO
//  - Média entre 5.0 e 6.9: RECUPERAÇÃO
//  - Média 7.0 ou superior: APROVADO

let nota1=parseFloat(prompt("Digite a primeira nota"));
let nota2=parseFloat(prompt("Digite a segunda nota"));
let media = (nota1+nota2)/2;

if(media <=4.9){
    console.log(`Reprovado`);
}else if(media >=5.0 && media <6.9){
    console.log(`Recuperação`);
}else if(media >=7.0){
    console.log(`Aprovado`);
}