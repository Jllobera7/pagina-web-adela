/* -----------------------------JUAN-----------------------------------------------*/




















/* -----------------------------JONAY-----------------------------------------------*/





















/* -----------------------------CRISTIAN-----------------------------------------------*/


            /*---------------------EJERCICIO-02---------------------*/
 /****************----------Seccion Hombre----------*************************** */
   // Definir valores por defecto para cada elemento
    const valoresPorDefectos = {
        descripcion01: "none",
        descripcion02: "none",
        descripcion03: "none",
        descripcion04: "none",
        descripcion05: "none"
    };

    // Asignar los valores por defecto al cargar la página
    window.onload = function () {
        for (let id in valoresPorDefectos) {
            let elemento = document.getElementById(id);
            if (elemento) {
                elemento.style.display = valoresPorDefectos[id];
            }
        }
    };

    // Función para alternar la visibilidad
    function toggleDescripcion(id) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.style.display = (elemento.style.display === "none") ? "grid" : "none";
        }
    }

    /****************----------Seccion Mujer----------*************************** */
     // Configuración de valores por defecto
     const valoresPorDefecto = {
        descripcion06: "none",
        descripcion07: "none",
        descripcion08: "none",
        descripcion09: "none",
        descripcion10: "none"
    };

    // Asigna los valores por defecto al cargar la página
    window.onload = function () {
        for (let id in valoresPorDefecto) {
            let elemento = document.getElementById(id);
            if (elemento) {
                elemento.style.display = valoresPorDefecto[id];
            }
        }
    };

    // Función para alternar visibilidad
    function toggleDescripcion(id) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.style.display = (elemento.style.display === "none") ? "grid" : "none";
        }
    }


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
        
      
            
            
      

     


      
  

               
          
            


    
           
            
           

         
            
                
            

            






