/* ======================================================================================*/
/* ==================================JUAN================================================*/
/* ======================================================================================*/

/*-Ejercicio 5-------------------------------------------------------------------------------
 He capturado el h1 del texto "Gipsy Arome" del header en una variable y he añadido un evento 
 al pasar el ratón por encima para cambiar el color y aumentar ligeramente el tamaño.
 Al quitar el ratón, el color y tamaño vuelven a la normalidad.
---------------------------------------------------------------------------------------------*/


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


/*-----------------------------BONUS EXTRA-----------------------------------------
-------------PULVERIZACION VSUAL Y SONORA EN HEADER AL HACER CLICK----------------*/ 


document.getElementById('header').addEventListener('click', function(event) {  /*Aqui creo el evento al hacer click en el header*/
    
    let sonido = new Audio(`${BASE_PATH}Audios/spray_perfume.mp3`);
    sonido.play();

    // Crear más partículas con un radio más grande
    for (let i = 0; i < 50; i++) { // Aumentamos la cantidad de partículas
        crearParticula(event.clientX, event.clientY);
    }
});


/* Creacion de particulas  */
function crearParticula(x, y) {
    let particula = document.createElement('span');
    document.body.appendChild(particula);

    // Tamaño aleatorio entre 4px y 19px
    let size = Math.random() * 15 + 4;
    particula.classList.add('particula');
    particula.style.width = size + 'px';
    particula.style.height = size + 'px';
    particula.style.left = x + 'px';
    particula.style.top = y + 'px';

    // Movimiento aleatorio más grande
    let angle = Math.random() * 2 * Math.PI; // Dirección aleatoria
    let speed = Math.random() * 100 + 50; // Más dispersión
    let translateX = Math.cos(angle) * speed;
    let translateY = Math.sin(angle) * speed;

    // Usar variables CSS para la animación
    particula.style.setProperty('--translateX', `${translateX}px`);
    particula.style.setProperty('--translateY', `${translateY}px`);

    // Activar la animación
    setTimeout(() => {
        particula.classList.add('animar');
    }, 10);

    // Eliminar la partícula después de la animación
    setTimeout(() => {
        particula.remove();
    }, 1000);
}

/*-Ejercicio 6-------------------------------------------------------------------------------
 He creado un carrusel de imagenes de perfumes en el footer de la pagina principal 
 con botones de navegación para avanzar y retroceder.
 He añadido un evento a los botones para mover el carrusel en la dirección correspondiente.
---------------------------------------------------------------------------------------------*/

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

/*-Ejercicio 7-------------------------------------------------------------------------------
 He creado una función para ampliar una imagen del carrusel al hacer clic en ella.
 La imagen ampliada se reduce al hacer clic en otra imagen del carrusel o en ella misma.
---------------------------------------------------------------------------------------------*/

function ampliarImagen(img) {
    const todasLasImagenes = document.querySelectorAll('.carrusel img');
    todasLasImagenes.forEach(imagen => {
        if (imagen !== img) {
            imagen.classList.remove('agrandada');
        }
    });
    img.classList.toggle('agrandada');
}





/* -----------------------------JONAY-----------------------------------------------*/





















/* -----------------------------CRISTIAN-----------------------------------------------*/