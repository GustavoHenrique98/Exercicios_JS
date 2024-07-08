// 55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
// tentativas para tentar acertar.

/** Essa questão já foi feita **/
// 32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

let random = Math.round(Math.random()*10);
if(random ===0){
    random=1;
}
console.log(random)
let resp;
let tentativas = 0;
while(random!==resp){
    resp = parseInt(prompt("Adivinhe  o número , qual é?"));
    if(resp !== random){
        alert("Errou!");
        tentativas++;
        alert(`Quantidade de tentativas ${tentativas}/3`)
        if(tentativas ===3){
            alert(`Sua quantidade de tentativas se esgotou o programa será encerrado!`);
            alert(`O número sorteado era : ${random}`)
            break
        }
    }else{
        alert("Acertou!");
    }

}
