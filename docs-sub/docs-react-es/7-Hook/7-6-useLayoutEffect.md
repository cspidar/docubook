# useLayoutEffect

El `useLayoutEffect` es un hook en React que se parece mucho a `useEffect`, pero con una diferencia clave en cuanto al momento en que se ejecuta. Mientras que `useEffect` se ejecuta después de que el renderizado esté pintado en la pantalla, `useLayoutEffect` se ejecuta justo después del renderizado, pero antes de que el navegador actualice lo que el usuario ve en la pantalla. Esto significa que `useLayoutEffect` se ejecuta sincrónicamente durante el proceso de renderizado, lo que puede ser útil para realizar mediciones o ajustes que deban aplicarse antes de que el navegador pinte la pantalla.

## ¿Cuándo usar `useLayoutEffect`?

Es recomendable usar `useLayoutEffect` en situaciones donde necesitas realizar cambios DOM que deben estar visibles antes de que el usuario vea el resultado del renderizado. Algunos ejemplos incluyen:

- **Medir elementos en el DOM:** Si necesitas medir el tamaño de un elemento en el DOM inmediatamente después de que se haya renderizado, `useLayoutEffect` te permitirá hacerlo antes de que el navegador actualice la pantalla.
- **Aplicar cambios de estilo que afecten el diseño del documento:** Si los cambios de estilo que realizas en un componente pueden causar "reflujo" o reposicionamiento de otros elementos, es preferible realizar estos cambios dentro de `useLayoutEffect`.

## Ejemplo básico de `useLayoutEffect`

Aquí tienes un ejemplo básico para ilustrar cómo funciona `useLayoutEffect`:

```jsx
import React, { useState, useLayoutEffect, useRef } from 'react';

function ComponenteConUseLayoutEffect() {
  // Creamos una referencia para un elemento DOM
  const divRef = useRef(null);

  // Estado para manejar la altura del div
  const [altura, setAltura] = useState(0);

  useLayoutEffect(() => {
    // Medimos la altura del div justo después del renderizado
    if (divRef.current) {
      setAltura(divRef.current.getBoundingClientRect().height);
    }
  }, [altura]);

  return (
    <div>
      <div ref={divRef} style={{ padding: '20px', backgroundColor: 'lightblue' }}>
        {/* Este div tendrá un tamaño dinámico */}
        Contenido del div. La altura es: {altura}px
      </div>
    </div>
  );
}

export default ComponenteConUseLayoutEffect;
```

### ¿Qué hace este código?

1. **Referencia DOM (`useRef`)**: Creamos una referencia (`divRef`) para apuntar al div que queremos medir.
2. **Estado (`useState`)**: Mantenemos la altura del div en un estado.
3. **Medición en `useLayoutEffect`**: Utilizamos `useLayoutEffect` para medir la altura del div después de que se renderiza, pero antes de que el navegador pinte los cambios en la pantalla. Esto asegura que la altura medida es precisa y que cualquier cambio en el DOM se realizará antes de que el usuario vea el resultado.

## Diferencias clave entre `useEffect` y `useLayoutEffect`

- **Momento de ejecución**: `useEffect` se ejecuta después de que el navegador haya actualizado la pantalla, mientras que `useLayoutEffect` se ejecuta antes de la actualización de la pantalla.
- **Uso recomendado**: `useEffect` es más adecuado para operaciones que no afectan directamente el diseño visual inicial, como la obtención de datos o la configuración de un temporizador. Por otro lado, `useLayoutEffect` es ideal para operaciones que deben completarse antes de que el usuario vea el resultado del renderizado.

## Consideraciones importantes

- **Rendimiento**: Como `useLayoutEffect` se ejecuta sincrónicamente, puede bloquear la pintura de la página si se utiliza de manera ineficiente. Es importante usarlo solo cuando realmente necesites que algo ocurra antes de que el navegador actualice la pantalla.
- **Efectos secundarios**: Si bien `useLayoutEffect` te permite hacer cambios antes de que se presente la interfaz al usuario, abusar de él puede llevar a una experiencia de usuario menos fluida debido a la potencial pérdida de rendimiento.

## Más información

- Hooks en React
- Diferencias entre `useEffect` y `useLayoutEffect`
- Medición y manipulación del DOM en React
- Optimización del rendimiento en React

## Resumen

`useLayoutEffect` es un hook poderoso en React que se ejecuta justo después del renderizado pero antes de que el navegador actualice la pantalla. Es útil para tareas que necesitan realizarse antes de que el usuario vea los cambios en la UI, como mediciones del DOM y ajustes de estilo que afectan el diseño. Sin embargo, debido a su ejecución sincrónica, debe usarse con precaución para evitar problemas de rendimiento.