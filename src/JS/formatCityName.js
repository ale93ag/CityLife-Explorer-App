export {formatCityName}
// *****funzione per formattare le parole prima della ricerca*****
let formatCityName = function (nome) {
    nome = nome.toLowerCase();
    nome = nome.trim();
    nome = nome.replaceAll(" ", "-");
    return nome;
  };