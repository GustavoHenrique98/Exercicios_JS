// 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.

let a = parseInt(prompt("Digite o valor de A"));
let b = parseInt(prompt("Digite o valor de B"));
let c = parseInt(prompt("Digite o valor de C"));

//Formula b2 - 4 * a *c;
// exemplo: a = 2, b = 8 e c = – 24
let delta = b**2 - 4*a*c;

console.log(`O valor de delta é : ${delta}`);