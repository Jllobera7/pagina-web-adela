## Modificaciones realizadas en los archivos HTML, CSS
Hemos vueto a "rediseñar" nuestra página web, haciendo muchos cambios, añadiendo páginas nuevas y eliminando otras.Así como volviedo a hacer los CSS y reestructurandolos y dividiendolos en más páginas.También hemos hecho muchos cambios visuales de diseño.

Previsualiza nuestra pagina web [aquí](https://jllobera7.github.io/pagina-web-adela/)

## Propósito de los Formularios

### 1. Formulario de Registro
El formulario de registro está diseñado para que los usuarios creen una cuenta en la plataforma.
También incluye una opción para aceptar las políticas de privacidad.Incluye:

- **Información Básica del Usuario:** Nombre, apellidos, correo electrónico y teléfono.
- **Fecha de Nacimiento:** Personalización de la experiencia.
- **País:** Ajustar preferencias según la ubicación.
- **Un botón** para mostrar u ocultar contraseña hecho con un Script.


  ![Screenshot_20250117_174717](https://github.com/user-attachments/assets/2de64a33-ee9a-4003-aa81-11ede941354c) ![Screenshot_20250117_174805](https://github.com/user-attachments/assets/31634d5e-f008-4f29-9221-fb92045e941b) ![Screenshot_20250117_180159](https://github.com/user-attachments/assets/531094f2-ba17-419e-955a-5e3a15c2f131)


**Según la resolución en la que se visualize la página web, se vera de diferente manera.Hemos adaptado la página web tanto como en escritorio, como en móviles y en tablets.**
---

### 2. Formulario de "Sobre Nosotros"
Este formulario está orientado a recibir retroalimentación de los usuarios sobre su experiencia con los productos y servicios de Gipsy Arome. Incluye:

- **Información Básica del Usuario:** Nombre, apellidos, correo electrónico y teléfono.
- **Preguntas Valorativas:** Satisfacción con productos, atención y calidad, puntuadas de 1 a 5 estrellas.
- **Preferencias:** Selección de tipos de perfumes favoritos.
- **Comentarios Abiertos:** Espacio para sugerencias o mensajes.

![Screenshot_20250117_174852](https://github.com/user-attachments/assets/f05d0572-2f72-4d89-a73c-afb92b00d987) ![Screenshot_20250117_174913](https://github.com/user-attachments/assets/af48b77b-d1ba-4825-9a99-5d7d691fe263) ![Screenshot_20250117_180139](https://github.com/user-attachments/assets/40c0111a-50d2-4f28-89f6-c16856a7076c)


**Según la resolución en la que se visualize la página web, se vera de diferente manera.Hemos adaptado la página web tanto como en escritorio, como en móviles y en tablets.**

---
## Inicio de Nuestra Pagina

![Screenshot_20250117_174536](https://github.com/user-attachments/assets/38caad06-8012-4c40-b766-180bb878f8a1) ![Screenshot_20250117_174613](https://github.com/user-attachments/assets/ed3dd71d-4040-4916-8f8a-6d2bd68ab28f) ![Screenshot_20250117_180122](https://github.com/user-attachments/assets/ddd6eb76-ba4d-4e09-9486-b743163e1c40)


**Según la resolución en la que se visualize la página web, se vera de diferente manera.Hemos adaptado la página web tanto como en escritorio, como en móviles y en tablets.**

---

## Explicación de Expresiones Regulares

### 1. Correo Electrónico:
```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}
```
- **Propósito:** Validar que el correo electrónico tenga un formato correcto.
- **Función:**
  - `a-zA-Z0-9._%+-`: Permite letras, números, puntos, guiones y caracteres especiales como `%` o `+` antes del símbolo `@`.
  - `@`: Marca obligatoria del correo.
  - `a-zA-Z0-9.-`: Permite letras, números, puntos y guiones para el dominio.
  - `\.[a-zA-Z]{2,4}`: Extensión del dominio de 2 a 4 caracteres.
- **Ejemplo Válido:**
  - `usuario@example.com`
  - `nombre.apellido@dominio.org`
- **Ejemplo Inválido:**
  - `usuario@com`
  - `nombre@@dominio.com`

### 2. Teléfono:
```regex
^\+?\d{1,4}?[\d\s\-]{7,15}$
```
- **Propósito:** Validar formatos de números de teléfono internacionales.
- **Función:**
  - `^\+?`: El signo `+` es opcional al principio.
  - `\d{1,4}?`: Permite de 1 a 4 dígitos como código de país.
  - `[\d\s\-]{7,15}`: Acepta de 7 a 15 caracteres, que pueden incluir dígitos, espacios o guiones.
- **Ejemplo Válido:**
  - `+34 612 345 678`
  - `123-456-7890`
- **Ejemplo Inválido:**
  - `61234`
  - `+34 (612) 345-678` (los paréntesis no son válidos).

### 3. Contraseña:
```regex
(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}
```
- **Propósito:** Garantizar contraseñas seguras.
- **Función:**
  - `(?=.*\d)`: Debe incluir al menos un dígito.
  - `(?=.*[a-z])`: Debe incluir al menos una letra minúscula.
  - `(?=.*[A-Z])`: Debe incluir al menos una letra mayúscula.
  - `(?=.*[!@#$%^&*])`: Debe incluir al menos un carácter especial.
  - `.{8,}`: Longitud mínima de 8 caracteres.
- **Ejemplo Válido:**
  - `Password1!`
  - `Gipsy@2024`
- **Ejemplo Inválido:**
  - `password`
  - `12345678`
  - `Password` (

---

## Colaboración del Equipo

### Juan
- Creación de los formularios de **login** y **registro** y sus respectivos CSS.
- Reestructuración de los archivos CSS y HTML.
- Corrección global de errores en los archivos HTML y CSS.

### Jonay
- Creación del formulario de **"Sobre Nosotros"** y su respectivo CSS.
- Corrección global de errores en los archivos HTML y CSS.

### Cristian
- Responsividad de todas las páginas.
- Corrección de errores globales en HTML y CSS.

---

## Conclusión
El equipo trabajó de manera colaborativa para desarrollar formularios funcionales y atractivos.
