// 42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

let numero=parseInt(prompt("digite um valor"));
let i=1;
while(i<=numero){
    document.write(`${i}<br>`);
    i++;
    
}
alert("Contagem encerrada");


