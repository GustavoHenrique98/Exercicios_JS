// 44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!


let inicio= parseInt(prompt("Digite o valor inicial da contagem"));
let final = parseInt(prompt("Digite o valor final da contagem"));
let incremento = parseInt(prompt("Quer contar de quanto em quanto?"));

while(inicio<=final){
    document.write(`${inicio} <br>`);
    inicio+=incremento;
}