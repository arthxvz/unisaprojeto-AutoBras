// Banco de dados 
const produtos = {
"8-00229":"R15MP07-N1",
"8-00230":"R16MP03-N4",
"8-00233":"R15MP03-N4",
"8-00235":"R15MP03-N3",
"8-00236":"R16MP06-N1",
"8-00237":"R15MP07-N2",
"8-00245":"R15MP01-N4",
"8-00246":"R16MP02-N4",
"8-00247":"R15MP04-N4",
"8-00249":"R16MP04-N3",
"8-00251":"R15MP01-N1",
"8-00252":"R15MP01-N2",
"8-00253":"R16MP04-N1",
"8-00254":"R16MP01-N1",
"8-00255":"R16MP01-N3",
"8-00256":"R15MP04-N1",
"8-00257":"R16MP01-N2",
"8-00258":"R16MP05-N3",
"8-00259":"R15MP05-N4",
"8-00260":"R15MP05-N1",
"8-00261":"R15MP05-N2",
"8-00262":"R15MP02-N3",
"8-00263":"R15MP02-N2",
"8-00265":"R16MP03-N2",
"8-00266":"R16MP03-N3",
"8-00268":"R16MP06-N2",
"8-00269":"R16MP06-N3",
"8-00271":"R16MP06-N4",
"8-00273":"R15MP06-N3",
"8-00274":"R15MP06-N2",
"8-00275":"R15MP06-N1",
"8-00277":"R15MP05-N3",
"8-00279":"R15MP02-N1",
"8-00280":"R15MP02-N4",
"8-00281":"R15MP04-N2",
"8-00282":"R15MP01-N3",
"8-00284":"R16MP02-N2",
"8-00285":"R16MP02-N1",
"8-00286":"R16MP02-N3",
"8-00287":"R16MP04-N2",
"8-00288":"R15MP04-N3",
"8-00289":"R16MP03-N1",
"8-00290":"R15MP06-N4",
"8-00291":"R16MP05-N1",
"8-00292":"R15MP07-N3",
"8-00293":"R16MP05-N2",
"8-00294":"R15MP07-N4"
};

// Função de busca
function buscarProduto() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = document.getElementById("resultado");

  if (codigo === "") {
    resultado.textContent = "Digite um código.";
    return;
  }

  if (produtos[codigo]) {
    resultado.innerHTML = `
      <strong>Código:</strong> ${codigo}<br>
      <strong>Endereço:</strong> ${produtos[codigo]}
    `;
  } else {
    resultado.textContent = "Produto não encontrado.";
  }
}

// Evento do botão
document.getElementById("formBusca").addEventListener("submit", function(e) {
    e.preventDefault(); // evita recarregar a página
    buscarProduto();    // chama sua função de busca
});