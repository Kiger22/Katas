const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta']

//todo  Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

for (let i = 0; i < products.length; i++) {
  const element = products[i];
  if (element.includes('Camiseta')) {
    console.log(element);
  }

}