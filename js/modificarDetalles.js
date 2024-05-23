const poster = document.getElementById("poster");
const tituloPeli = document.getElementById("tituloPeli");
const fechaYGenero = document.getElementById("fechaYGenero");
const descripcion = document.getElementById("descripcion");

// container de peliculas en index
const tendenciasContainer = document.getElementById("tendenciasContainer");
tendenciasContainer.addEventListener("click", (e) => {
  // Obtén el elemento en el que se hizo clic
  let clickedElement = `${e.target}`;
  localStorage.setItem('detalles', JSON.stringify(clickedElement));
  if (clickedElement.classList.contains('movie-item')) {
    // Supongamos que tienes los detalles de la película en atributos de datos
    let detalles = {
        poster: clickedElement.getAttribute('src'),
        tituloPeli: clickedElement.getAttribute('alt')
    };

    // Guarda los detalles en localStorage como una cadena JSON
    localStorage.setItem('detalles', JSON.stringify(detalles));
}
});
