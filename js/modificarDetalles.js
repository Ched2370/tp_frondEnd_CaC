// llamamos a los elementos a modificar
const sectionDetalle = document.querySelector('.detalle');
const poster = document.getElementById("poster");
const tituloPeli = document.getElementById("tituloPeli");
const fechaYGenero = document.getElementById("fechaYGenero");
const descripcion = document.getElementById("descripcion");

// llamamos a las pelis almacenadas en el localstorage
const PeliStorage = JSON.parse(localStorage.getItem('pelis'));
// llamamos al id guardado de la pelicula precionada
const idPelisStorage = JSON.parse(localStorage.getItem('detalles'));
/* console.log(PeliStorage);
console.log(idPelisStorage); */
let DetallesDePelicula;
PeliStorage.forEach(e => {
  // comparamos el id de las pelis con el id guardado
  if (idPelisStorage == e.id) {
    return DetallesDePelicula = e;
  }
});
//console.log(DetallesDePelicula.poster_path);
// modificamos los elementos
poster.src = `https://image.tmdb.org/t/p/w500/${DetallesDePelicula.poster_path}`;
tituloPeli.textContent = `${DetallesDePelicula.title}`;
fechaYGenero.textContent = `${DetallesDePelicula.release_date} - ${DetallesDePelicula.genre_ids}`;
descripcion.textContent = `${DetallesDePelicula.overview}`;
sectionDetalle.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${DetallesDePelicula.backdrop_path})`;