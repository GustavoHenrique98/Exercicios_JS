// 72) Crie um programa que preencha automaticamente (usando lógica, não apenas 
//     atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo: 
     
//     5 10  15  20  25  30  35  40  45  50 
//     0 1 2 3 4 5 6 7 8 9


let vetorN = new Array(10);
let numero =5;
for(let i=0;i<vetorN.length;i++){
   vetorN[i] = numero;
   numero+=5
   console.log(vetorN[i]);
}