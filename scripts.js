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
        document.getElementById("formulario").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let nombre = document.getElementById("nombre").value.trim();
            let apellido = document.getElementById("apellido").value.trim();
            let telefono = document.getElementById("telefono").value.trim();
            let fechaNacimiento = document.getElementById("fecha_nacimiento").value;
            let pais = document.getElementById("pais").value;
            let correo = document.getElementById("correo").value.trim();
            let contraseña = document.getElementById("contraseña").value;
            let confirmarContraseña = document.getElementById("confirmar_contraseña").value;
            let politicas = document.getElementById("politicas").checked;
        
            let errores = [];
        
            if (nombre === "") errores.push("El campo 'Nombre' es obligatorio.");
            if (apellido === "") errores.push("El campo 'Apellido' es obligatorio.");
            
            let telefonoRegex = /^\+?[0-9\s\-]{7,15}$/;
            if (!telefonoRegex.test(telefono)) errores.push("El número de teléfono no es válido.");
        
            if (fechaNacimiento === "") errores.push("Debe seleccionar una fecha de nacimiento.");
            
            if (pais === "") errores.push("Debe seleccionar un país.");
        
            let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!correoRegex.test(correo)) errores.push("El correo electrónico no es válido.");
            
            let contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!contraseñaRegex.test(contraseña)) {
                errores.push("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
            }
            
            if (contraseña !== confirmarContraseña) {
                errores.push("Las contraseñas no coinciden.");
            }
            
            if (!politicas) {
                errores.push("Debe aceptar las políticas de privacidad.");
            }
            
            if (errores.length > 0) {
                alert("Errores:\n" + errores.join("\n"));
            } else {
                alert("Formulario enviado correctamente.");
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
        
        
       
      
            
            
      

     /*---------------------EJERCICIO-04---------------------*/
        
            document.getElementById("mostrarComentarios").addEventListener("click", function(){
                const seccion = document.getElementById("seccionComentarios");
                seccion.classList.toggle("hidden");
              });
          
              document.getElementById("formularioComentario").addEventListener("submit", function(event){
                event.preventDefault(); 
                
                const input = document.getElementById("nuevoComentario");
                const texto = input.value.trim();
                
                if (texto !== "") {
                  
                  const nuevoElemento = document.createElement("li");
                  nuevoElemento.className = "comment";
                  nuevoElemento.textContent = texto;
                  
                  document.getElementById("listaComentarios").appendChild(nuevoElemento);
                  
                  input.value = "";
                }
              });


      
  

               
          
            


    
           
            
           

         
            
                
            

            






