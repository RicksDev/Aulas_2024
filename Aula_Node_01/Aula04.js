const reqEntrada = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fctCalcDiametro(radius){
    return radius * radius;
}

const fctCalcVolume = (radius) => {
    return 4/3 * Math.PI * radius;
}

reqEntrada.question("Qual o valor do raio que deseja calcular? ", raio => {
    console.log("O raio é: %d", raio);

    let msgErro = "É necessário definir o valor numérico para poder efetuar a operação";

    if(!raio){
        console.log(msgErro);
    }else {
        if(isNaN(raio)){
            console.log(msgErro);
        }else {
            console.log(`O diâmetro da esfera de raio ${raio} é ${fctCalcDiametro(raio)}, feito usando a função javaScript padrão.`);
            console.log(`O volume de uma esfera de raio ${raio} é ${fctCalcVolume(raio)}, feito usando a aroow functions que é uma simplificação para funções de expressões.`);
        }
    }

    reqEntrada.close();
})