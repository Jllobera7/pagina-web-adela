/* -----------------------------JUAN-----------------------------------------------*/
let indice = 0; // Índice actual del carrusel

function moverCarrusel(direccion) {
    const contenedor = document.querySelector('.carrusel-contenedor');
    const items = document.querySelectorAll('.carrusel img');
    const totalItems = items.length;
    const imagenAncho = items[0].offsetWidth; // 200px, según el CSS
    const contenedorAncho = document.querySelector('.carrusel').offsetWidth;
    const visibles = Math.floor(contenedorAncho / imagenAncho); // Calcula imágenes visibles

    // Calcula el nuevo índice
    indice += direccion;

    // Ajusta el índice para el ciclo
    if (indice < 0) {
        indice = totalItems - visibles; // Vuelve al final visible
    } else if (indice > totalItems - visibles) {
        indice = 0; // Vuelve al inicio
    }

    // Calcula el desplazamiento
    const desplazamiento = -indice * imagenAncho;
    contenedor.style.transform = `translateX(${desplazamiento}px)`;
}

// Conectar los botones
document.querySelector('.boton-carrusel.izquierda').addEventListener('click', () => moverCarrusel(-1));
document.querySelector('.boton-carrusel.derecha').addEventListener('click', () => moverCarrusel(1));

// Recalcular desplazamiento al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    moverCarrusel(0); // Refresca la posición actual sin cambiar el índice
});

function ampliarImagen(img) {
    // Crear el modal y elementos
    const modal = document.createElement('div');
    const imagenGrande = document.createElement('img');
    const botonCerrar = document.createElement('span');

    // Asignar clases en lugar de estilos en línea
    modal.classList.add('modal');
    imagenGrande.classList.add('imagen-grande');
    botonCerrar.classList.add('boton-cerrar');

    // Configurar la imagen ampliada
    imagenGrande.src = img.src;
    imagenGrande.alt = img.alt;

    // Agregar elementos al modal
    modal.appendChild(imagenGrande);
    modal.appendChild(botonCerrar);
    document.body.appendChild(modal);

    // Cerrar modal al hacer clic en el botón o el fondo
    const cerrar = () => document.body.removeChild(modal);
    botonCerrar.onclick = cerrar;
    modal.onclick = (e) => e.target === modal && cerrar();
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