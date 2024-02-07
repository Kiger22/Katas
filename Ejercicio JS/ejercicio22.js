/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
Recuerda no usar frutas duplicadas. 
Finalmente, imprime el array resultante.
 */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: false },
];

let j = 0
for (let i = 0; i < foodSchedule.length; i++) {
  const element = foodSchedule[i];

  if (element.isVegan === false) {
    element.name = fruits[j];
    element.isVegan = true;
    j++
  }
}

console.log(foodSchedule);



