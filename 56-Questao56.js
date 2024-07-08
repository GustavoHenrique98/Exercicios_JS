// 56) Crie um programa que leia vários números pelo teclado e mostre no final o
// somatório entre eles.
// Obs: O programa será interrompido quando o número 1111 for digitado
let resposta="sim";
let soma = 0;
while(resposta==="sim"){
    let numero = parseInt(prompt("Digite qualquer número"));
    soma+=numero;
    if(numero===1111){
        alert(`Aplicação encerrada! Você digitou 1111!`);
        break;
    }
}

alert(`Resultado da soma ${soma}`);