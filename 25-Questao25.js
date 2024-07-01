// 25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.


let l1 = parseInt(prompt("Digite o comprimento do lado 1"));
let l2 = parseInt(prompt("Digite o comprimento do lado 2"));
let l3 = parseInt(prompt("Digite o comprimento do lado 3"));

if(l1<l2+l3  && l2<l1+l3 && l3<l1+l2){
    console.log("Pode formar um triângulo");
}else{
    console.log("Não pode formar um triângulo");
}