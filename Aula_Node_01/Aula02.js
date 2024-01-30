function fctTexto(){
    let intV1 = 50;
    let intV2 = 40;
    let intV3 = intV1 + intV2;
    let strNome = "Marcos";
    

    console.log ("Olá %s, o resultado da operação foi: %d", strNome, intV3);
}

fctTexto();

 //Function sem paramêtro
const fctMensagem = () => {
    let nome = "Renato";
    console.log("Tenha um excelente dia, %s", nome);
}

fctMensagem();

//FUnction com paramêtro de retorno
function fctCalculo(a,b){
    let intDif = 0;
    let intResult = a+b;
    if (a > b){
        intDif = a-b;
    }else {
        intDif = b-a;
    }
    for(let i=1; i <= intDif; i++){
        intResult *= i;
    }
    return intResult;
}
console.log(fctCalculo(6,8));

const fctFibonacci =(intValor) => {
    let intTermo = intValor;
    let intPenultimo = 0;
    let intUltimo = 1;
    let intNumero = 0;
    let intCount = 3;
k
    while (intCount <= intTermo){
        intNumero = intUltimo + intPenultimo;
        intPenultimo = intUltimo;
        intUltimo = intNumero;
        intCount++;
    }
    return intNumero;
}
