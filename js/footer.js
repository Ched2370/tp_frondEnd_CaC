/* 
 <nav class="navegacion">
            <ul class="listaNav">
                <li class="listaItem"><a class="linkNav" href="">Términos y condiciones</a></li>
                <li class="listaItem"><a class="linkNav" href="">Preguntas frecuentes</a></li>
                <li class="listaItem"><a class="linkNav" href="">Ayuda</a></li>
                <li class="listaItem"><a class="linkNav administradorPeliculas" href="">Administrador Peliculas</a></li>
            </ul>
        </nav>
        <a href="#main" class="flechaArriba">
            <img src="./assets/img/flecha-hacia-arriba.png" alt="ir arriba flecha">
        </a>
        <p class="aportes">Aporte realizado por coordinación JAVA-PHP Colaborador <a href="https://www.linkedin.com/in/gisele-milagros-gonzalez" target="_blank">Gisele M. Gonzalez</a></p>
        <p class="video">Proyecto paso a paso <a href="https://youtu.be/1PgXE1c5jOM" target="_blank">Video Youtube</a></p>
*/

const footer = document.querySelector('.footer');
const navFooter = document.createElement('nav');
navFooter.classList = 'navegacion'

const ulFooter = document.createElement('ul');
ulFooter.classList = 'listaNav';

const liMaicol = document.createElement('li');
liMaicol.classList = 'listaItem';
const aMaicol = document.createElement('a');
aMaicol.classList = 'linkNav';
aMaicol.textContent = 'Maicol Perez';
ulFooter.appendChild(aMaicol);

const liGuillermo = document.createElement('li');
liGuillermo.classList = 'listaItem';
const aGuillermo = document.createElement('a');
aGuillermo.classList = 'linkNav';
aGuillermo.textContent = 'Guillermo Paz Rodriguez';
ulFooter.appendChild(aGuillermo);

const liVeronica = document.createElement('li');
liVeronica.classList = 'listaItem';
const aVeronica = document.createElement('a');
aVeronica.classList = 'linkNav';
aVeronica.textContent = 'Verónica Franco';
ulFooter.appendChild(aVeronica);

const liMario = document.createElement('li');
liMario.classList = 'listaItem';
const aMario = document.createElement('a');
aMario.classList = 'linkNav';
aMario.textContent = 'Mario Martin Ibañez';
ulFooter.appendChild(aMario);

footer.appendChild(navFooter);
navFooter.appendChild(ulFooter);
