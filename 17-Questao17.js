// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

let velocidade = parseInt(prompt("digite a velocidade que o carro se encontra"));
let multa = (velocidade-80) *5;
if(velocidade >80){
    console.log(`Você foi multado em ${multa}`)
}else{
    console.log(`Você está na velocidade permitida e não será multado `)
}
