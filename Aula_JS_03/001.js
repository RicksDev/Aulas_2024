// // Utilizando o forEach, adicione a uma array no Javascript, todos os itens:
// H1,
// p, 
// input,
// button e 
// ul.

const meusH1 = document.querySelectorAll("h1");

const meusP = document.querySelectorAll("p");

const meuInput = document.querySelectorAll("input");

const meuButton = document.querySelectorAll("button");

const meuUl = document.querySelectorAll("ul");

meusH1.forEach(item => console.log(item.textContent));

meusP.forEach(item => console.log(item));

meuInput.forEach(item => console.log(item.value));

meuButton.forEach(item => console.log(item.value));

meuUl.forEach(item => console.log(item));


// console.log(meusH1[0].innerHTML);