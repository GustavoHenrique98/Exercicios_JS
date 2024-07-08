// 57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
// No final, mostre o total de salários pagos aos homens e o total pago às
// mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
// sempre que ler os dados de um funcionário.

let resp = "sim";
let i=1;
let somaSalM = 0;
let somaSalF = 0;
while(resp==="sim"){
    
    let salario = parseFloat(prompt(`Digite o salário do ${i}º funcionário`));
    let sexo = prompt(`Digite o gênero da ${i}º pessoa.`);
    
    if(sexo ==="masculino" || sexo ==="Masculino" || sexo ==="m" ){
        somaSalM+=salario;
    }else if(sexo ==="feminino" || sexo ==="Feminino" || sexo ==="f"){
        somaSalF+=salario;

    }

    resp=prompt("Quer continuar?");
    i++;
}

console.log(`Total pago aos Homens ${somaSalM}`);
console.log(`Total pago as Mulheres ${somaSalF}`);