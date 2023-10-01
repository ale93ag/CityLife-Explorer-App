// formatCityName.js

// *****funzione per formattare le parole prima della ricerca*****
export function formatCityName(nome) {
  nome = nome.toLowerCase();
  nome = nome.trim();
  nome = nome.replaceAll(" ", "-");
  return nome;
}
