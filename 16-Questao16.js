// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 

//Considere que um fumante perde 10 min de vida a cada cigarro.

//Calcule quantos dias de vida um fumante perderá e exiba o total em dias.


let qtdCigFumados = parseInt(prompt("Digite a quantidae de cigarros fumados por dia"));
let qtdAnosFumando = parseInt(prompt("Digite a quantidade de anos fumando"));

let convAnosDias = qtdAnosFumando*365;


/*

Debugando questão :
anos fumando : 10;
converter anos para dias : 10*365 = 3650;

 Quantos cigarro fumo por dia?  20;
Totalizando 73.000 cigarros fumados por dia.

Se eu fumo 20 cigarros por dia perco 12,000 segundos.
para achar a quantidade em dias preciso multiplicar 12,000 segundos  pela quantidade de minutos de um dia 
*/


/*Tentar depois , não consegui :( */