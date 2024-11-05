# Introducción a componentes y buenos nombres para componentes

## ¿Qué es un componente en React?

Un componente en React es como un bloque de construcción de una interfaz de usuario. Piensa en un componente como una función de JavaScript que acepta entradas (llamadas **props**) y devuelve un fragmento de interfaz de usuario (es decir, un árbol de elementos de React). Estos componentes pueden ser tan simples como un botón o tan complejos como un formulario entero.

Un componente puede verse así:

```jsx
// Un componente simple que muestra un saludo
function Saludo() {
  return <h1>¡Hola, mundo!</h1>;
}
```

En este ejemplo, `Saludo` es un componente funcional que devuelve un elemento JSX (`<h1>`), que se renderizará en la pantalla.

## ¿Por qué son importantes los nombres de los componentes?

Los nombres de los componentes son esenciales para la legibilidad y el mantenimiento del código. Un buen nombre de componente describe claramente qué hace el componente. Esto es crucial cuando trabajas en proyectos grandes o colaboras con otros desarrolladores.

### Ejemplos de buenos y malos nombres

**Buenos nombres:**

- `BotonEnviar`: Claramente indica que este componente es un botón para enviar.
- `FormularioContacto`: Sugiere que este componente maneja un formulario de contacto.
- `ListaUsuarios`: Implica que el componente muestra una lista de usuarios.

**Malos nombres:**

- `Componente1`: No proporciona ninguna información sobre su propósito.
- `BotonCosas`: Es vago y no especifica lo que hace.
- `MiFormulario`: No es descriptivo y puede causar confusión si hay múltiples formularios en el proyecto.

## Crear componentes internos

A veces, es útil definir componentes dentro de otros componentes, especialmente si solo se van a usar en un lugar. Sin embargo, es importante no exagerar, ya que demasiados componentes internos pueden hacer que el código sea más difícil de seguir.

```jsx
function ListaTareas() {
  // Componente interno para mostrar una sola tarea
  function Tarea({ nombre }) {
    return <li>{nombre}</li>;
  }

  return (
    <ul>
      <Tarea nombre="Comprar leche" />
      <Tarea nombre="Lavar el auto" />
      <Tarea nombre="Hacer ejercicio" />
    </ul>
  );
}
```

En este ejemplo, `Tarea` es un componente interno de `ListaTareas`. Como `Tarea` solo se usa dentro de `ListaTareas`, tiene sentido mantenerlo encapsulado aquí.

## Consejos para nombrar componentes

1. **Sé descriptivo:** El nombre debe reflejar lo que hace o representa el componente.
2. **Sé conciso:** Usa nombres cortos pero claros. Evita nombres excesivamente largos que puedan hacer el código difícil de leer.
3. **Usa PascalCase:** En React, es una convención nombrar los componentes con PascalCase (por ejemplo, `BotonEnviar`), lo que significa que la primera letra de cada palabra está en mayúscula.

## Más información

- **Props:** Para entender mejor cómo los componentes pueden recibir y manejar datos.
- **State:** Para gestionar información interna dentro de un componente.
- **Renderizado condicional:** Para aprender cómo mostrar u ocultar componentes según ciertas condiciones.

## Resumen

Un componente en React es una pieza fundamental que representa una parte de la interfaz de usuario. Los nombres de los componentes son cruciales para la claridad y el mantenimiento del código. Es recomendable usar nombres descriptivos, concisos y seguir la convención de PascalCase. Además, los componentes internos pueden ser útiles, pero deben usarse con moderación para mantener el código limpio y comprensible.