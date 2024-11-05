# Pasar datos a los componentes con Props

En React, una de las piezas fundamentales para construir interfaces dinámicas es la capacidad de pasar datos a los componentes. Estos datos se pasan a través de un mecanismo llamado **Props** (abreviatura de "properties"). Comprender cómo funcionan las Props es esencial para crear componentes reutilizables y eficientes en tus aplicaciones.

## ¿Qué son las Props?

Las **Props** en React son un objeto que se utiliza para enviar datos desde un componente padre a un componente hijo. Los componentes hijos pueden acceder a estos datos y usarlos para renderizar contenido dinámico. Es importante destacar que las Props son **inmutables**, lo que significa que no se pueden modificar una vez que se les ha asignado un valor. Esto ayuda a mantener la predictibilidad y la estabilidad en el comportamiento de los componentes.

### Ejemplo básico de uso de Props

Imaginemos que tienes un componente que muestra un saludo. Queremos hacer que este componente sea reutilizable para saludar a diferentes personas.

```jsx
// Componente Saludo que recibe una prop llamada 'nombre'
function Saludo({ nombre }) {
  return (
    <h1>Hola, {nombre}!</h1>
  );
}

// Componente principal que usa el componente Saludo
function App() {
  return (
    <div>
      {/* Pasamos la prop 'nombre' con el valor 'Juan' */}
      <Saludo nombre="Juan" />
      {/* Pasamos la prop 'nombre' con el valor 'María' */}
      <Saludo nombre="María" />
    </div>
  );
}

export default App;
```

### Explicación del código

- **Componente Saludo:** Este componente recibe un objeto Props que contiene una propiedad llamada `nombre`. Usamos la desestructuración de objetos para extraer directamente `nombre` de las Props.
- **Componente App:** Aquí, utilizamos el componente `Saludo` dos veces, pasando diferentes valores para la prop `nombre`. Como resultado, `Saludo` renderiza "Hola, Juan!" y "Hola, María!" en la página.

## Pasar múltiples Props

Puedes pasar tantas Props como necesites a un componente. Supongamos que queremos que nuestro componente de saludo también muestre la edad de la persona:

```jsx
// Componente Saludo que recibe 'nombre' y 'edad' como Props
function Saludo({ nombre, edad }) {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Tienes {edad} años.</p>
    </div>
  );
}

// Componente principal que usa el componente Saludo
function App() {
  return (
    <div>
      <Saludo nombre="Juan" edad={30} />
      <Saludo nombre="María" edad={25} />
    </div>
  );
}

export default App;
```

### Conceptos clave

- **Inmutabilidad de Props:** Recuerda que las Props son inmutables. No intentes modificarlas dentro del componente hijo. Si necesitas cambiar valores, debes manejarlo en el componente padre, posiblemente usando el estado (**State**).
- **Uso de desestructuración:** Es común desestructurar las Props directamente en los parámetros de la función del componente para un código más limpio y fácil de leer.
- **Propagación de Props:** Puedes pasar todas las Props de un componente padre a un hijo usando la sintaxis `{...props}`, lo que se conoce como "spread operator". Esto es útil cuando un componente necesita todas las Props que se le están pasando.

### Ejemplo con spread operator

```jsx
function Saludo({ nombre, edad }) {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Tienes {edad} años.</p>
    </div>
  );
}

function App() {
  const datosPersona = { nombre: "Juan", edad: 30 };

  return (
    <div>
      {/* Pasamos todas las Props de datosPersona usando el spread operator */}
      <Saludo {...datosPersona} />
    </div>
  );
}

export default App;
```

## Más información

- **Props y desestructuración**
- **Props vs. State**
- **Buenas prácticas para nombrar Props**
- **Propagación de Props con el spread operator**

## Resumen

Las Props son fundamentales para pasar datos entre componentes en React, permitiendo la creación de interfaces dinámicas y reutilizables. Las Props son inmutables y se pueden pasar en cualquier cantidad desde un componente padre a un componente hijo. Usar desestructuración y el spread operator puede simplificar la manera en que trabajas con Props.