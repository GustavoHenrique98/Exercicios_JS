// 47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
// 450 + 400 + 350 + 300 + ... + 50 + 0

let i =500;
let soma=0;
while(i>=0){
    soma+=i;
    i-=50;
}

console.log(soma);