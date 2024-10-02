// 79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. 
// No final, mostre quais são os números pares que foram digitados e em que 
// posições eles estão armazenados.

let vetorN = new Array(10);


for (let i = 0; i < vetorN.length; i++) {
    vetorN[i] = parseInt(prompt(`Digite o ${i + 1}º número`));
}

vetorN.forEach((e, i) => {
    if (e % 2 === 0) {
        console.log(`Número Par ${e} - digitado no índice: ${i}`);
    } else {
        console.log(`Número ímpar ${e} - digitado no índice: ${i}`);
    }
});
