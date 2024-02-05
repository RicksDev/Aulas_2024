// Criando variáveis

const nome = document.querySelector("#nome");
// O query ele pega um seletor do HTML. O nome vira um ID, como se fosse um GetElementId

const button = document.querySelector("button");

const lista = document.querySelector(".lista");

const allPs = document.querySelectorAll("p");

// Mostra o primeiro item da lista AllPs.
console.log(allPs[0].innerHTML);

// ForEach

allPs.forEach(item => console.log(item.innerHTML));

// Ele vai lá no HTML e procura a tag "button" e pega ela, executa exatamente o que você mandar aqui.

// Eventos de JavaScript

button .addEventListener("click", function(event) {
    // alert("Cadastro realizado com sucesso!")
    event.preventDefault();
    const inputValue = nome.value;

    // Incluindo itens no HTML
    const templateHtml = `<li>${inputValue}</li>`;
    // console.log(inputValue);

    lista.innerHTML += templateHtml;

    // o "+=" vai adicionando mais um.

    // Limpando o nome

    nome.value = " ";
});

