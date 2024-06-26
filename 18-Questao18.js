// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.

let dataNascimento = parseInt(prompt("Digite o ano que você nasceu"));
const calculoIdade = 2024-dataNascimento;

if(calculoIdade >=18){
    console.log(`Você pode votar ! Pois possui ${calculoIdade} anos`)
}else{
    console.log(`Você não pode votar porque é menor de idade tendo ${calculoIdade} anos`);
}

