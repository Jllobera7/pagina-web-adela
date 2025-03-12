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

/* Tarea 1*/
// Array de objetos con datos de perfumes 
const perfumes = [
    { id: 1, nombre: "9PM de Afnan Perfumes", precio: 48.00, categoria: "Hombre", descripcion: "Dentro de la familia olfativa Oriental Vainilla. Diseñada para hombres modernos y sofisticados." },
    { id: 2, nombre: "Aether de French Avenue", precio: 51.00, categoria: "Hombre", descripcion: "Es un extracto de perfume de alta perfumería, elaborado con ingredientes de la calidad de la perfumería niche" },
    { id: 3, nombre: "Hawas Ice for Him de Rasasi", precio: 79.00, categoria: "Hombre", descripcion: "Es una fragancia  para aquellos que buscan una esencia que combine frescura, sofisticación y un toque de profundidad" },
    { id: 4, nombre: "Al Nashama Caprice de Lattafa Perfumes", precio: 40.00, categoria: "Hombre", descripcion: "Es una fragancia unisex que destaca por su equilibrio entre frescura y profundidad" },
    { id: 5, nombre: "Asad de Lattafa Perfumes", precio: 32.00, categoria: "Hombre", descripcion: "Asad de Lattafa Perfumes es una fragancia de la familia olfativa Ámbar para hombres. Asad se lanzó en 2021" },
    { id: 6, nombre: "9AM de Afnan Perfumes", precio: 48.00, categoria: "Mujer", descripcion: "Diseñada para la mujer que busca frescura, dinamismo y una sofisticación sutil en cada momento de su rutina" },
    { id: 7, nombre: "Magical Moment Fantasy de Le Chameau Emper", precio: 85.00, categoria: "Mujer", descripcion: "Es una fragancia unisex excepcionalmente exclusiva que evoca puro lujo" },
    { id: 8, nombre: "Bint Hooran Rose de Ard Al Zaafaran", precio: 38.00, categoria: "Mujer", descripcion: "Es una fragancia femenina exquisita que despliega una sinfonía de aromas envolventes" },
    { id: 9, nombre: "Luscious de French Avenue", precio: 48.00, categoria: "Mujer", descripcion: "Dulce y sofisticado, con una fusión de vainilla, jazmín y almizcle." },
    { id: 10, nombre: "Irida de French Avenue", precio: 51.00, categoria: "Mujer", descripcion: "Es un extracto de perfume de alta perfumería, elaborado con ingredientes de la calidad de la perfumería niche" }
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
                <button class="toggle-descripcion" onclick="toggleDescripcion(${perfume.id})">Ver descripción</button>
                <div id="desc-${perfume.id}" class="descripcion" style="display: none;">
                    <p>${perfume.descripcion}</p>
                </div>
            </article>`;
}
// Función para mostrar/ocultar la descripción
function toggleDescripcion(id) {
    const descripcion = document.getElementById(`desc-${id}`);
    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
    } else {
        descripcion.style.display = "none";
    }
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



/*---------------------EJERCICIO-04---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const botonMostrar = document.getElementById("mostrarComentarios");
    const seccionComentarios = document.getElementById("seccionComentarios");
    const formulario = document.getElementById("formularioComentario");
    const listaComentarios = document.getElementById("listaComentarios");
    const inputComentario = document.getElementById("nuevoComentario");

    // Verifica que los elementos existen antes de agregar eventos
    if (botonMostrar && seccionComentarios) {
        botonMostrar.addEventListener("click", function () {
            seccionComentarios.classList.toggle("hidden"); // Alternar visibilidad
        });
    }

    if (formulario && listaComentarios && inputComentario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            agregarComentario(inputComentario.value.trim());
        });
    }

    function agregarComentario(texto) {
        if (!texto) return; // Evita comentarios vacíos

        const nuevoElemento = document.createElement("li");
        nuevoElemento.className = "comment";
        nuevoElemento.textContent = texto;
        
        listaComentarios.appendChild(nuevoElemento);
        inputComentario.value = "";
    }
});



  document.addEventListener("DOMContentLoaded", function () {
    const botonMostrar = document.getElementById("mostrarComentarios01");
    const seccionComentarios = document.getElementById("seccionComentarios01");
    const formulario = document.getElementById("formularioComentario01");
    const listaComentarios = document.getElementById("listaComentarios01");
    const inputComentario = document.getElementById("nuevoComentario01");

    // Verifica que los elementos existen antes de agregar eventos
    if (botonMostrar && seccionComentarios) {
        botonMostrar.addEventListener("click", function () {
            seccionComentarios.classList.toggle("hidden01"); // Alternar visibilidad
        });
    }

    if (formulario && listaComentarios && inputComentario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            agregarComentario(inputComentario.value.trim());
        });
    }

    function agregarComentario(texto) {
        if (!texto) return; // Evita comentarios vacíos

        const nuevoElemento = document.createElement("li");
        nuevoElemento.className = "comment01";
        nuevoElemento.textContent = texto;
        
        listaComentarios.appendChild(nuevoElemento);
        inputComentario.value = "";
    }
});


     /*---------------------EJERCICIO-08---------------------*/

 /*---------------------Validacion de los campos de la pagina de login---------------------*/
 document.getElementById("formulario01")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let correo = document.getElementById("correo01")?.value.trim();
    let contraseña = document.getElementById("contraseña01")?.value;
    let errores = [];

    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) errores.push("El correo electrónico no es válido.");
    
    let contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!contraseñaRegex.test(contraseña)) {
        errores.push("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
    }
    
    if (errores.length > 0) {
        alert("Errores:\n" + errores.join("\n"));
    } else {
        alert("Inicio de sesión exitoso.");
        this.submit();
    }
});

function togglePassword(id, button) {
    let input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        button.textContent = "🙈";
    } else {
        input.type = "password";
        button.textContent = "👁️";
    }
}

        /*---------------------Validacion de los campos de la pagina de Registro---------------------*/
       
        document.getElementById("formulario").addEventListener("submit", function (event) {
            event.preventDefault();
        
            // Expresiones regulares
            const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Solo letras y espacios
            const telefonoRegex = /^[+0-9]+$/; // Solo números
            const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Formato de email válido
        
            // Obtener valores
            let nombre = document.getElementById("nombre").value.trim();
            let apellido = document.getElementById("apellido").value.trim();
            let telefono = document.getElementById("telefono").value.trim();
            let fechaNacimiento = document.getElementById("fecha_nacimiento").value;
            let pais = document.getElementById("pais").value;
            let correo = document.getElementById("correo").value.trim();
            let contraseña = document.getElementById("contraseña").value;
            let confirmarContraseña = document.getElementById("confirmar_contraseña").value;
            let politicas = document.getElementById("politicas").checked;
        
            let fechaActual = new Date().toISOString().split("T")[0];
            let fechaMinima = "1930-01-01";
            // Array para almacenar errores
            let errores = [];
        
            // Validaciones
            if (!nombreApellidoRegex.test(nombre)) {
                errores.push("El nombre solo puede contener letras y espacios.");
            }
        
            if (!nombreApellidoRegex.test(apellido)) {
                errores.push("El apellido solo puede contener letras y espacios.");
            }
        
            if (!telefonoRegex.test(telefono)) {
                errores.push("El teléfono solo puede contener números.");
            }
        
            if (!correoRegex.test(correo)) {
                errores.push("El correo electrónico no es válido.");
            }
        
            if (contraseña !== confirmarContraseña) {
                errores.push("Las contraseñas no coinciden.");
            }
        
            if (!politicas) {
                errores.push("Debes aceptar las políticas de privacidad.");
            }
            
            if (!fechaNacimiento) {
                errores.push("Debes ingresar una fecha de nacimiento.");
            } else if (fechaNacimiento > fechaActual) {
                errores.push("La fecha de nacimiento no puede ser una fecha futura.");
            } else if (fechaNacimiento < fechaMinima) {
                errores.push("La fecha de nacimiento no puede ser anterior al 01/01/1930.");
            }
        
            // Mostrar errores o enviar formulario
            if (errores.length > 0) {
                alert(errores.join("\n"));
            } else {
                alert("Formulario enviado correctamente.");
                this.submit(); // Enviar el formulario
            }
        });
        
        // Función para mostrar/ocultar contraseña
        function togglePassword(id, button) {
            let input = document.getElementById(id);
            if (input.type === "password") {
                input.type = "text";
                button.textContent = "🙈";
            } else {
                input.type = "password";
                button.textContent = "👁️";
            }
        }


        
      
            
            
      

     


      
  

               
          
            


    
           
            
           

         
            
                
            

            






