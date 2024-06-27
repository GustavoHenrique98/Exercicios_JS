// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:;
//  - EQUILÁTERO: todos os lados iguais;
//  - ISÓSCELES: dois lados iguais;
//  - ESCALENO: todos os lados diferentes;

let l1 = parseInt(prompt("Digite o comprimento do lado 1"));
let l2 = parseInt(prompt("Digite o comprimento do lado 2"));
let l3 = parseInt(prompt("Digite o comprimento do lado 3"));

if(l1 <l2+l3  && l2<l1+l3 && l3<l1+l2){
    console.log("Pode formar um triângulo");
    console.log("-----------------------------");
    let l1 = parseInt(prompt("Digite o comprimento do lado 1"));
    let l2 = parseInt(prompt("Digite o comprimento do lado 2"));
    let l3 = parseInt(prompt("Digite o comprimento do lado 3"));

    if((l1===l2 && l1===l3) && (l2===l1 && l2===l3) &&(l3==l1 && l3===l1)){
        console.log('Triângulo equilatero');
    }else if((l1===l2 && l1!==l3 || l1===l3 && l1!==l2) || (l2===l1 && l2!==l3 || l2===l3 && l2!==l1) || (l3==l1 && l3!==l2 || l3==l2 && l3!==l1)){
        console.log('Triângulo isóceles');
    }else if((l1!==l2 && l1!==l3) || (l2!==l1 && l2!==l3) || (l3!==l1 && l3!==l2)){
        console.log('Triângulo escaleno')
    }
}else{
    console.log("Não pode formar um triângulo");
}