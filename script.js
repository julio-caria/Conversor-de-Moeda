// ATUAL COTAÇÃO - MOEDAS
var precoDolar = 5.15;
var precoLibra = 5.97;
var precoEuro = 5.23;
var precoBitcoin = 110801.34;

// CAPTURANDO O INPUT E O VALOR INSERIDO
var valorElemento = document.getElementById("valor");

// CAPTURANDO O CAMPO DE RESPOSTA
var valorConvertido = document.getElementById("valorConvertido");

function ConverterDolar() {
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * precoDolar;

  var element = "R$" + valorEmReal;

  valorConvertido.innerHTML = element;
  valorConvertido.classList.add("convertido");
}

function ConverterLibra() {
  var valor = valorElemento.value;
  var valorEmLibra = parseFloat(valor);
  var valorEmReal = valorEmLibra * precoLibra;

  var element = "R$" + valorEmReal;

  valorConvertido.innerHTML = element;
  valorConvertido.classList.add("convertido");

  console.log(valorEmReal);
}

function ConverterEuro() {
  var valor = valorElemento.value;
  var valorEmEuro = parseFloat(valor);
  var valorEmReal = valorEmEuro * precoEuro;

  var element = "R$" + valorEmReal;

  valorConvertido.innerHTML = element;
  valorConvertido.classList.add("convertido");

  console.log(valorEmReal);
}

function ConverterBitCoin() {
  var valor = valorElemento.value;
  var valorEmBitCoin = parseFloat(valor);
  var valorEmReal = valorEmBitCoin * precoBitcoin;

  var element = "R$" + valorEmReal;

  valorConvertido.innerHTML = element;
  valorConvertido.classList.add("convertido");

  console.log(valorEmReal);
}
