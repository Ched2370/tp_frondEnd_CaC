const sectionDetalle = document.querySelector('.detalle');
console.log(sectionDetalle);
const poster = document.getElementById("poster");
const tituloPeli = document.getElementById("tituloPeli");
const fechaYGenero = document.getElementById("fechaYGenero");
const descripcion = document.getElementById("descripcion");


const PeliStorage = JSON.parse(localStorage.getItem('pelis'));
const idPelisStorage = JSON.parse(localStorage.getItem('detalles'));
/* console.log(PeliStorage);
console.log(idPelisStorage); */
let DetallesDePelicula;
PeliStorage.forEach(e => {
  if (idPelisStorage == e.id) {
    return DetallesDePelicula = e;
  }
});
console.log(DetallesDePelicula.poster_path);
poster.src = `https://image.tmdb.org/t/p/w500/${DetallesDePelicula.poster_path}`;
tituloPeli.textContent = `${DetallesDePelicula.title}`;
fechaYGenero.textContent = `${DetallesDePelicula.release_date} - ${DetallesDePelicula.genre_ids}`;
descripcion.textContent = `${DetallesDePelicula.overview}`;
sectionDetalle.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${DetallesDePelicula.backdrop_path})`;