// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5


let nota1=parseFloat(prompt("Digite a nota da prova "));
let nota2=parseFloat(prompt("Digite a nota da atividade "));
let media = (nota1+nota2)/2;

console.log(`A média do aluno foi : ${media}`);