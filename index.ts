import { bodyStyle, sectionStyle } from './styles.css';

// Aplicar clase al body
document.body.classList.add(bodyStyle);

// Aplicar variables CSS en el body (como el style inline original)
document.body.style.setProperty('--clr', '#609cc1');
document.body.style.setProperty('--clr2', '#ea9f39');

// Crear sección con clase y variable CSS para fondo
const section = document.createElement('section');
section.className = sectionStyle;
section.style.setProperty('--bg', "url('assets/img-1.avif')");

// Crear dos enlaces <a>
const link1 = document.createElement('a');
link1.href = 'index7.html';

const link2 = document.createElement('a');
link2.href = 'index2.html';

// Añadir los links a la sección
section.appendChild(link1);
section.appendChild(link2);

// Añadir sección al body
document.body.appendChild(section);
