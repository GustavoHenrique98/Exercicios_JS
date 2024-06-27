// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO.
// Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;

// Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;

// Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.

const ano = 2008;

if((ano %4===0  && ano%100!==0) || ano%400===0){
    console.log("Ano bissexto");
}else{
    console.log("Não é bissexto");
}