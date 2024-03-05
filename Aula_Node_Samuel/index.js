/*
Servidor HTTP e API com o express.
express => Framework que nos proporciona os métodos mais usuais.

Importar o módulo express -antes precisa instalar

npm i express

A ideia agora é trabalar com aplicação FullStack
*/

//MVC => Padrão de objeto que separa as responsabilidades em :
//Modelo, View e Controllers.

const express = require("express");
const app = express();

//Pegando um mode externo -> uma View

const indexView = require("./views/indexView");
const indexView2 = require("./views/indexView2");
const indexView3 = require("./views/indexView3");

//Deixar uma pasta pública para ser acessada externamente
app.use(express.static("public"));

//Aqui vão as rotas (endpoints)

//A partir de agora as rotas serão criadas assim, sem o uso de IF.
app.get('/student', (req, res, next) => {

    //res de resposta, vai responder quando tiver o /student
    res.end(indexView());
});

app.get('/produtos',(req, res, next) =>{

    res.end(indexView2());
});

app.get('/admin', (req, res, next) => {
    res.end(indexView());
});



app.listen(3001, () => {
    console.log("Servidor no ar com o Express... no http://127.0.0.1:3001");

});

