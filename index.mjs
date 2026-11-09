import * as fs from 'node:fs';

const paginas = {
  '/': fs.readFileSync('index.html', 'utf8'),
  '/sobre': fs.readFileSync('sobre.html', 'utf8')
};

export const handler = async (event) => {
  const caminho = event.rawPath || '/';
  const pagina = paginas[caminho];

  if (!pagina) {
    return {
      statusCode: 404,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      },
      body: '<h1>404 - Página não encontrada</h1><a href="/">Voltar ao início</a>'
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: pagina
  };
};