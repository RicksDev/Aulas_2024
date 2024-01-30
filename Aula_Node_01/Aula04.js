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

reqEntrada.question("Qual o valor do raio que deseja calcular? ", radius => {
    console.log("O raio é: %d", radius);

    let msgErro = "É necessário definir o valor numérico para poder efetuar a operação";

    if(!radius){
        console.log(msgErro);
    }else {
        if(isNaN(radius)){
            console.log(msgErro);
        }else {
            console.log(`O diâmetro da esfera de raio ${radius} é ${fctCalcDiametro(radius)}, feito usando a função javaScript padrão.`);
            console.log(`O volume de uma esfera de raio ${radius} é ${fctCalcDiametro(radius)}, feito usando a aroow functions que é uma simplificação para funções de expressões.`);
        }
    }

    reqEntrada.close();
})