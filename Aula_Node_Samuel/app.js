//Criar um servidor http
//1. Carregar o htpp
const http = require("http");


const server = http.createServer((req, res) => {
    //req quer dizer as requisições recebidos mundo lá fora
    console.log(req.url);

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    //Eu enquanto dev vou criar meus Endpoints..
    ///save /students / delete

    //quando eu tiver um req.url => é tudo que o usuário digitar na Url vai para o console.log q eu criei.

    if (req.url === '/save') {
        res.end("Salvando usuários...")
    } else if (req.url === '/students') {
        res.end("Lista de todos os usuários");
    } else if (req.url === '/delete') {
        res.end("Apagando usuário");
    } else {
        res.end("Não conheço essa rota!!")
    }
    //Endpoints => è a conexão entre o front end e backEnd, sendo a rota de acesso no servidor. O / alguma coisa.
});

server.listen(3000, () => {
    console.log("Servidor Ok");

});