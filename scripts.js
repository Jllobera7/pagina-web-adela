/* -----------------------------JUAN-----------------------------------------------*/
let indice = 0; // Índice actual del carrusel

function moverCarrusel(direccion) {
    const contenedor = document.querySelector('.carrusel-contenedor');
    const items = document.querySelectorAll('.carrusel img');
    const totalItems = items.length;
    const imagenAncho = items[0].offsetWidth; // Debería ser 200px
    const contenedorAncho = document.querySelector('.carrusel').offsetWidth; // Debería ser 1200px en escritorio
    const visibles = Math.floor(contenedorAncho / imagenAncho); // Número exacto de imágenes visibles (6 en escritorio)

    // Calcula el nuevo índice
    indice += direccion;

    // Ajusta el índice para el ciclo y límites
    if (indice < 0) {
        indice = totalItems - visibles; // Va al último conjunto visible
    } else if (indice > totalItems - visibles) {
        indice = 0; // Vuelve al inicio
    }

    // Asegura que el índice esté dentro de los límites
    indice = Math.max(0, Math.min(indice, totalItems - visibles));

    // Calcula el desplazamiento exacto basado en el índice y el ancho de la imagen
    const desplazamiento = -indice * imagenAncho;

    // Aplica el desplazamiento
    contenedor.style.transform = `translateX(${desplazamiento}px)`;

    // Depuración: Mostrar valores en consola para verificar
    console.log({
        indice,
        visibles,
        totalItems,
        imagenAncho,
        contenedorAncho,
        desplazamiento
    });
}

// Recalcular desplazamiento al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    const items = document.querySelectorAll('.carrusel img');
    const contenedorAncho = document.querySelector('.carrusel').offsetWidth;
    const imagenAncho = items[0].offsetWidth;
    const visibles = Math.floor(contenedorAncho / imagenAncho);
    indice = Math.min(indice, items.length - visibles);
    moverCarrusel(0);
});

function ampliarImagen(img) {
    const todasLasImagenes = document.querySelectorAll('.carrusel img');
    todasLasImagenes.forEach(imagen => {
        if (imagen !== img) {
            imagen.classList.remove('agrandada');
        }
    });
    img.classList.toggle('agrandada');
}


/* Ejercicio 5
 He capturado el h1 del texto "Gipsy Arome" del header en una variable y he añadido un evento 
 al pasar el ratón por encima para cambiar el color y aumentar ligeramente el tamaño.
Al quitar el ratón, el color y tamaño vuelven a la normalidad.
*/


let titulo = document.getElementById('gypsy'); // Captura el h1 del header

// Evento al pasar el mouse
titulo.addEventListener('mouseover', function() {
    titulo.style.color ='#285ae694'; // Tono ámbar cálido
    titulo.style.transform = 'scale(1.03)'; // Ligerísimo aumento
    titulo.style.transition = 'all 0.4s'; 

});

// Evento al quitar el mouse
titulo.addEventListener('mouseout', function() {
    titulo.style.color = ''; // Restaura el color por defecto del h1
    titulo.style.transform = ''; // Restaura la escala por defecto
});
/*-------------------------------------------------------------------------------------------------*/ 
document.getElementById('header').addEventListener('click', function(event) {
    
    // Reproducir sonido de pulverización
    let sonido = new Audio('../Audios/spray_perfume.mp3'); // Sonido de spray
    sonido.play();

    let sonidos = new Audio('Audios/spray_perfume.mp3'); // Sonido de spray
    sonidos.play();

    // Crear más partículas con un radio más grande
    for (let i = 0; i < 50; i++) { // Aumentamos la cantidad de partículas
        crearParticula(event.clientX, event.clientY);
    }
});

function crearParticula(x, y) {
    let particula = document.createElement('span');
    document.body.appendChild(particula);
    
    // Estilos en JavaScript para la partícula
    let size = Math.random() * 15 + 4; // Tamaño aleatorio entre 4px y 12px
    Object.assign(particula.style, {
        position: "absolute",
        width: size + 'px',
        height: size + 'px',
        background: `#285ae694`, 
        borderRadius: "100%",
        left: x + 'px',
        top: y + 'px',
        transition: "transform 1s ease-out, opacity 1s",
    });

    // Movimiento aleatorio más grande
    let angle = Math.random() * 2 * Math.PI; // Dirección aleatoria
    let speed = Math.random() * 100 + 50; // Más dispersión
    let translateX = Math.cos(angle) * speed;
    let translateY = Math.sin(angle) * speed;

    setTimeout(() => {
        particula.style.transform = `translate(${translateX}px, ${translateY}px) scale(0)`;
        particula.style.opacity = "0";
    }, 10);

    // Eliminar la partícula después de la animación
    setTimeout(() => {
        particula.remove();
    }, 1000);
}








/* -----------------------------JONAY-----------------------------------------------*/





















/* -----------------------------CRISTIAN-----------------------------------------------*/