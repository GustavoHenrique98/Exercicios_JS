// 36) Um programa de vida saudável quer dar pontos atividades físicas que podem
// ser trocados por dinheiro. O sistema funciona assim:
//  - Cada hora de atividade física no mês vale pontos
//  - até 10h de atividade no mês: ganha 2 pontos por hora
//  - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//  - acima de 20h de atividade no mês: ganha 10 pontos por hora
//  - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

let qtdHoras = 25;
let pontos;

if(qtdHoras <=10){
    pontos = qtdHoras * 2;   
}else if(qtdHoras>10 && qtdHoras <=20){
    pontos = qtdHoras *5;
}else if(qtdHoras >20){
    pontos = qtdHoras *10;
}
let dinheiro = pontos * 0.05;
console.log(` Você obteve uma pontuação de ${pontos} referente a ${qtdHoras} horas de treino mensal , total em dinheiro : R$ ${dinheiro}`);