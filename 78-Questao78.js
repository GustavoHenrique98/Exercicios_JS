// 78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final, 
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram 
// digitados valores que são múltiplos de 10.


let vetorN = new Array(15);

for(let i = 0 ; i < vetorN.length ; i++){
    vetorN[i] = parseInt(prompt(`Digite o ${i+1}º número que deseja atribuir.`));
    console.log(vetorN[i]);

}

vetorN.forEach((e,i)=>{
    if(e%10===0){
        console.log(`Valor : ${e} digitado no índice:${i}`);
    }
})
