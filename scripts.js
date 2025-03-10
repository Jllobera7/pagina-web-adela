/* -----------------------------JUAN-----------------------------------------------*/




















/* -----------------------------JONAY-----------------------------------------------*/

/* Tarea 1*/
// Array de objetos con datos de perfumes 
const perfumes = [
    { id: 1, nombre: "9PM de Afnan Perfumes", precio: 48.00, categoria: "Hombre" },
    { id: 2, nombre: "Aether de French Avenue", precio: 51.00, categoria: "Hombre" },
    { id: 3, nombre: "Hawas Ice for Him de Rasasi", precio: 79.00, categoria: "Hombre" },
    { id: 4, nombre: "Al Nashama Caprice de Lattafa Perfumes", precio: 40.00, categoria: "Hombre" },
    { id: 5, nombre: "Asad de Lattafa Perfumes", precio: 32.00, categoria: "Hombre" },
    { id: 6, nombre: "9AM de Afnan Perfumes", precio: 48.00, categoria: "Mujer" },
    { id: 7, nombre: "Magical Moment Fantasy de Le Chameau Emper", precio: 85.00, categoria: "Mujer" },
    { id: 8, nombre: "Bint Hooran Rose de Ard Al Zaafaran", precio: 38.00, categoria: "Mujer" },
    { id: 9, nombre: "Luscious de French Avenue", precio: 48.00, categoria: "Mujer" },
    { id: 10, nombre: "Irida de French Avenue", precio: 51.00, categoria: "Mujer" }
];

// Función para generar el HTML de un perfume
function generarHTMLPerfume(perfume) {
    return `<article>
            <span class="etiqueta-oferta">¡Oferta!</span>
            <img class="imagen-producto" src="../imagenes/${perfume.nombre}.webp" alt="${perfume.nombre}">
            <h3>${perfume.nombre}</h3>
            <p class="perfumes-de">Perfumes ${perfume.categoria}</p>
            <p class="precio">
                <span class="precio-original">${(perfume.precio + 4).toFixed(2)} €</span>
                <span class="precio-oferta">${perfume.precio.toFixed(2)} €</span>
            </p>
        </article>`;
}

// Función para actualizar la sección de perfumes en la página
function actualizarPerfumes(listaPerfumes) {
    const section = document.getElementById('elementos-perfumes');
    section.innerHTML = ''; // Limpia el contenido actual
    listaPerfumes.forEach(function(perfume) {
        section.innerHTML += generarHTMLPerfume(perfume);
    });
}

// Filtrar perfumes por precio máximo
function filtrarPorPrecio(maxPrecio) {
    const categoriaActual = window.location.pathname.includes('hombre') ? 'Hombre' : 'Mujer';
    const perfumesFiltrados = perfumes.filter(function(perfume) {
        return perfume.precio <= maxPrecio && perfume.categoria === categoriaActual;
    });
    actualizarPerfumes(perfumesFiltrados);
}

// Ordenar perfumes por nombre
function ordenarPorNombre() {
    const categoriaActual = window.location.pathname.includes('hombre') ? 'Hombre' : 'Mujer';
    const perfumesOrdenados = [...perfumes]
    .filter(function(perfume) {
        return perfume.categoria === categoriaActual;
    })
        .sort((a, b) => a.nombre.localeCompare(b.nombre));
    actualizarPerfumes(perfumesOrdenados);
}

// Ordenar perfumes por precio
function ordenarPorPrecio() {
    const categoriaActual = window.location.pathname.includes('hombre') ? 'Hombre' : 'Mujer';
    const perfumesOrdenados = [...perfumes]
        .filter(perfume => perfume.categoria === categoriaActual)
        .sort((a, b) => a.precio - b.precio);
    actualizarPerfumes(perfumesOrdenados);
}

// Cargar perfumes iniciales según la página
function cargarPerfumesIniciales() {
    const categoriaActual = window.location.pathname.includes('hombre') ? 'Hombre' : 'Mujer';
    const perfumesCategoria = perfumes.filter(perfume => perfume.categoria === categoriaActual);
    actualizarPerfumes(perfumesCategoria);
}

// Configurar eventos de los controles
document.addEventListener('DOMContentLoaded', () => {
    // Cargar perfumes iniciales
    cargarPerfumesIniciales();

    // Añadir controles al HTML dinámicamente
    const main = document.querySelector('main');
    main.insertAdjacentHTML('afterbegin', `
        <div class="controles">
            <label for="precio-maximo">Precio máximo (€):</label>
            <input type="number" id="precio-maximo" min="0" step="1" placeholder="Ej: 50">
            <button id="filtrar-precio">Filtrar</button>
            <button id="ordenar-nombre">Ordenar por Nombre</button>
            <button id="ordenar-precio">Ordenar por Precio</button>
        </div>
    `);

    // Estilos básicos para los controles (los estilos están en el css)
    const style = document.createElement('style');
    
    document.head.appendChild(style);

    // Event listeners para los botones
    document.getElementById('filtrar-precio').addEventListener('click', () => {
        const maxPrecio = parseFloat(document.getElementById('precio-maximo').value) || Infinity;
        filtrarPorPrecio(maxPrecio);
    });

    document.getElementById('ordenar-nombre').addEventListener('click', ordenarPorNombre);
    document.getElementById('ordenar-precio').addEventListener('click', ordenarPorPrecio);
});

  /*                  */
 /*   Ejercicio 3    */
/*                  */

let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change', (event)=> { /*añadimos un evento que sera para cambiar al modo oscuro */
    let checked = event.target.checked;
    document.body.classList.toggle('dark');  
    if(checked==true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>'; /*cuando este en modo oscuro aparecerá un sol*/ 
        label_toggle.style.color="yellow"; /*le ponemos un color amarillo al sol*/ 
    } else {
        label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color="blueviolet";
    }
} )














/* -----------------------------CRISTIAN-----------------------------------------------*/