# Introducción a useRef y uso de variables de componente en lugar de useState

En el desarrollo con React, **`useState`** es una herramienta fundamental para gestionar el estado de un componente, pero hay situaciones en las que otra herramienta llamada **`useRef`** puede ser más adecuada. En esta lección, vamos a explorar **`useRef`**, entendiendo cómo y cuándo usarlo, y por qué, en ciertos casos, es preferible al uso de **`useState`**.

## ¿Qué es `useRef`?

**`useRef`** es un Hook en React que te permite crear una referencia mutable que persiste entre renderizados. Esta referencia puede ser utilizada para acceder directamente a elementos del DOM o para guardar valores que no necesitan provocar un re-renderizado del componente cuando cambian.

### ¿Cómo funciona `useRef`?

Cuando usas **`useRef`**, obtienes un objeto con una propiedad `.current` que puedes modificar sin causar un re-renderizado del componente. Este comportamiento lo diferencia de **`useState`**, que provoca un re-renderizado cada vez que su valor cambia.

Veamos un ejemplo simple para ilustrar su uso:

```jsx
import React, { useRef, useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // Estado para el contador
  const renders = useRef(0); // Referencia para contar renderizados

  renders.current++; // Incrementa el contador de renderizados en cada render

  return (
    <div>
      <p>Contador: {contador}</p>
      <p>Renderizado {renders.current} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
    </div>
  );
}

export default Contador;
```

### Explicación del código:

1. **`useState`** se utiliza para gestionar el valor del contador, que cambia cuando se hace clic en el botón.
2. **`useRef`** se utiliza para contar cuántas veces se ha renderizado el componente. A diferencia de `useState`, modificar `renders.current` no provoca un re-renderizado, lo que es útil cuando solo necesitas almacenar un valor entre renderizados sin afectar el flujo de la UI.

## ¿Cuándo usar `useRef` en lugar de `useState`?

Existen ciertas situaciones donde es más conveniente utilizar **`useRef`** en lugar de **`useState`**:

1. **Valores que no afectan la UI**: Si el valor que estás manejando no debe causar un re-renderizado del componente, `useRef` es la mejor opción. Ejemplos incluyen contadores de renderizados, valores temporales, y cualquier dato que no se muestre directamente en la interfaz.

2. **Persistencia entre renderizados**: `useRef` te permite mantener valores entre renderizados sin provocar re-renderizados adicionales. Esto es útil para optimizar el rendimiento de tu componente, especialmente cuando el valor que estás manejando cambia con frecuencia pero no necesita actualizar la UI.

3. **Acceso al DOM**: `useRef` también se utiliza para acceder directamente a elementos del DOM, lo que es útil cuando necesitas manipular elementos de la interfaz de usuario de manera imperativa.

### Ejemplo práctico: Gestionando un temporizador

Vamos a crear un componente que utiliza **`useRef`** para gestionar un temporizador sin que la UI se re-renderice constantemente:

```jsx
import React, { useRef, useState } from 'react';

function Temporizador() {
  const [tiempo, setTiempo] = useState(0); // Estado para mostrar el tiempo
  const intervalRef = useRef(null); // Referencia para guardar el ID del intervalo

  const iniciarTemporizador = () => {
    intervalRef.current = setInterval(() => {
      setTiempo(prevTiempo => prevTiempo + 1);
    }, 1000);
  };

  const detenerTemporizador = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Tiempo: {tiempo} segundos</p>
      <button onClick={iniciarTemporizador}>Iniciar</button>
      <button onClick={detenerTemporizador}>Detener</button>
    </div>
  );
}

export default Temporizador;
```

### Explicación del código:

1. **`useState`** se usa para el estado que se muestra en la UI, en este caso, el tiempo transcurrido.
2. **`useRef`** almacena el ID del intervalo del temporizador, permitiendo detener el temporizador sin que la UI se vuelva a renderizar innecesariamente.

## Puntos a tener en cuenta

- **No provoca re-renderizado**: Cualquier cambio en `.current` de `useRef` no causará un nuevo renderizado del componente.
- **Persistencia**: Los valores guardados en `useRef` persistirán durante toda la vida del componente, similar a los valores de estado.
- **Uso en el DOM**: `useRef` es ideal para trabajar con referencias directas a elementos del DOM.

## Más información

- **useState vs useRef**: ¿Cuándo es mejor usar cada uno?
- **Manipulación del DOM con useRef**
- **Optimización del rendimiento en React**

## Resumen

`useRef` es una herramienta poderosa en React que te permite crear referencias mutables que persisten entre renderizados sin provocar un re-renderizado del componente. Es ideal para manejar valores que no afectan la UI, acceder a elementos del DOM y optimizar el rendimiento de tus componentes. En comparación con `useState`, `useRef` se utiliza cuando necesitas mantener valores entre renderizados sin que estos causen actualizaciones visuales.