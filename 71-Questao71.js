// 71) Faça um programa que preencha automaticamente um vetor numérico com 8 
// posições, conforme abaixo: 
 
// 999  999  999  999  999  999  999  999 
// 0 1 2 3 4 5 6 7

let vetorNumerico  = new Array(10);


for(let i =0;i<vetorNumerico.length;i++){
    vetorNumerico[i] = 999;
    console.log("Indice:"+ i + " "+vetorNumerico[i])
}