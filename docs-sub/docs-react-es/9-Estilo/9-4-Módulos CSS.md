# Módulos CSS

Cuando trabajamos con React, uno de los desafíos más comunes es la gestión de estilos en componentes, especialmente cuando se trata de evitar conflictos de nombres de clases y mantener el código organizado. Aquí es donde los **Módulos CSS** se convierten en una herramienta invaluable. Los Módulos CSS permiten escribir estilos que son automáticamente locales al componente en el que se usan, lo que significa que no necesitamos preocuparnos por colisiones de nombres en todo nuestro proyecto.

## ¿Qué es un Módulo CSS?

Un **Módulo CSS** es simplemente un archivo `.css` que, cuando se importa en un componente de React, automáticamente genera nombres de clases únicos y específicos para ese componente. Esto permite que los estilos sean encapsulados, evitando que afecten a otros componentes, y viceversa.

### Ventajas de usar Módulos CSS

- **Encapsulación de estilos**: Los estilos se aplican solo al componente donde se importan, sin riesgo de que afecten a otros componentes.
- **Nombres de clases únicos**: No necesitas preocuparte por colisiones de nombres en todo el proyecto.
- **Mantenimiento y escalabilidad**: Facilita la organización de estilos a medida que el proyecto crece.

## Cómo usar Módulos CSS en React

Veamos un ejemplo práctico de cómo aplicar Módulos CSS en un proyecto de React.

### Paso 1: Crear el archivo del Módulo CSS

Primero, crea un archivo CSS para el componente que vas a estilizar. Por convención, el archivo debería tener el nombre del componente seguido de `.module.css`. Por ejemplo, si tu componente se llama `Boton`, el archivo de estilos se llamaría `Boton.module.css`.

```css
/* Boton.module.css */
.boton {
  background-color: #4CAF50; /* Verde */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.botonPrimario {
  background-color: #008CBA; /* Azul */
}
```

### Paso 2: Importar y aplicar los estilos en el componente

Luego, en el archivo del componente React, importa el Módulo CSS y aplica las clases como propiedades del objeto importado.

```jsx
// Boton.js
import React from 'react';
import styles from './Boton.module.css';

function Boton({ tipo, texto }) {
  // Se usa `styles.boton` para aplicar la clase `boton` del módulo CSS
  // Si se pasa el tipo "primario", se añade también la clase `botonPrimario`
  return (
    <button
      className={`${styles.boton} ${tipo === 'primario' ? styles.botonPrimario : ''}`}
    >
      {texto}
    </button>
  );
}

export default Boton;
```

### Paso 3: Usar el componente en tu aplicación

Ahora puedes usar tu componente `Boton` en cualquier parte de tu aplicación, y los estilos se aplicarán correctamente sin afectar a otros elementos.

```jsx
// App.js
import React from 'react';
import Boton from './Boton';

function App() {
  return (
    <div>
      <Boton tipo="primario" texto="Botón Primario" />
      <Boton texto="Botón Secundario" />
    </div>
  );
}

export default App;
```

### Detalles a tener en cuenta

- **Localidad de los estilos**: Recuerda que los nombres de clases generados a partir de los Módulos CSS son únicos y específicos para cada componente. Si intentas aplicar un estilo que no está definido en el Módulo CSS importado, el estilo no se aplicará.
- **Uso de clases condicionales**: Como en el ejemplo anterior, puedes combinar múltiples clases usando plantillas de cadenas o interpolaciones, lo que te permite aplicar estilos condicionalmente.

## Más información

- **Encapsulación de estilos**
- **Mantenimiento de CSS en grandes proyectos**
- **Estilos condicionales en React**
- **Optimización del rendimiento con CSS Modules**

## Resumen

Los Módulos CSS en React son una excelente manera de mantener tus estilos organizados y libres de conflictos de nombres. Te permiten encapsular los estilos en un nivel de componente, lo que asegura que los estilos aplicados no interfieran con otros componentes. Usar Módulos CSS mejora el mantenimiento y la escalabilidad de tu código, especialmente en aplicaciones grandes.