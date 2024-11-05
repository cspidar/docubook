# Gestión de estado con State

En React, **State** es uno de los conceptos fundamentales que necesitas dominar para construir aplicaciones interactivas. El **State** permite que un componente "recuerde" datos entre renderizados y reaccione a las interacciones del usuario o a otros eventos que ocurran en la aplicación.

## ¿Qué es el State?

El **State** (o "estado" en español) es un objeto que almacena valores que pueden cambiar con el tiempo y que afectan la forma en que un componente se renderiza. Cada vez que el **State** de un componente cambia, React vuelve a renderizar ese componente para reflejar el nuevo estado en la interfaz de usuario.

### Ejemplo básico de uso de State

Veamos un ejemplo simple para ilustrar cómo se utiliza el **State** en un componente funcional de React. Imagina que quieres crear un contador que aumenta en uno cada vez que se hace clic en un botón.

```jsx
import React, { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada 'contador' y una función para actualizarla llamada 'setContador'
  const [contador, setContador] = useState(0); // '0' es el valor inicial de 'contador'

  // Función que se ejecuta al hacer clic en el botón
  const incrementar = () => {
    setContador(contador + 1); // Actualizamos el estado con el nuevo valor de 'contador'
  };

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={incrementar}>Haz clic aquí</button>
    </div>
  );
}

export default Contador;
```

### Desglose del ejemplo

1. **Importación de `useState`**: La función `useState` es un *Hook* de React que permite añadir **State** a un componente funcional. La importamos al inicio del archivo.

2. **Declaración del State**: `const [contador, setContador] = useState(0);`
   - `contador`: Es el valor actual del **State**.
   - `setContador`: Es la función que usaremos para actualizar el valor de `contador`.
   - `useState(0)`: Inicializa el **State** con un valor inicial de `0`.

3. **Función para actualizar el State**: La función `incrementar` usa `setContador(contador + 1);` para aumentar el valor de `contador` en 1 cada vez que se ejecuta.

4. **Renderizado del componente**: El componente renderiza un párrafo que muestra el valor actual de `contador` y un botón que, al hacer clic, llama a la función `incrementar`.

### Conceptos clave

- **Estado inicial**: El valor que se pasa a `useState` es el estado inicial del componente. En el ejemplo, el contador comienza en `0`.

- **Re-renderizado**: Cada vez que se llama a `setContador`, React vuelve a renderizar el componente con el nuevo valor de `contador`.

- **Inmutabilidad del State**: Es importante no modificar directamente el **State**. En lugar de eso, siempre usamos la función de actualización (`setContador` en este caso) para asegurarnos de que React maneje correctamente el cambio de estado.

## Buenas prácticas al gestionar el State

- **Nombres claros y descriptivos**: Usa nombres de variables de **State** que describan claramente su propósito. Esto facilita la comprensión y el mantenimiento del código.

- **State local en lugar de global**: Mantén el **State** lo más local posible. Si solo un componente necesita acceder a una pieza de estado, manténlo en ese componente en lugar de propagarlo innecesariamente.

- **Evita duplicar el State**: No dupliques el **State** en varios lugares si no es necesario. Esto puede causar inconsistencias y hacer que el código sea más difícil de mantener.

## Más información

- **Hooks de React**
- **Re-renderizado en React**
- **Inmutabilidad en JavaScript**
- **Componentes funcionales vs. componentes de clase**

## Resumen

El **State** en React permite que un componente gestione y responda a cambios en datos a lo largo del tiempo, lo que es esencial para crear interfaces de usuario dinámicas e interactivas. Usando `useState`, podemos inicializar y actualizar valores de estado dentro de componentes funcionales, asegurando que React vuelva a renderizar el componente cuando sea necesario. Mantener nombres descriptivos y evitar la duplicación de estado son prácticas recomendadas para un código más claro y mantenible.