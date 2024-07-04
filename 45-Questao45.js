// 45) O programa acima vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação.

let inicio= parseInt(prompt("Digite o valor inicial da contagem"));
let final = parseInt(prompt("Digite o valor final da contagem"));
let incremento = parseInt(prompt("Quer contar de quanto em quanto?"));
if(inicio>final){
    while(inicio>final){
        alert("Erro!! O valor inicial não pode ser maior que o valor final da contagem!!");
        inicio= parseInt(prompt("Digite o valor inicial da contagem"));
        final = parseInt(prompt("Digite o valor final da contagem"));   
    }

    while(inicio<=final){
        document.write(`${inicio} <br>`);
        inicio+=incremento;
        }
}else{
    while(inicio<=final){
    document.write(`${inicio} <br>`);
    inicio+=incremento;
    }
}