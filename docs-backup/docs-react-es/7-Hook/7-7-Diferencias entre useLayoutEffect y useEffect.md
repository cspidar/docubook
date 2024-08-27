# Diferencias entre useLayoutEffect y useEffect

Cuando comenzamos a trabajar con React, uno de los aspectos más importantes que debemos entender es cómo gestionar los efectos secundarios en nuestros componentes. Para esto, React nos proporciona dos hooks clave: `useEffect` y `useLayoutEffect`. Aunque a primera vista pueden parecer similares, tienen diferencias cruciales que afectan el rendimiento y el comportamiento de nuestros componentes. En esta sección, te explicaré detalladamente estas diferencias y cuándo utilizar cada uno.

## ¿Qué es `useEffect`?

`useEffect` es un hook que nos permite realizar efectos secundarios en componentes funcionales. Un efecto secundario es cualquier operación que afecta algo fuera del alcance de la función, como una llamada a una API, la manipulación del DOM, o suscripciones a eventos.

### Ejemplo básico de `useEffect`

```jsx
import React, { useEffect, useState } from 'react';

function EjemploUseEffect() {
  const [contador, setContador] = useState(0);

  // Este efecto se ejecuta después de cada renderizado
  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
    // Este comentario indica que estamos actualizando el título del documento
  });

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

En este ejemplo, el `useEffect` se ejecuta después de que React haya actualizado el DOM. Es ideal para la mayoría de los casos en los que necesitamos interactuar con el DOM o realizar operaciones asíncronas, como la obtención de datos de un servidor.

## ¿Qué es `useLayoutEffect`?

`useLayoutEffect`, por otro lado, se ejecuta justo después de que todas las mutaciones del DOM se hayan realizado, pero antes de que el navegador haya tenido la oportunidad de "pintar" la pantalla. Esto significa que `useLayoutEffect` se ejecuta de manera síncrona, bloqueando el pintado de la pantalla hasta que el efecto se haya completado.

### Ejemplo básico de `useLayoutEffect`

```jsx
import React, { useLayoutEffect, useState } from 'react';

function EjemploUseLayoutEffect() {
  const [contador, setContador] = useState(0);

  // Este efecto se ejecuta después de que el DOM haya sido mutado, pero antes del pintado
  useLayoutEffect(() => {
    if (contador === 0) {
      const elemento = document.getElementById('mensaje');
      elemento.style.color = 'red';
      elemento.textContent = '¡Contador inicializado!';
      // Aquí estamos manipulando el DOM de forma directa y necesitamos que ocurra antes del pintado
    }
  }, [contador]);

  return (
    <div>
      <p id="mensaje">Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

Este ejemplo muestra cómo `useLayoutEffect` se asegura de que cualquier cambio en el DOM se aplique antes de que el navegador renderice la pantalla. Esto puede ser crucial para casos donde la interfaz debe estar completamente actualizada y consistente antes de mostrarse al usuario.

## Principales diferencias

- **Momento de ejecución**: `useEffect` se ejecuta después de que el DOM se haya actualizado y el navegador haya pintado la pantalla. `useLayoutEffect`, por el contrario, se ejecuta antes de que el navegador pinte la pantalla, justo después de que el DOM haya sido mutado.
  
- **Impacto en el rendimiento**: `useEffect` no bloquea el pintado de la pantalla, lo que significa que no afecta la velocidad con la que se muestra el contenido al usuario. `useLayoutEffect`, al ejecutarse de manera síncrona, puede bloquear el pintado y, por lo tanto, afectar el rendimiento si se usa inadecuadamente.

- **Usos recomendados**: 
  - `useEffect` se recomienda para la mayoría de las operaciones asíncronas, como llamadas a APIs o actualizaciones que no necesitan ser inmediatas.
  - `useLayoutEffect` es mejor para operaciones que necesitan ocurrir antes de que el usuario vea la interfaz, como ajustes en el layout o mediciones precisas del DOM.

## Más información

- **Efectos secundarios en React**
- **Pintado del navegador**
- **Rendimiento en aplicaciones React**
- **DOM y manipulación del DOM**

## Resumen

En resumen, `useEffect` y `useLayoutEffect` son hooks que gestionan efectos secundarios, pero se ejecutan en momentos diferentes del ciclo de vida del componente. `useEffect` es ideal para la mayoría de las tareas asíncronas y no bloquea el renderizado, mientras que `useLayoutEffect` es crucial cuando necesitas asegurar que las modificaciones en el DOM se realicen antes de que el navegador muestre la pantalla al usuario. Es importante elegir el hook correcto para evitar problemas de rendimiento y asegurar que la interfaz se comporte como se espera.