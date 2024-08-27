# Componentes de orden superior (HOC)

## ¿Qué es un componente de orden superior?

Un **Componente de Orden Superior (HOC)** es un patrón avanzado en React que se utiliza para reutilizar la lógica de componentes. Un HOC no es más que una función que recibe un componente como argumento y devuelve un nuevo componente mejorado. Este patrón es útil para agregar funcionalidades comunes a varios componentes sin repetir código.

En términos sencillos, si tienes una lógica que necesitas en múltiples componentes, puedes crear un HOC que encapsule esa lógica y luego aplicar ese HOC a los componentes que la necesiten.

## ¿Cómo se crea un HOC?

Crear un HOC es bastante sencillo. Veamos un ejemplo básico para entender cómo funciona.

Imagina que tienes una funcionalidad que deseas compartir entre varios componentes: por ejemplo, mostrar un mensaje de "Cargando..." mientras se están obteniendo datos de una API. Puedes crear un HOC para añadir esta funcionalidad a diferentes componentes.

```jsx
import React, { useState, useEffect } from 'react';

// Este es nuestro HOC
function withLoading(Component) {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulamos una llamada a una API con setTimeout
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    // Si está cargando, mostramos un mensaje de carga
    if (isLoading) {
      return <div>Cargando...</div>;
    }

    // Si no, renderizamos el componente original
    return <Component {...props} />;
  };
}

// Un componente sencillo que muestra un mensaje
function MyComponent() {
  return <div>¡Datos cargados con éxito!</div>;
}

// Ahora envolvemos MyComponent con nuestro HOC
const MyComponentWithLoading = withLoading(MyComponent);

export default MyComponentWithLoading;
```

### Explicación del código

1. **Función HOC `withLoading`**: Es una función que recibe un `Component` como argumento y devuelve un nuevo componente que añade la funcionalidad de mostrar el estado de carga.

2. **Estado `isLoading`**: En el componente retornado por el HOC, usamos el hook `useState` para manejar el estado de carga.

3. **Efecto `useEffect`**: Simulamos la carga de datos con un `setTimeout` para cambiar el estado de `isLoading` a `false` después de 2 segundos.

4. **Condicional `isLoading`**: Mientras `isLoading` es `true`, mostramos el texto "Cargando...". Una vez que los datos están cargados, se renderiza el componente original (`MyComponent` en este caso).

5. **Uso del HOC**: Finalmente, envolvemos `MyComponent` con `withLoading` para crear una nueva versión del componente que tiene la funcionalidad de carga incorporada.

## Ventajas del uso de HOC

- **Reutilización de lógica**: Puedes encapsular funcionalidades comunes, como la autenticación o la manipulación de datos, y aplicarlas a varios componentes sin duplicar código.
- **Separación de preocupaciones**: Permiten mantener la lógica separada del componente que se encarga de la presentación, lo que hace que tu código sea más limpio y mantenible.
- **Composición**: Puedes combinar múltiples HOCs para añadir varias funcionalidades a un componente.

## Consideraciones importantes

- **No alteres el componente original**: Un buen HOC no debería modificar el componente que recibe, sino envolverlo y devolver una nueva versión del mismo.
- **Orden de HOCs**: Si aplicas varios HOCs a un componente, el orden en que los aplicas puede afectar el comportamiento final. Ten esto en cuenta al diseñar tus HOCs.
- **Paso de Props**: Recuerda siempre pasar las props que recibe el HOC al componente original (`<Component {...props} />`), para no perder ninguna funcionalidad que dependa de esas props.

## Más información

- Palabras clave: HOC, reutilización de lógica, hooks en HOCs, separación de preocupaciones, composición de HOCs.
- Conceptos relacionados: Composición de componentes, Render Props, Hooks personalizados.

## Resumen

Los Componentes de Orden Superior (HOC) en React son una poderosa herramienta para reutilizar lógica entre componentes. Funcionan tomando un componente y devolviendo una versión mejorada de este, permitiendo agregar funcionalidades adicionales de manera eficiente y limpia. Entender y utilizar HOCs adecuadamente puede mejorar significativamente la organización y mantenimiento de tu código en aplicaciones React.