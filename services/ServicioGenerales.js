export const abreviarTexto = (texto) => {
  let textoAbreviado = texto
  if (texto.length > 10) {
    textoAbreviado = texto.slice(0, 10) + '...';
  }
  return textoAbreviado
};

// https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo
// https://stackoverflow.com/questions/13672106/jquery-replace-dot-to-comma-and-round-it
export const currencyFormat = (num) => {
  return '$ ' + (num.toFixed(2).replace(".", ",")).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}