// 58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
// vai parar quando for digitada a idade 999. No final, mostre quantos alunos
// existem na turma e qual é a média de idade do grupo.


//Decidi forçar o encerramento da aplicação  e decrementar um aluno e uma idade a menos;
let idade = 1
let qtdAlunos =1;
let somaIdade = 0;
while(idade!==999){
    idade = parseInt(prompt(`Digite a idade do ${qtdAlunos}º aluno`));
    if(idade===999){
        idade=0;
        qtdAlunos-=1;
        break;
    }
    somaIdade+=idade;
    qtdAlunos++;

}

let media = somaIdade/qtdAlunos;

alert(`Média de idade do grupo ${media}`);
alert(`Quantidade de alunos ${qtdAlunos}`);