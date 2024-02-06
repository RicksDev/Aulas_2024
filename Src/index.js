console.log("Inicio da Criação do Servidor com parâmetro de acesso..");
// Printamos na tela o Início  esta mensagem.

const http = require('http');
// Criação de uma constante que vai requerer uma página Http

// Aqui será criada a constante MyServer para criar o servidor
const myServer = http.createServer((request,response) => {
    // A primeira variavel será tudo que o usuário vai ser passado do usuario pro navegador e a segunda tudo que o servidor vai devolver pro usuário.... A variável pode ser qualquer nome
    var httpCode = "200";
    var conteudo = "";
// Variáveis criadas sendo inicializada

    if (request.url ==='/index'){
        conteudo = `<h1>Resposta para index</h1>`;
// Aqui um bloco de condição Se entrar na pagina /index, vai mostar o texto "Resposta para index".
    
    } else if (request.url=== '/floresta'){
        conteudo = `<img src="https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg" alt="">`;
// Se der /floresta na url vai aparecer essa imagem

    } else if (request.url=== '/botao'){
        conteudo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=Qo3F3BWtJQQwhhEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
// Se der o /botao na url, vai aparecer o vídeo

    } else {
        httpCode ="404";
        conteudo = `<h1>Sem acesso.<br> Informe onde deseja ir /index /floresta /botao </h1>`;
    }
// Se caso nada disso em cima fucionar, é pra dar um erro 404 (Página não encontrada) e mostra onde deve ir.

    response.writeHead(httpCode, {'Content-Type': 'text/html; charset=utf=8'});
    response.end(conteudo);
// Não sei

});

myServer.listen(3000,() => {
    //O servidor será aberto na porta 3000
    console.log('Servidor de WEB no endereço http://127.0.0.1:3000/');
    // Aqui mostra no terminal para podermos clicar e abrir a página.
});