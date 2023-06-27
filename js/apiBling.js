// Defina sua chave de API do Bling
const apiKey = '3db918f4aa5480eeba80d7bf7814f0b2bc2896fb15ecf267729cf2b435fc180ee7804483';

// Domínio do GitHub Pages usado como proxy
const proxyURL = 'https://leandroespindula.github.io';

// Exemplo de função para buscar um produto na API do Bling pelo código do item
function getProdutoPorCodigoItem(codigoItem) {
  axios.get(`${proxyURL}/proxy/https://bling.com.br/Api/v2/produto/${codigoItem}`, {
    params: {
      apikey: apiKey
    }
  })
  .then(function(response) {
    console.log(response.data);
    // Manipule os dados da resposta conforme necessário
  })
  .catch(function(error) {
    console.error(error);
    // Lide com erros de solicitação, se necessário
  });
}

// Chame a função para buscar o produto pelo código do item (pode ser em resposta a algum evento)
getProdutoPorCodigoItem('123');
