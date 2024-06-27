// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento. parseInt(prompt("Digite o ano de nascimento"));

let anoNascimento = 1998;
const idade = 2024-anoNascimento;
const maiorIdade = idade -18;
if(idade<18){
    console.log("faltam " + idade + " anos para se alistar");
}else{
    console.log("Você possui " + idade+ " anos" + " você ultrapassou o tempo de alistamento obrigatório em " + maiorIdade + " anos" );
}