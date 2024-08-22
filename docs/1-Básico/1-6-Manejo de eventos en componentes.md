# Manejo de eventos en componentes

Cuando trabajamos con React, uno de los aspectos más importantes es el manejo de eventos dentro de nuestros componentes. Los eventos en React funcionan de manera similar a los eventos en el DOM (Document Object Model) tradicional, pero con algunas diferencias clave que hacen que sean más fáciles de manejar y comprender.

## ¿Qué es un evento?

Un evento es cualquier interacción que ocurre en la interfaz de usuario, como un clic de botón, un cambio en un campo de texto, o el envío de un formulario. En React, podemos manejar estos eventos de manera declarativa, lo que significa que simplemente le decimos a React qué hacer cuando ocurre un evento, y React se encarga de todo lo demás.

### Ejemplo básico: Manejo de un clic de botón

Supongamos que queremos manejar un evento de clic en un botón. Primero, necesitamos definir una función que se ejecutará cuando el usuario haga clic en el botón. Luego, conectamos esa función al botón utilizando la sintaxis de React.

```jsx
import React, { useState } from 'react';

function ContadorDeClics() {
  // Definimos un estado local para llevar la cuenta de los clics
  const [contador, setContador] = useState(0);

  // Función que se ejecuta cuando el botón es clicado
  const manejarClic = () => {
    setContador(contador + 1); // Actualizamos el contador sumando 1
  };

  return (
    <div>
      {/* Mostramos el número de clics */}
      <p>Has hecho clic {contador} veces.</p>
      {/* Botón que maneja el evento de clic */}
      <button onClick={manejarClic}>
        ¡Haz clic aquí!
      </button>
    </div>
  );
}

export default ContadorDeClics;
```

### ¿Qué sucede aquí?

1. **Definimos una función de evento:** En este caso, `manejarClic` es una función que se encarga de incrementar el contador cada vez que se hace clic en el botón.

2. **Conectamos la función al evento:** Utilizamos el atributo `onClick` para conectar nuestro botón con la función `manejarClic`. Este es un patrón común para todos los eventos en React (por ejemplo, `onChange` para cambios en campos de texto, `onSubmit` para el envío de formularios, etc.).

3. **Manejamos el estado:** Usamos `useState` para almacenar el número de clics. Cada vez que el usuario hace clic, actualizamos el estado y React vuelve a renderizar el componente, mostrando el nuevo valor.

## Eventos comunes en React

### Cambios en campos de texto

Otro evento común es manejar cambios en campos de texto. Por ejemplo, podemos querer capturar lo que el usuario escribe en un cuadro de texto en tiempo real.

```jsx
import React, { useState } from 'react';

function CampoDeTexto() {
  const [texto, setTexto] = useState('');

  const manejarCambio = (evento) => {
    setTexto(evento.target.value); // Actualizamos el estado con el valor del campo de texto
  };

  return (
    <div>
      <input 
        type="text" 
        value={texto} 
        onChange={manejarCambio} 
        placeholder="Escribe algo..." 
      />
      <p>Texto introducido: {texto}</p>
    </div>
  );
}

export default CampoDeTexto;
```

### Detalles clave sobre el manejo de eventos en React

- **Sintaxis camelCase:** A diferencia de HTML donde los eventos se escriben en minúsculas (por ejemplo, `onclick`), en React los eventos utilizan camelCase (`onClick`).
- **Funciones como manejadores de eventos:** Debes pasar una referencia a la función como manejador de eventos, no debes invocar la función directamente. Por ejemplo, `onClick={manejarClic}` es correcto, mientras que `onClick={manejarClic()}` no lo es, ya que esto ejecutaría la función inmediatamente en lugar de pasarla como referencia.
- **Eventos sintéticos:** React utiliza un sistema de eventos sintéticos que se basa en el estándar de eventos del DOM, pero los envuelve en un contenedor para asegurar la compatibilidad entre diferentes navegadores y mejorar el rendimiento.

## Más información

- Eventos sintéticos en React
- Estado y manejo de eventos
- Componentes funcionales y eventos

## Resumen

El manejo de eventos en React permite interactuar con los usuarios de manera eficiente. Utilizando funciones de manejo de eventos y la sintaxis de React, podemos crear aplicaciones interactivas y dinámicas con facilidad. Es esencial comprender cómo conectar correctamente las funciones a los eventos y manejar el estado asociado para desarrollar aplicaciones React robustas y fáciles de mantener.