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

const director1 = document.getElementById('director_1');
director1.textContent = '-';
const director2 = document.getElementById('director_2');
director2.textContent = '-';
const escritor = document.getElementById('escritor');
escritor.textContent = '-';

/* Seccion trailer */
const secciontrailer = document.querySelector('.Trailer');
const containerTrailer = document.querySelector('.contenedorTrailer');
const trailerMario = document.getElementById('trailerMario');
containerTrailer.removeChild(trailerMario)
const agregarImg = document.createElement('img');
agregarImg.src = `https://image.tmdb.org/t/p/w500/${DetallesDePelicula.backdrop_path}`;
containerTrailer.appendChild(agregarImg);

const logoYT = document.createElement('img');
logoYT.classList = 'logo-youtube';
logoYT.src = '../assets/img/youtube.svg';
logoYT.style.width = '60px';
logoYT.style.position = 'absolute';
logoYT.style.top = '53%';
logoYT.style.left = '50%';
logoYT.style.transform = 'translate(-50%, -50%)';
containerTrailer.appendChild(logoYT);
logoYT.addEventListener('click', () => {alert('Sorry, no hay ningun trailer, solo es una imagen =p')});