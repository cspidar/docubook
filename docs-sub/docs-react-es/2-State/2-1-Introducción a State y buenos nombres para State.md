# Introducción a State y buenos nombres para State

## ¿Qué es el State en React?

En React, el **State** (o estado) es un objeto que permite a los componentes mantener y gestionar información que puede cambiar a lo largo del tiempo. A diferencia de las **Props**, que son inmutables, el **State** es mutable, lo que significa que puede cambiar durante la vida útil del componente.

El **State** es especialmente útil cuando se necesita reflejar cambios en la interfaz de usuario en respuesta a eventos como la interacción del usuario, las solicitudes de red o cualquier otra acción que modifique los datos.

### Ejemplo básico de uso de State

Imagina que quieres crear un contador simple. El contador debe incrementar su valor cada vez que el usuario haga clic en un botón. Aquí es donde entra en juego el **State**.

```jsx
import React, { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada "contador"
  // y una función para actualizarla, llamada "setContador".
  const [contador, setContador] = useState(0);

  // Función que se llama al hacer clic en el botón
  const incrementar = () => {
    setContador(contador + 1); // Actualizamos el estado con el nuevo valor
  };

  return (
    <div>
      {/* Mostramos el valor actual del contador */}
      <p>Has hecho clic {contador} veces</p>
      {/* Botón que llama a la función "incrementar" cuando se hace clic */}
      <button onClick={incrementar}>Haz clic aquí</button>
    </div>
  );
}

export default Contador;
```

### Desglosando el ejemplo

1. **Declaración del State**: Utilizamos el hook `useState` para declarar una variable de estado llamada `contador`. Le damos un valor inicial de `0`. `useState` nos devuelve un array con dos elementos: el valor actual del estado (`contador`) y una función para actualizar ese valor (`setContador`).

2. **Actualización del State**: La función `incrementar` llama a `setContador` con el nuevo valor del contador, que es `contador + 1`. Cada vez que `setContador` es llamado, React actualiza el valor del estado y vuelve a renderizar el componente para reflejar los cambios.

3. **Renderizado del componente**: El valor actual del contador se muestra en un párrafo, y un botón permite al usuario incrementar el contador haciendo clic en él.

## Buenos nombres para State

Elegir buenos nombres para tus variables de **State** es crucial para mantener tu código claro y fácil de entender. Un buen nombre debe ser:

1. **Descriptivo**: El nombre debe reflejar claramente el propósito del estado. Por ejemplo, si el estado controla un contador, `contador` es un buen nombre.

2. **Conciso**: Aunque debe ser descriptivo, también debe ser breve. Evita nombres excesivamente largos o complejos.

3. **Coherente**: Usa nombres coherentes a lo largo de tu aplicación. Si decides usar un estilo de nomenclatura, como `camelCase`, asegúrate de aplicarlo de manera consistente.

### Ejemplos de buenos nombres para State

- **`usuario`**: Para almacenar la información del usuario actualmente autenticado.
- **`isCargando`**: Para indicar si una operación está en curso.
- **`mensajeError`**: Para almacenar un mensaje de error que se mostrará al usuario.
- **`listaTareas`**: Para manejar una lista de tareas en una aplicación de tareas.

### Ejemplo práctico con múltiples estados

```jsx
import React, { useState } from 'react';

function FormularioDeRegistro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [isEnviado, setIsEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    setIsEnviado(true); // Actualizamos el estado para indicar que el formulario ha sido enviado
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      {isEnviado ? (
        <p>Gracias por registrarte, {nombre}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Registrar</button>
        </form>
      )}
    </div>
  );
}

export default FormularioDeRegistro;
```

### Explicación del ejemplo

En este ejemplo:

- `nombre` y `email` son variables de estado que almacenan los valores del formulario.
- `isEnviado` es una variable de estado que indica si el formulario ha sido enviado.
- Dependiendo del valor de `isEnviado`, se muestra un mensaje de agradecimiento o el formulario.

## Más información

- **useState**
- **Props vs State**
- **Manejo de formularios en React**
- **Renderizado condicional en React**

## Resumen

El **State** en React es una herramienta fundamental para manejar y reflejar cambios dinámicos en la interfaz de usuario. Al elegir nombres para las variables de estado, es importante que sean descriptivos, concisos y coherentes. Utilizar el **State** de manera efectiva es clave para crear aplicaciones React interactivas y fáciles de mantener.