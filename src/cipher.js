const cipher = {
  encode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError();
    }
    let novaLetra = "";
    let novoTexto = "";
    for (let index = 0; index < string.length; index++) {
      const numeroDaLetra = string[index].charCodeAt();
      if (numeroDaLetra >= 65 && numeroDaLetra <= 90) {
        novaLetra = ((numeroDaLetra - 65 + offset) % 26) + 65;
      } else if (numeroDaLetra === 32) {
        novaLetra = numeroDaLetra;
      }
      novoTexto = novoTexto + String.fromCharCode(novaLetra);
    }

    return novoTexto;
  },
  decode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError();
    }
    //return cipher.encode(-offset, string);
    let novaLetra = "";
    let novoTexto = "";
    for (let index = 0; index < string.length; index++) {
      const numeroDaLetra = string[index].charCodeAt();
      if (numeroDaLetra >= 65 && numeroDaLetra <= 90) {
        novaLetra = ((numeroDaLetra - 90 - offset) % 26) + 90;
      } else if (numeroDaLetra === 32) {
        novaLetra = numeroDaLetra;
      }
      novoTexto = novoTexto + String.fromCharCode(novaLetra);
    }

    return novoTexto;
  },
};

export default cipher;
("");
