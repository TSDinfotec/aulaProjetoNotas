const prompt = require("prompt-sync")();
let notas = [];

const numNotas = +prompt("Quantas notas deseja informar?");

function capturarNotas() {  

    for (let i = 0; i < numNotas; i++){
        notas.push(+prompt(`${i+1} - Digite a nota: `));
    }
    let media = 0;
    notas.forEach((value) => {
        media += value;              
    })
       
    media = media / notas.length;

    return media;
}

const media1 = capturarNotas();

if(media1 >= 6){
    console.log("");
    console.log(`Alunos aprovado com média: ${media1}`);
    console.log("Parabénsssss!!!!");
    console.log("");
}else{
    console.log("");
    console.log(`Alunos não aprovado com média: ${media1}`);
    console.log("Encaminhado para Recuperação");
    console.log("");

    notas = [];
    const media2 = capturarNotas();
    if(media2 >= 6){
        console.log("");
        console.log(`Alunos aprovado com média: ${media2}`);
        console.log("Parabénsssss!!!!");
        console.log("");
    }else{
        
        console.log("");
        console.log(`Alunos não aprovado com média: ${media2}`);
        console.log("Aluno retido por nota!!!");
        console.log("");
    }
}









