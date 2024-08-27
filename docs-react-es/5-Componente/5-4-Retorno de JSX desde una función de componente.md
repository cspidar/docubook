# Retorno de JSX desde una función de componente

Cuando trabajamos con React, uno de los conceptos más importantes es entender cómo se retornan elementos JSX desde una función de componente. JSX es una extensión de la sintaxis de JavaScript que nos permite escribir código similar a HTML dentro de un archivo JavaScript. Este código es luego transformado en elementos React que pueden ser renderizados en la interfaz de usuario.

## ¿Qué es JSX?

JSX (JavaScript XML) es una sintaxis que nos permite describir cómo debería verse la interfaz de usuario de nuestra aplicación React utilizando una mezcla de JavaScript y HTML. Aunque a primera vista puede parecer que estamos escribiendo HTML, en realidad, todo lo que escribimos en JSX es transformado en llamadas a `React.createElement()` que construyen la estructura de la interfaz.

### Ejemplo básico de retorno de JSX

Veamos un ejemplo simple de cómo un componente de React puede retornar JSX:

```jsx
function Saludo() {
  // Aquí estamos retornando un simple elemento JSX que es un h1 con un saludo.
  return <h1>¡Hola, mundo!</h1>;
}

export default Saludo;
```

En este caso, `Saludo` es un componente funcional que retorna un elemento JSX. Este elemento JSX es lo que finalmente se verá en la pantalla cuando este componente se renderice.

### Componentes con más de un elemento JSX

¿Qué sucede si necesitamos retornar más de un elemento JSX? En React, un componente siempre debe retornar un solo elemento. Para lograr esto, podemos envolver múltiples elementos dentro de un contenedor, como un `<div>` o un `React.Fragment`.

```jsx
function MensajeDeBienvenida() {
  // Retornamos múltiples elementos dentro de un div
  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <p>Estamos felices de verte aquí.</p>
    </div>
  );
}

export default MensajeDeBienvenida;
```

Aquí, hemos utilizado un `<div>` para envolver dos elementos JSX: un `<h1>` y un `<p>`. Esto asegura que estamos retornando un único elemento, tal como React lo requiere.

### Uso de `React.Fragment`

Si no queremos agregar un contenedor adicional en el DOM, podemos usar `React.Fragment`, que nos permite retornar múltiples elementos JSX sin introducir nodos adicionales.

```jsx
function InfoUsuario() {
  // React.Fragment nos permite devolver múltiples elementos sin añadir nodos extra
  return (
    <React.Fragment>
      <h2>Nombre: Juan Pérez</h2>
      <p>Edad: 30 años</p>
    </React.Fragment>
  );
}

export default InfoUsuario;
```

El resultado es el mismo que si hubiéramos usado un `<div>`, pero sin crear un nuevo nodo en el DOM, lo cual puede ser útil para mantener el código limpio y semánticamente correcto.

## Resaltando los conceptos clave

- **JSX**: Es una extensión de JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript.
- **Retorno de JSX**: Un componente de React debe retornar un solo elemento JSX. Si necesitas retornar múltiples elementos, envuélvelos en un contenedor como `<div>` o usa `React.Fragment`.
- **`React.Fragment`**: Permite retornar múltiples elementos JSX sin crear nodos adicionales en el DOM.

## Más información

- JSX
- React.Fragment
- Componentes funcionales
- React.createElement

## Resumen

El retorno de JSX desde una función de componente es un proceso esencial en React, que permite definir la estructura visual de la interfaz. Es importante recordar que siempre debemos retornar un solo elemento JSX, utilizando contenedores como `<div>` o `React.Fragment` cuando sea necesario para manejar múltiples elementos. Esto asegura un código React eficiente y limpio, facilitando el desarrollo de aplicaciones.