# Styled-Components

Styled-Components es una librería muy popular en el ecosistema de React que permite escribir estilos CSS directamente en los componentes, utilizando una sintaxis que combina JavaScript y CSS. Este enfoque, conocido como CSS-in-JS, simplifica la gestión de estilos al asociar los estilos directamente con los componentes, evitando conflictos globales de CSS y facilitando la creación de interfaces más predecibles y modulares.

## ¿Qué son los Styled-Components?

Styled-Components permite definir componentes de React con estilos embebidos en ellos. Estos estilos se definen utilizando plantillas literales de ES6, lo que significa que puedes escribir CSS dentro de una cadena de texto especial, y luego usarla como un componente de React.

### Ejemplo básico

Aquí tienes un ejemplo simple de cómo utilizar `styled-components` para crear un botón con estilo:

```javascript
// Importamos la librería styled-components
import styled from 'styled-components';

// Definimos un botón con estilos específicos
const BotonEstilizado = styled.button`
  background-color: #6200ea; /* Color de fondo */
  color: white; /* Color del texto */
  padding: 10px 20px; /* Espaciado interno del botón */
  border: none; /* Sin borde */
  border-radius: 5px; /* Esquinas redondeadas */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  font-size: 16px; /* Tamaño de la fuente */
  
  /* Estilo para el estado de hover (cuando el usuario pasa el cursor sobre el botón) */
  &:hover {
    background-color: #3700b3; /* Cambia el color de fondo al hacer hover */
  }
`;

// Uso del componente estilizado en una aplicación
function App() {
  return (
    <div>
      {/* Aquí usamos nuestro botón estilizado como cualquier otro componente */}
      <BotonEstilizado>Haz clic aquí</BotonEstilizado>
    </div>
  );
}

export default App;
```

### ¿Qué hace especial a Styled-Components?

1. **Encapsulamiento de estilos**: Cada componente tiene sus propios estilos, lo que evita que estos se filtren o afecten a otros elementos de la página.
2. **Propiedades dinámicas**: Puedes pasar props a tus componentes estilizados para cambiar dinámicamente sus estilos.
3. **Reutilización de estilos**: Es fácil crear componentes base con estilos compartidos y extenderlos para crear variaciones.

### Ejemplo con props dinámicos

Veamos cómo se pueden utilizar las `props` para cambiar los estilos de un componente:

```javascript
// Definimos un botón que cambia su color basado en una prop
const BotonPersonalizado = styled.button`
  background-color: ${(props) => props.primary ? '#6200ea' : 'white'}; /* Color de fondo basado en la prop "primary" */
  color: ${(props) => props.primary ? 'white' : '#6200ea'}; /* Color del texto basado en la prop "primary" */
  padding: 10px 20px;
  border: 2px solid #6200ea; /* Borde de color fijo */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: ${(props) => props.primary ? '#3700b3' : '#e1bee7'}; /* Cambio de color en hover */
  }
`;

function App() {
  return (
    <div>
      {/* Botón primario con estilos diferentes */}
      <BotonPersonalizado primary>Botón Primario</BotonPersonalizado>
      {/* Botón secundario */}
      <BotonPersonalizado>Botón Secundario</BotonPersonalizado>
    </div>
  );
}

export default App;
```

En este ejemplo, el botón cambia de color según la prop `primary` que se le pase, permitiendo una mayor flexibilidad y personalización.

## Ventajas de usar Styled-Components

- **Modularidad**: Al encapsular los estilos en los componentes, es más fácil mantener y escalar las aplicaciones.
- **Eliminación de conflictos de nombres**: No tienes que preocuparte por que los estilos se sobrescriban accidentalmente, como ocurre a veces con el CSS tradicional.
- **Flexibilidad y personalización**: Los estilos pueden depender de las `props` que pasas al componente, lo que permite crear componentes altamente reutilizables y personalizables.

## Más información

- **CSS-in-JS**: Concepto detrás de Styled-Components y otras librerías similares.
- **Props en Styled-Components**: Cómo usar props para crear estilos dinámicos.
- **Extendiendo componentes**: Técnicas para reutilizar y extender estilos en Styled-Components.
- **Temas en Styled-Components**: Uso de themes para manejar estilos globales en la aplicación.

## Resumen

Styled-Components es una poderosa herramienta en React que permite escribir estilos CSS directamente dentro de los componentes usando JavaScript. Este enfoque facilita la modularidad, elimina conflictos de estilos y ofrece una manera flexible de crear interfaces de usuario. Los ejemplos muestran cómo definir componentes estilizados y personalizarlos con `props`, destacando la simplicidad y el poder de esta librería.