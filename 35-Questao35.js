// 35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
// tabela a seguir:
//  - Carros populares (aluguel de R$90 por dia)
//  - Até 100Km percorridos: R$0,20 por Km
//  - Acima de 100Km percorridos: R$0,10 por Km

//  - Carros de luxo (aluguel de R$150 por dia)
//  - Até 200Km percorridos: R$0,30 por Km
//  - Acima de 200Km percorridos: R$0,25 por Km

let tipoCarro = prompt("Digite o tipo de carro que quer alugar ");
let qtdDias = parseInt(prompt("Digite a quantidade de dias que vai passar com o carro"));
let kmPercorrido = parseInt(prompt("Digite a quantidade de KM percorridos "));
let precoPagamento;

if(tipoCarro ==="popular" || tipoCarro==="Popular" && kmPercorrido<=100){
    precoPagamento = (qtdDias *90) + (kmPercorrido * 0.20);
}else if(tipoCarro ==="popular" || tipoCarro==="Popular" && kmPercorrido>100){
    precoPagamento = (qtdDias *90) + (kmPercorrido * 0.10);
}else if(tipoCarro ==="luxo" || tipoCarro==="Luxo" && kmPercorrido <= 200){
    precoPagamento = (qtdDias *150) + (kmPercorrido * 0.30);
}else if(tipoCarro ==="luxo" || tipoCarro==="luxo" && kmPercorrido > 200){
    precoPagamento = (qtdDias *150) + (kmPercorrido * 0.25);   
}