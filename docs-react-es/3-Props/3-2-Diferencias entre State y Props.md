# Diferencias entre State y Props

Cuando trabajamos con React, es esencial entender la diferencia entre **State** y **Props**. Ambos son fundamentales para manejar la información dentro de los componentes, pero tienen propósitos y comportamientos distintos.

## ¿Qué es el State?

El **State** es un objeto especial que permite a los componentes de React almacenar y gestionar datos que cambian a lo largo del tiempo. Cada vez que el estado de un componente cambia, React vuelve a renderizar el componente para reflejar esos cambios en la interfaz de usuario.

### Características del State:

- **Mutable**: El estado puede cambiar a lo largo del tiempo, lo que permite actualizar la interfaz cuando se producen eventos, como la entrada de un usuario o la carga de datos desde una API.
- **Local al componente**: El estado es privado y solo es accesible desde el componente donde se define.
- **Causa re-renderizados**: Cuando el estado cambia, React vuelve a renderizar el componente para mostrar la nueva información.

### Ejemplo de uso del State:

```jsx
import React, { useState } from 'react';

function Contador() {
  // Definimos un estado llamado "contador" y una función para actualizarlo "setContador"
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      {/* Cuando se hace clic en el botón, llamamos a la función incrementar */}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

En este ejemplo, el estado `contador` se inicializa en 0 y se incrementa cada vez que el usuario hace clic en el botón. El componente se vuelve a renderizar automáticamente cada vez que cambia el valor del estado.

## ¿Qué son los Props?

Los **Props** (abreviatura de "properties") son como los "argumentos" que pasamos a una función, pero en este caso se los pasamos a los componentes. Permiten que un componente padre pase datos a un componente hijo, haciendo que el componente hijo sea reutilizable y más dinámico.

### Características de los Props:

- **Inmutables**: Los Props no pueden ser modificados dentro del componente que los recibe. Son "de solo lectura".
- **Se pasan desde un componente padre a un componente hijo**: Esto permite a los componentes comunicarse entre sí, pero siempre en una sola dirección: de padre a hijo.
- **No causan re-renderizados por sí mismos**: Si un componente padre cambia los props que pasa a un hijo, el hijo se volverá a renderizar con los nuevos valores, pero los props en sí mismos no causan renderizados.

### Ejemplo de uso de Props:

```jsx
import React from 'react';

// Componente hijo que recibe un prop llamado "nombre"
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

// Componente padre que pasa un prop al componente hijo
function App() {
  return (
    <div>
      {/* Pasamos el prop "nombre" con el valor "Marta" */}
      <Saludo nombre="Marta" />
    </div>
  );
}

export default App;
```

Aquí, el componente `Saludo` recibe un prop `nombre` y lo utiliza para mostrar un saludo personalizado. Este valor es pasado desde el componente `App`, lo que demuestra cómo los props permiten que los componentes sean reutilizables con diferentes datos.

## Diferencias clave entre State y Props

1. **Mutabilidad**:
   - **State**: Mutable. Puede cambiar dentro del componente.
   - **Props**: Inmutables. No se pueden cambiar dentro del componente que los recibe.

2. **Origen**:
   - **State**: Se define y gestiona dentro del propio componente.
   - **Props**: Se pasan desde un componente padre a un componente hijo.

3. **Causa de re-renderizados**:
   - **State**: Los cambios en el estado desencadenan un re-renderizado del componente.
   - **Props**: Si un prop cambia en el componente padre, el componente hijo se vuelve a renderizar con los nuevos valores.

4. **Uso**:
   - **State**: Ideal para manejar datos que cambian con el tiempo, como entradas de usuario, datos dinámicos, etc.
   - **Props**: Utilizados para pasar datos y funciones a componentes hijos para que se comporten de manera específica o muestren cierta información.

## Más información

- React State
- React Props
- Ciclo de vida de los componentes
- Comunicación entre componentes

## Resumen

El **State** y los **Props** son conceptos fundamentales en React, cada uno con un propósito claro. Mientras que el State es mutable y se usa para gestionar datos locales y cambiantes dentro de un componente, los Props son inmutables y se utilizan para pasar datos desde un componente padre a uno hijo. Comprender la diferencia entre ambos es crucial para construir aplicaciones React eficientes y bien organizadas.