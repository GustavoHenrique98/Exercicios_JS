// 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
// ela não pode exceder 30% do salário ou então o empréstimo será negado.


let valorCasa = parseFloat(prompt("Digite o valor da casa."));
let salarioComprador = parseFloat(prompt("Digite seu salário"));
let qtdAnos=parseInt(prompt("Digite em quantos anos quer pagar o empréstimo"));

let meses  = qtdAnos*12;

let prestacaoMensal = valorCasa/meses;
let porcentagemSalario = salarioComprador+ (salarioComprador * 0.3);

if(prestacaoMensal <= porcentagemSalario){
    console.log(`O empréstimo foi aprovado!`);
}else if(prestacaoMensal > porcentagemSalario){
    console.log(`Empréstimo recusado!`);
}




