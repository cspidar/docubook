# Introducción a Props y buenos nombres para Props

## ¿Qué son los Props en React?

En React, **Props** (abreviatura de "Properties") son una forma de pasar datos de un componente padre a un componente hijo. Imagina que los componentes son como funciones en JavaScript, y los Props son los argumentos que se les pasan para que puedan hacer su trabajo. Estos Props permiten que los componentes sean más dinámicos y reutilizables, ya que pueden recibir diferentes valores cada vez que se utilizan.

Un concepto clave para entender los Props es que **son inmutables**, es decir, una vez que se le pasa un valor a un componente, este valor no cambia dentro de ese componente. Si necesitas que el valor cambie, deberías considerar usar el estado (`state`), que es otro concepto importante en React.

### Ejemplo básico de Props

Vamos a crear un componente simple que recibe un Prop y lo muestra en pantalla:

```jsx
import React from 'react';

// Componente que recibe un prop llamado "mensaje"
function Saludo(props) {
  return (
    <div>
      <h1>Hola, {props.mensaje}!</h1> {/* Utilizamos el prop mensaje */}
    </div>
  );
}

// Uso del componente Saludo con un prop
function App() {
  return (
    <div>
      <Saludo mensaje="Mundo" /> {/* Aquí pasamos "Mundo" como prop */}
    </div>
  );
}

export default App;
```

**¿Qué sucede aquí?**

1. El componente `Saludo` recibe un prop llamado `mensaje`.
2. El componente usa `{props.mensaje}` para mostrar el valor de `mensaje` en el HTML.
3. En el componente `App`, utilizamos `Saludo` y le pasamos el prop `mensaje` con el valor `"Mundo"`. Como resultado, en la pantalla veremos "Hola, Mundo!".

### Importancia de los buenos nombres para Props

Cuando trabajamos con Props, es crucial elegir nombres que sean claros y descriptivos. Esto no solo mejora la legibilidad del código, sino que también facilita el mantenimiento y la colaboración con otros desarrolladores.

#### Buenas prácticas para nombrar Props

1. **Sea específico:** Si un prop representa un título, llámelo `titulo` o `title` en lugar de algo genérico como `texto`.
   
   ```jsx
   <Titulo texto="Mi título" />  // Menos claro
   <Titulo titulo="Mi título" />  // Más claro
   ```

2. **Utilice nombres en singular o plural según corresponda:** Si un prop representa un elemento singular, utilice un nombre singular (`usuario`), pero si representa una colección, utilice un nombre plural (`usuarios`).

   ```jsx
   <ListaUsuarios usuarios={listaDeUsuarios} />  // Claramente una lista
   ```

3. **Mantenga la consistencia:** Si utiliza un nombre para un prop en un componente, trate de usar el mismo nombre en otros componentes para el mismo tipo de dato.

   ```jsx
   <Boton color="rojo" />  // Consistente en diferentes componentes
   <Encabezado color="rojo" />
   ```

### Ejemplo de varios Props

A veces, un componente puede necesitar varios Props para funcionar correctamente. Veamos un ejemplo:

```jsx
import React from 'react';

// Componente que recibe varios props
function TarjetaUsuario(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Edad: {props.edad}</p>
      <p>Correo electrónico: {props.email}</p>
    </div>
  );
}

// Uso del componente TarjetaUsuario
function App() {
  return (
    <div>
      <TarjetaUsuario nombre="Juan Pérez" edad={28} email="juan.perez@example.com" />
    </div>
  );
}

export default App;
```

**¿Qué observamos?**

1. El componente `TarjetaUsuario` recibe tres Props: `nombre`, `edad` y `email`.
2. Cada Prop se utiliza en el componente para mostrar diferentes piezas de información.
3. Al usar `TarjetaUsuario` en `App`, proporcionamos valores específicos para cada Prop.

## Más información

- **Inmutabilidad:** Explora por qué los Props son inmutables en React.
- **Desestructuración de Props:** Aprende cómo hacer el código más limpio utilizando desestructuración.
- **PropTypes:** Investiga cómo verificar los tipos de Props para evitar errores en tiempo de ejecución.

## Resumen

Los Props son fundamentales en React para pasar datos entre componentes, permitiendo su reutilización y flexibilidad. Es importante asignar nombres claros y descriptivos a los Props para mejorar la legibilidad y el mantenimiento del código. Con la correcta comprensión y uso de Props, podemos crear componentes más dinámicos y eficientes.