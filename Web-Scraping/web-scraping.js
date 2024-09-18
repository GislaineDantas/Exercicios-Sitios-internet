// Web scraping: Coletar as últimas notícias do site Tudo Gostoso
// Colar o código na home: https://www.tudogostoso.com.br/ e depois chamar a função coletarUltimasNoticias()
// Feito por Gislaine Rodrigues

function coletarUltimasNoticias() {
    // Selecionando os elementos que contêm os títulos das últimas notícias
    let ultimasNoticias = document.querySelectorAll('.card-article');
  
    //imprimindo os títulos
    ultimasNoticias.forEach((noticias) => {
        
    // Captura e imprime o título da notícia
      console.log(noticias.innerText);  
    });
  }