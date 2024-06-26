// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento (se ficou acima da média 7.0).

let nome = prompt("Digite seu nome");
let nota1 = parseFloat(prompt("Digite a sua nota da prova"));
let nota2 = parseFloat(prompt("Digite a sua nota das atividades"));
let media = (nota1+nota2)/2;

if(media >=7){
    console.log(`Teve um bom aproveitamento passou!`);
}else{
    console.log(`Você não foi aprovado!`)
}