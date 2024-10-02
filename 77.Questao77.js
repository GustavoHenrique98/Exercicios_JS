// 77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No 
// final, mostre uma listagem com todos os nomes informados, na ordem inversa 
// daquela em que eles foram informados. 


let pessoas = new Array(7);

for(let i=0;i<pessoas.length;i++){
    pessoas[i] = prompt(`Digite o nome da ${i+1}º pessoa`);

}
pessoas.reverse();
pessoas.forEach(e=>{
    console.log(e);
})