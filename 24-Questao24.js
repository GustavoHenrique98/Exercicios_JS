// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas

let distancia = parseInt(prompt("Quantos kilometros são necessários para chegar ao destino final de sua viagem?"));
let total;
if(distancia <=200){
    total = distancia *0.50;
    console.log(`O valor total a se pagar pela viagem é de ${total}`);
}else if(distancia >200){
    total = distancia*0.45;
    console.log(`O valor total a se pagar pela viagem é de ${total}`);
}