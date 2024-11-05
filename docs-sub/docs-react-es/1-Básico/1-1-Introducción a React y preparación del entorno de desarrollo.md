# Introducción a React y preparación del entorno de desarrollo

React es una biblioteca de JavaScript que nos permite construir interfaces de usuario de manera eficiente y manejable. Fue desarrollada por Facebook y se ha convertido en una de las herramientas más populares para el desarrollo de aplicaciones web modernas. Una de sus características más destacadas es su capacidad para construir componentes reutilizables, lo que facilita la creación y mantenimiento de proyectos grandes y complejos.

## ¿Qué es React?

React es una **biblioteca** para construir **interfaces de usuario**. A diferencia de otros marcos de trabajo, React se enfoca en la construcción de componentes que puedes combinar para crear aplicaciones interactivas. Estos componentes son como bloques de construcción que puedes reutilizar, lo que hace que el desarrollo sea más ágil y menos propenso a errores.

### Ejemplo básico de un componente en React

```jsx
// Definimos un componente simple que muestra un saludo
function Saludo() {
  return <h1>¡Hola, mundo!</h1>; // Retornamos un encabezado con el saludo
}

// Usamos el componente en nuestra aplicación
function App() {
  return (
    <div>
      <Saludo /> {/* Aquí usamos el componente Saludo */}
    </div>
  );
}

export default App; // Exportamos el componente para usarlo en otros archivos
```

En este ejemplo, `Saludo` es un **componente funcional** que retorna un encabezado (`<h1>`) con un mensaje. Luego, usamos este componente dentro de otro llamado `App`. **Cada componente en React debe retornar un elemento JSX** (que veremos más adelante en detalle), que es la forma en la que React define el contenido que se mostrará en la pantalla.

## Preparación del entorno de desarrollo

Para empezar a trabajar con React, necesitamos preparar nuestro entorno de desarrollo. A continuación, te guiaré paso a paso en la configuración.

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

1. **Node.js**: Es un entorno de ejecución para JavaScript que también incluye npm, el gestor de paquetes que usaremos para instalar React. Puedes descargar Node.js desde [su sitio oficial](https://nodejs.org/).

2. **Editor de código**: Aunque puedes usar cualquier editor de texto, te recomiendo **Visual Studio Code** por sus características amigables con el desarrollo en JavaScript y React. Puedes descargarlo desde [su sitio web](https://code.visualstudio.com/).

### Creación de una nueva aplicación React

La forma más sencilla de crear un nuevo proyecto en React es utilizando la herramienta `create-react-app`, que configura por ti todo lo necesario para empezar a programar.

1. **Abre una terminal** y ejecuta el siguiente comando para instalar `create-react-app`:

   ```bash
   npx create-react-app mi-primera-app
   ```

   Aquí, `mi-primera-app` es el nombre de tu proyecto. Puedes cambiarlo por cualquier nombre que prefieras.

2. **Navega al directorio del proyecto**:

   ```bash
   cd mi-primera-app
   ```

3. **Inicia la aplicación**:

   ```bash
   npm start
   ```

   Este comando iniciará un servidor de desarrollo y abrirá tu nueva aplicación en el navegador. Por defecto, se abrirá en `http://localhost:3000`.

### Explorando la estructura del proyecto

Después de crear tu aplicación React, verás que se ha generado una estructura de carpetas y archivos. Vamos a explorar brevemente los más importantes:

- **public/**: Contiene el archivo `index.html` que es el punto de entrada de tu aplicación. React se montará dentro de este archivo.

- **src/**: Aquí es donde se encuentra todo el código de tu aplicación. Los archivos más relevantes son:
  - `index.js`: El archivo donde React se inicializa y renderiza tu componente principal (`App`).
  - `App.js`: Este es el componente principal que se genera por defecto y desde donde se compone tu aplicación.

### Modificando el primer componente

Vamos a hacer una pequeña modificación para que veas cómo React actualiza la interfaz en tiempo real.

1. Abre el archivo `src/App.js`.
2. Cambia el contenido de `return` en el componente `App`:

   ```jsx
   function App() {
     return (
       <div>
         <h1>Mi primera aplicación en React</h1>
         <p>¡Estoy aprendiendo a construir interfaces con React!</p>
       </div>
     );
   }
   ```

3. Guarda los cambios y observa cómo tu navegador se actualiza automáticamente con el nuevo contenido.

## Más información

- **JSX**: Un lenguaje de marcado que combina JavaScript con HTML.
- **Componentes**: Bloques reutilizables que definen partes de la interfaz de usuario en React.
- **Node.js**: Entorno de ejecución de JavaScript fuera del navegador.
- **npx**: Comando de npm que ejecuta paquetes sin necesidad de instalarlos globalmente.

## Resumen

React es una poderosa herramienta para construir interfaces de usuario a partir de componentes reutilizables. Preparar tu entorno de desarrollo es sencillo con `create-react-app`, que te permite comenzar a programar de inmediato. Entender la estructura básica de un proyecto en React es crucial para empezar a desarrollar aplicaciones web dinámicas y modernas.