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