// 76) Crie um programa que preencha automaticamente um vetor numérico com 7 
// números gerados aleatoriamente pelo computador e depois mostre os valores 
// gerados na tela.


let vetorN = new Array(10);

for(let i = 0 ; i < vetorN.length; i++){
    let randomNumber = Math.round(Math.random()*10);
    vetorN[i]= randomNumber;
    console.log(vetorN[i]);
}