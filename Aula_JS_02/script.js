

const container = document.getElementById("container");

var array = [1,2,3];

var myCard =  `
<div id="primeiro-card"><img src="imagens/relogio_02.png" height="150px" width="160px" alt="">
<h4>Apple Watch</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officia non maxime fugiat inventore ipsa? Sit voluptatibus</p>
<p class="valor">R$2.890,00</p>
<div class="footer-card">Adicionar ao carrinho</div>
</div>
`;

// const titulo = document.getElementById("titulo");
container.innerHTML = `<div id="primeiro-card"><img src="imagens/relogio_02.png" height="150px" width="160px" alt="">
<h4>Apple Watch</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officia non maxime fugiat inventore ipsa? Sit voluptatibus</p>
<p class="valor">R$2.890,00</p>
<div class="footer-card">Adicionar ao carrinho</div>
</div>`;

for (let index = 0; index < array.length; index++) {
    container.innerHTML = container.innerHTML + myCard;
    
    
}


