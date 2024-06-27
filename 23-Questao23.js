// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

let nome = prompt("Digite o nome do cliente");
let sexo = prompt("Digite o sexo do cliente");
let totalCompras = parseFloat(prompt("Digite o total das compras"));
let desconto;

if(sexo==="feminino" || sexo ==="FEMININO" || sexo==="f" || sexo ==="F"){
    desconto = totalCompras - (totalCompras * (13/100));
    console.log(`A cliente ${nome} do sexo feminino recebeu 13% de desconto | valor total da compra : R$ ${desconto}`);
}else if(sexo ==="masculino" || sexo ==="MASCULINO" || sexo ==="m" || sexo ==="M"){
    desconto = totalCompras - (totalCompras * (5/100));
    console.log(`O cliente ${nome} do sexo masculino recebeu 5% de desconto | valor total da compra : R$ ${desconto}`);
}
