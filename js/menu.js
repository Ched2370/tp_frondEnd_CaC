const header = document.querySelector('.header');
const nav = document.createElement('nav');
nav.classList = 'navegacion';
header.appendChild(nav);

const aContainerLogo = document.createElement('a');
aContainerLogo.classList = 'anclaLogo';
aContainerLogo.href = '../index.html';
nav.appendChild(aContainerLogo);

const imgLogo = document.createElement('img');
imgLogo.src = '../assets/img/Pelis_Script.png'
imgLogo.alt = 'Pelis_Script';
aContainerLogo.appendChild(imgLogo);

const ulMenu = document.createElement('ul');
ulMenu.classList = 'listaNav';
nav.appendChild(ulMenu);

const liI = document.createElement('li');
liI.classList = 'listaItem';
const aI = document.createElement('a');
aI.classList = 'linkNav';
aI.href = '../index.html';
aI.textContent = 'Inicio';
liI.appendChild(aI);
ulMenu.appendChild(liI);

const liT = document.createElement('li');
liT.classList = 'listaItem';
const aT = document.createElement('a');
aT.classList = 'linkNav';
aT.href = '../index.html#tendencias';
aT.textContent = 'Tendecias';
liT.appendChild(aT);
ulMenu.appendChild(liT);

const liR = document.createElement('li');
liR.classList = 'listaItem';
const aR = document.createElement('a');
aR.classList = 'linkNav';
aR.href = '../pages/register.html';
aR.textContent = 'Registrarse';
liR.appendChild(aR);
ulMenu.appendChild(liR);

const liL = document.createElement('li');
liL.classList = 'listaItem';
const aL = document.createElement('a');
aL.classList = 'linkNav iniciarSesion';
aL.href = '../pages/iniciosesion.html';
aL.textContent = 'Ingresar';
liL.appendChild(aL);
ulMenu.appendChild(liL);
