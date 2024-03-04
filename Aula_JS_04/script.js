
const horario = document.getElementById("horario");
let dataHora = new Date();

//Dia, mês e ano... como?


const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const diaData = document.getElementById("diaData");
const random = document.getElementById("random");

horario.innerText = dataHora; // data completa

dia.innerHTML = dataHora.getDay();


mes.innerHTML = dataHora.getMonth() + 1; //Ele conta janeiro como zero(0), por isso tem que somar 1.

ano.innerHTML = dataHora.getFullYear();



diaData.innerHTML = dataHora.getDate();

//Atividade : Mostrar os dias da semana, o nome do dia da semena e o nome do mês, de acordo com a data.

let diaSemana;
let mesAno;

switch (dataHora.getDay()) {
    case 1:
        diaSemana = "Segunda"
        break;
    case 2:
        diaSemana = "Terça"
        break;
    case 3:
        diaSemana = "Quarta"
        break;
    case 4:
        diaSemana = "Quinta"
        break;
    case 5:
        diaSemana = "Sexta"
        break;
    case 6:
        diaSemana = "Sábado"
        break;
    case 7:
        diaSemana = "domingo"
        break;

}

Math.floor() //Arredonda pra baixo
Math.random() //retorna um número aleatório entre 0 e 1
Math.round() //Arredonda para cima ou para baixo

//Gerar números aleatórios de 0 a 100

let number = Math.round((Math.random() * 25) + 1);

random.textContent = number;

let numeros = [];
let numeroSelecionado = [];

while (numeroSelecionado.length < 25) {
    let numero = Math.round(Math.random() * 15) + 1;
    if (!numeroSelecionado.includes(numero)) {
        numeroSelecionado.push(numero);
        numeros.push(numero);
    }
    break;
}

document.write(numeros);














