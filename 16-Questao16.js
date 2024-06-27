// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 

//Considere que um fumante perde 10 min de vida a cada cigarro.

//Calcule quantos dias de vida um fumante perderá e exiba o total em dias.


let cigarrosFumados = parseInt(prompt("Digite a quantidae de cigarros fumados por dia"));
let qtd_anosFumando = parseInt(prompt("Digite a quantidade de anos fumando"));

let diasPerdidos = (qtd_anosFumando*365*cigarrosFumados*10)/1440;
console.log(`Você perdeu ${diasPerdidos.toFixed(0)} de vida`)
