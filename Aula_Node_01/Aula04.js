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

    reqEntrada.close();
})