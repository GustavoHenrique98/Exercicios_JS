// 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
// na tela uma das mensagens abaixo:
//  - O primeiro valor é o maior
//  - O segundo valor é o maior
//  - Não existe valor maior, os dois são iguais

let n1 = parseInt(prompt("Digite o primeiro número"));
let n2 = parseInt(prompt("Digite o segundo número"));

if(n1>n2){
    console.log(`O Número ${n1} é maior que  o segundo que é${n2}`);
}else if(n2>n1){
    console.log(`O segundo número que é  ${n2} é maior que  o primeiro número  que é${n1}`);
}else if(n1===n2){
    console.log(`Ambos os números são iguais`);
}