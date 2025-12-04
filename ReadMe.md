# 🕊️ Wedding Victor & Karina

Sitio web creado para nuestra boda, diseñado para mostrar la invitación, información del evento y un sistema sencillo de acceso para invitados mediante código personalizado.

## 📌 Características principales

* **Página de invitación** con diseño responsivo.
* **Validación de invitados** mediante código único.
* **Carga de datos desde JSON local** (`storage/guests.json`).
* **Uso de sessionStorage** para mantener la información del invitado entre páginas.
* **Sección de detalles** personalizada por invitado: nombre, acompañantes, límite de pases y mesa asignada.
* **Animaciones y estilo** basados en Bootstrap, Animate.css, Owl Carousel y estilos personalizados.
* **Compatibilidad completa** con dispositivos móviles (Android / iOS).

## 📁 Estructura del proyecto

```cmd
wedding-victor-karina/
│── css/
│── js/
│── images/
│── fonts/
│── sass/
│── storage/
│     └── guests.json
│── index.html
│── detalle.html
│── README.md

```

## ⚙️ Funcionamiento del acceso

* El usuario ingresa su **código de invitado** en `index.html`.
* El script valida:

  * Que el campo tenga al menos 4 caracteres.
  * Que el código exista dentro de `guests.json`.
* Si es válido:

  * Se guarda la información del invitado en `sessionStorage`.
  * Se redirige a `details.html`.
* `details.html` recupera los datos y muestra:

  * Nombre del invitado principal.
  * Lista de acompañantes.
  * Límite de pases.
  * Mesa asignada.

## 🚀 Tecnologías utilizadas

* HTML5 / CSS3 / JavaScript
* Bootstrap
* Animate.css
* Owl Carousel
* Boxicons
* Google Fonts

## 📦 Cómo ejecutar el proyecto

Solo necesitas abrir el proyecto con un servidor local:

Ejemplos:

* **VSCode Live Server**
* **http-server**
* **XAMPP / WAMP**

Esto es necesario para permitir la lectura del archivo JSON.

## 📝 Notas

* Los datos de invitados están centralizados en `storage/guests.json`.
* Cambios en ese archivo requieren **refrescar la página principal** para recargar los datos (normal al usar sessionStorage).
* El proyecto está pensado para ser liviano, estático y fácil de desplegar.

## 📸 Características principales

* Diseño limpio y elegante.
* Totalmente responsive.
* Sección para confirmar asistencia (RSVP).
* Soporte para código de invitado.
* Imágenes optimizadas.
* Favicon personalizado.

## 🌐 Sitio en producción

El sitio está desplegado en Netlify y disponible aquí:

🔗 **https://effervescent-basbousa-e3c92e.netlify.app/**

## ❤️ Autor

Creado con mucho cariño para nuestra boda: **Víctor & Karina**

<table>
  <tr>
    <td>
      <img src="https://github.com/vruizdev.png?size=160" width="120" style="border-radius:50%;" />
    </td>
    <td>
      <strong>Víctor Ruiz</strong><br>
      <a href="https://github.com/vruizdev">github.com/vruizdev</a><br>
      Desarrollador del proyecto.
    </td>
  </tr>
</table>
