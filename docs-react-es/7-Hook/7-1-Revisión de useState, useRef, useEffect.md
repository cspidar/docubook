# Revisión de useState, useRef, useEffect

Cuando trabajas con React, te encontrarás frecuentemente con tres hooks fundamentales: `useState`, `useRef`, y `useEffect`. Estos hooks son herramientas clave que te permiten gestionar el estado, interactuar con referencias a elementos del DOM, y controlar efectos secundarios en tus componentes de React. En esta sección, revisaremos cada uno de estos hooks con ejemplos claros para que puedas entender cómo y cuándo utilizarlos.

## useState: Gestión del Estado

`useState` es el hook que te permite añadir estado a un componente funcional. Esto es especialmente útil cuando necesitas que tu componente recuerde alguna información entre renderizados.

### Ejemplo Básico de useState

Imagina que estás construyendo un contador que se incrementa cada vez que haces clic en un botón:

```javascript
import React, { useState } from 'react';

function Contador() {
  // Declaración de una variable de estado llamada "contador" y una función para actualizarla
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
```

**¿Qué está pasando aquí?**
- `useState(0)` inicializa el estado `contador` con un valor de `0`.
- `setContador` es la función que usas para actualizar ese estado.
- Cada vez que el botón es clicado, `setContador` incrementa el valor de `contador`.

### Conceptos Clave
- **Inicialización del estado**: `useState` siempre debe ser llamado con un valor inicial.
- **Renderización**: Cada vez que cambias el estado, el componente se renderiza de nuevo mostrando el estado actualizado.

## useRef: Referencias a Elementos y Valores Persistentes

`useRef` se utiliza para crear referencias a elementos del DOM o para almacenar valores que quieres que persistan entre renderizados sin causar una nueva renderización del componente.

### Ejemplo Básico de useRef

Considera un caso donde quieres enfocar un input de texto automáticamente cuando se carga el componente:

```javascript
import React, { useRef, useEffect } from 'react';

function EnfocarInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Enfocar el input cuando el componente se monta
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

export default EnfocarInput;
```

**¿Qué está pasando aquí?**
- `useRef(null)` crea una referencia que inicialmente es `null`.
- `inputRef.current` accede al elemento DOM actual.
- El input es enfocado automáticamente al montar el componente gracias a `useEffect`.

### Conceptos Clave
- **Persistencia de valores**: `useRef` no causa que el componente se renderice nuevamente cuando el valor de la referencia cambia.
- **Acceso al DOM**: `useRef` es una manera común de interactuar directamente con los elementos del DOM.

## useEffect: Efectos Secundarios y Ciclo de Vida

`useEffect` se utiliza para manejar efectos secundarios en tus componentes, como operaciones de red, suscripciones, o manipulación directa del DOM que necesitan ocurrir después de que un componente se haya renderizado.

### Ejemplo Básico de useEffect

Imagina que quieres cambiar el título del documento del navegador cada vez que el contador cambia:

```javascript
import React, { useState, useEffect } from 'react';

function ContadorConTitulo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Clics: ${contador}`;
  }, [contador]); // Solo ejecutar el efecto cuando "contador" cambie

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default ContadorConTitulo;
```

**¿Qué está pasando aquí?**
- `useEffect` se ejecuta después de cada renderización, actualizando el título del documento.
- El segundo argumento `[contador]` es una lista de dependencias que indica cuándo debe ejecutarse el efecto. En este caso, solo se ejecutará cuando `contador` cambie.

### Conceptos Clave
- **Efectos dependientes**: Usa el segundo argumento de `useEffect` para controlar cuándo se ejecuta.
- **Limpieza de efectos**: Si un efecto necesita limpiar recursos (por ejemplo, cancelar una suscripción), puedes retornar una función dentro de `useEffect`.

## Más información

- **Estado y ciclo de vida en React**
- **Referencias al DOM en React**
- **Efectos secundarios y su gestión en componentes funcionales**

## Resumen

En esta sección, hemos revisado tres hooks esenciales de React: `useState` para la gestión del estado, `useRef` para mantener referencias y valores persistentes sin renderizar, y `useEffect` para manejar efectos secundarios y controlar el ciclo de vida de los componentes. Cada uno de estos hooks es fundamental para construir componentes dinámicos y reactivos, permitiéndote crear aplicaciones interactivas y eficientes.