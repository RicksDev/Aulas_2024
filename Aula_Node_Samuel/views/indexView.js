//Convertendo HTML Em java Script
//Usando o module.exports, podemos exportar o arquivo para
//ser utilizado em outro local

module.exports = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Foi criado no Express....</h1>
    <form class="form">
      <label for="nome">Nome: </label>
      <input type="text" id="nome" />
      <br />

      <label for="email">Email: </label>
      <input type="text" id="email" />
      <br />

      <label for="contato">Contato: </label>
      <input type="text" id="contato" />
    </form>
  </body>
</html>

    `
}