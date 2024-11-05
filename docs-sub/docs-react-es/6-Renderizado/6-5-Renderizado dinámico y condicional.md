# Renderizado dinámico y condicional

En React, uno de los conceptos más poderosos es la capacidad de renderizar contenido de manera dinámica y condicional. Esto significa que puedes mostrar o esconder elementos en tu aplicación basándote en ciertas condiciones, lo cual es esencial para crear interfaces interactivas y responsivas.

## ¿Qué es el renderizado dinámico?

El **renderizado dinámico** se refiere a la capacidad de mostrar diferentes elementos en la interfaz según el estado o las propiedades (props) de un componente. Es dinámico porque el contenido que se muestra puede cambiar durante la ejecución de la aplicación, en lugar de estar fijo desde el inicio.

### Ejemplo básico de renderizado dinámico

Supongamos que tenemos un componente que muestra un mensaje de bienvenida personalizado. El mensaje cambia dependiendo de si el usuario está autenticado o no.

```jsx
function MensajeBienvenida({ usuario }) {
  // Si hay un nombre de usuario, se muestra un mensaje personalizado.
  if (usuario) {
    return <h1>¡Hola, {usuario.nombre}!</h1>;
  } else {
    // Si no hay un usuario, se muestra un mensaje genérico.
    return <h1>Bienvenido, invitado</h1>;
  }
}
```

En este ejemplo, usamos una estructura condicional (`if-else`) para determinar qué mensaje mostrar. Si `usuario` tiene un valor, se muestra el nombre del usuario. Si no, se muestra un saludo genérico.

## Renderizado condicional

El **renderizado condicional** es una técnica que permite controlar la renderización de un componente o un elemento basado en una condición. Es similar al renderizado dinámico, pero más específico en cuanto a cuándo y cómo ciertos elementos deben aparecer.

### Usando operadores lógicos para el renderizado condicional

En lugar de usar un `if-else`, también podemos utilizar operadores lógicos para hacer que el código sea más conciso.

#### Operador && (AND)

El operador `&&` es útil cuando quieres renderizar un componente o elemento solo si una condición es verdadera.

```jsx
function MostrarBoton({ estaAutenticado }) {
  return (
    <div>
      {/* El botón solo se muestra si el usuario está autenticado */}
      {estaAutenticado && <button>Cerrar sesión</button>}
    </div>
  );
}
```

Aquí, el botón "Cerrar sesión" solo se renderiza si `estaAutenticado` es `true`.

#### Operador ternario

El operador ternario (`? :`) permite manejar condiciones más complejas de manera concisa.

```jsx
function EstadoDelUsuario({ estaAutenticado }) {
  return (
    <div>
      {estaAutenticado ? (
        <h2>Estás conectado</h2>
      ) : (
        <h2>No estás conectado</h2>
      )}
    </div>
  );
}
```

En este ejemplo, se muestra un mensaje dependiendo de si el usuario está autenticado o no. El operador ternario ayuda a mantener el código limpio y fácil de leer.

## Renderizado de listas condicionalmente

Es común tener que renderizar listas de elementos basadas en ciertas condiciones. Esto se puede hacer utilizando un `map` para iterar sobre una lista y combinarlo con operadores condicionales.

### Ejemplo de renderizado condicional de listas

Imagina que tienes una lista de tareas y quieres mostrar solo aquellas que no han sido completadas:

```jsx
function ListaDeTareas({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        tarea.completada ? null : <li key={tarea.id}>{tarea.texto}</li>
      ))}
    </ul>
  );
}
```

En este caso, solo se renderizan las tareas que no están completadas. Si una tarea está marcada como `completada`, no se renderiza nada (`null`).

## Puntos clave

- **Renderizado dinámico**: Muestra diferentes contenidos basados en las propiedades o el estado del componente.
- **Renderizado condicional**: Usa condiciones para controlar si un elemento o componente debe renderizarse.
- **Operadores lógicos y ternarios**: Son útiles para escribir renderizado condicional de manera concisa.

## Más información

- Renderizado condicional en React
- Operadores lógicos en JSX
- Renderizado de listas en React

## Resumen

El renderizado dinámico y condicional en React es fundamental para crear interfaces interactivas y responsivas. Puedes controlar lo que se muestra en la pantalla dependiendo del estado o las propiedades del componente utilizando estructuras como `if-else`, operadores lógicos `&&` y el operador ternario. Estos conceptos permiten un control preciso sobre el contenido visual, mejorando la experiencia del usuario.