import cipher from "./cipher.js";

// Captura de Mensagem a codificar e offset
const btnCodificar = document.querySelector("#codificar"); // seleciona o botão de codificar

//captura valores, codifica e imprime mensagem
btnCodificar.onclick = function () {
  //captura texto a ser codificado
  let caixaDeTextoDeEntrada =
    document.getElementById("texto-a-codificar").value;
  //captura valor de offset
  let caixaDeOffsetPos = parseInt(
    document.getElementById("caixa-offset").value
  );
  //codifica mensagem
  let resultado = cipher.encode(
    caixaDeOffsetPos,
    caixaDeTextoDeEntrada.toUpperCase()
  );
  console.log(caixaDeTextoDeEntrada, caixaDeOffsetPos, resultado);
  //seleciona caixa para a resposta
  const resposta = document.getElementById("resposta");
  //imprime resposta
  resposta.value = resultado;
};

//Captura de Mensagem a decodificar e offset
const btnDecodificar = document.querySelector("#decodificar"); //seleciona o botão de codificar

//captura valores, decodifica e imprime mensagem
btnDecodificar.onclick = function () {
  //captura de texto a ser decodificado
  let caixaDeTextoDeSaida = document.getElementById("resposta").value;
  //captura valor offset
  let caixaDeOffsetNeg = parseInt(
    document.getElementById("caixa-offset").value
  );
  //decodifica mensagem
  let resultado = cipher.decode(
    caixaDeOffsetNeg,
    caixaDeTextoDeSaida.toUpperCase()
  );
  console.log(caixaDeTextoDeSaida, caixaDeOffsetNeg, resultado);

  //Seleciona caixa para a resposta
  const resposta = document.getElementById("texto-a-codificar");

  //imprime  resposta
  resposta.value = resultado;
};
