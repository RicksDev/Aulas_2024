console.log("Inicio da Criação do Servidor com parâmetro de acesso..");
// Printamos na tela o Início  esta mensagem.

const http = require('http');
// Criação de uma constante que vai requerer uma página Http

// Biblioteca para trabalhar com arquivos
// http: Cria a estrutura para o serviço http com definição de porta de acesso
const fs = require('fs');
// fs: permite manipulação de arquivos do tipo (log,txt,html e outros)

// Criar função com nome FileOpena para uso de abertura dos aquivos Html
const fileOpen = (response, arquivo) => {

    // Deve resposta com a mensagem de sucesso e definição de tipo de leitura
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // __5dirname é uma função interna do NODE que te devolve o caminho(path) da unidade de armazenamento do documento
    fs.readFile(__dirname + "/View/" + arquivo + ".html", function (err, data) {

        // utilizar o método readFile para a leitura do arquivo a ser aberto no browser(navegador);
        if (err) console.log("Erro ao ler arquivo");
        response.end(data);
    });
};

// Aqui será criada a constante MyServer para criar o servidor
const myServer1 = http.createServer((request, response) => {
    // A primeira variavel será tudo que o usuário vai ser passado do usuario pro navegador e a segunda tudo que o servidor vai devolver pro usuário.... A variável pode ser qualquer nome

    // Variável global no projeto com a atribuição da requisição de entrada do endereço do servidor do API.
    var page = request.url;
    // var httpCode = "200";
    // var conteudo = "";
    // Variáveis criadas sendo inicializada

    switch (page) {
        case "/d1":
            fs.createReadStream(__dirname + "/images/download.jpg").pipe(response);
            break;
        case "/d2":
            fileOpen(response, "index1");
            break
        case "/d3":
            fileOpen(response, "index2");
            break
        case "/d4":
            fileOpen(response, "index4");
        case "/d5":
            fileOpen(response, "index3");
            break
        default:
            response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end("Erro ao acessar a opção");
    };



    //     if (request.url ==='/index'){
    //         // Se o "resquest" (o que o usuario digitar) for === (extritamente certo) ao /index, vai mostrar na url o conteudo. Que já foi criado la em cima como uma variável

    //         conteudo = `<h1>Resposta para index</h1>`;
    // // Aqui um bloco de condição Se entrar na pagina /index, vai mostar o texto "Resposta para index".

    //     } else if (request.url=== '/floresta'){
    //         conteudo = `<img src="https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg" alt="">`;
    // // Se der /floresta na url vai aparecer essa imagem

    //     } else if (request.url=== '/botao'){
    //         conteudo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=Qo3F3BWtJQQwhhEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    // // Se der o /botao na url, vai aparecer o vídeo

    //     } else {
    //         httpCode ="404";
    //         conteudo = `<h1>Sem acesso.<br> Informe onde deseja ir /index /floresta /botao </h1>`;
    //     }
    // // Se caso nada disso em cima fucionar, é pra dar um erro 404 (Página não encontrada) e mostra onde deve ir.

    //     response.writeHead(httpCode, {'Content-Type': 'text/html; charset=utf=8'});
    //     response.end(conteudo);
    // // o "response" que é o que o servidor vai devolver ao usuário...

});

console.log("Teste");
myServer1.listen(3000, () => {
    console.log('Servidor do web no endereço: http://127.0.0.1:3000/');
});

// myServer.listen(3000,() => {
//     //O servidor será aberto na porta 3000 e coloco ele em funcionamento com essa linha 40.
//     console.log('Servidor de WEB no endereço http://127.0.0.1:3000/');
//     // Aqui mostra no terminal para podermos clicar e abrir a página.
// });