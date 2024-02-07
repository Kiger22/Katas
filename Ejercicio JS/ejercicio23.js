/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. 
Imprime cada array en por consola.
 */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 90 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let shortMovie = []
let medianMovie = []
let longMovie = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    shortMovie.push(movie)
  }
  else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    medianMovie.push(movie)
  } else {
    longMovie.push(movie)
  }

}

console.log(`Peli corta: ${shortMovie}
Peli media: ${medianMovie}
Peli larga: ${longMovie}`);


console.log(shortMovie)
console.log(medianMovie)
console.log(longMovie)