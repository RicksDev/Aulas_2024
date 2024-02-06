var http = require("http");

http.createServer(function(request,response) {
    //Criando um servidor de serviço HTTP header
    //Escrevendo na a codificação html na saída do serviço
    //Content type: text/plain

    //writeHead = escrevendo no cabeçalho.
    response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});

    if(request.url ==='/index'){
        response.end(`
            <h1>Estamos aqui hoje<br>
            Sei que eu devo achar legal!!! :-(((</h1>`
        );
    }else {
        response.end(`
        <h1>Não utilizou a variavel request com opção index</h1>`);
    }
    


    //texto escrito na página
}).listen(3000);

console.log('Servidor de Web no endereco http://127.0.0.1:3000/');