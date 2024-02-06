/* Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. 
Imprime en un console.log sus valores.

Puedes usar este array: */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const places of placesToTravel) {
  console.log(places)

}

for (let i = 0; i < placesToTravel.length; i++) {
  const element = placesToTravel[i];
  console.log(element)

}