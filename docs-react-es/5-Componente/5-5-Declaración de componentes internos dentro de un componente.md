# Declaración de componentes internos dentro de un componente

Cuando trabajamos con React, a menudo necesitamos dividir nuestro código en partes más pequeñas y manejables. Una forma efectiva de hacerlo es declarar componentes internos dentro de un componente más grande. Este enfoque nos permite encapsular lógica específica y mantener el código organizado, además de reducir el alcance de los componentes que no necesitan ser reutilizables en toda la aplicación.

## ¿Qué son los componentes internos?

En React, un componente interno es simplemente un componente que se define dentro de otro componente. Esto se puede hacer cuando el componente interno es relevante únicamente en el contexto del componente externo y no necesita ser utilizado en otros lugares de la aplicación. Declarar componentes internos ayuda a evitar la "contaminación" del espacio global de nombres y a mantener la claridad en el código.

### Ejemplo simple

Imaginemos que estamos creando un componente `PerfilUsuario` que muestra la información de un usuario. Dentro de este componente, queremos mostrar una lista de hobbies, pero esta lista no será útil fuera de este contexto. Por lo tanto, podemos crear un componente `ListaHobbies` dentro de `PerfilUsuario`.

```jsx
// Componente principal PerfilUsuario
function PerfilUsuario({ nombre, edad, hobbies }) {
  // Componente interno para listar hobbies
  function ListaHobbies({ hobbies }) {
    return (
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>{nombre}</h1>
      <p>Edad: {edad}</p>
      <h2>Hobbies</h2>
      {/* Uso del componente interno ListaHobbies */}
      <ListaHobbies hobbies={hobbies} />
    </div>
  );
}

// Ejemplo de uso del componente PerfilUsuario
const usuario = {
  nombre: "Juan",
  edad: 30,
  hobbies: ["Leer", "Correr", "Programar"],
};

<PerfilUsuario {...usuario} />;
```

### Puntos clave a considerar

1. **Encapsulación**: Declarar un componente dentro de otro lo encapsula dentro del alcance del componente externo, manteniendo el código más modular y organizado.

2. **Evitar la reutilización innecesaria**: Si un componente no va a ser reutilizado en diferentes partes de la aplicación, mantenerlo como un componente interno es una buena práctica.

3. **Desempeño**: Un punto importante a tener en cuenta es que declarar componentes internos puede, en algunos casos, tener un impacto en el rendimiento, especialmente si el componente externo se renderiza con frecuencia. Cada vez que se renderiza el componente externo, se redefinirán los componentes internos, lo que podría ser ineficiente. Para evitar esto, se puede definir el componente interno fuera de la función si se requiere una optimización.

### Cuándo evitar componentes internos

Aunque declarar componentes internos tiene sus ventajas, es importante saber cuándo evitarlos. Si el componente tiene potencial de ser reutilizado en otras partes de la aplicación, es mejor declararlo de manera independiente para promover la reutilización y la consistencia en el código.

## Más información

- Componentes funcionales en React
- Gestión del ciclo de vida con Hooks
- Buenas prácticas en la organización de componentes en React

## Resumen

Declarar componentes internos dentro de un componente es una práctica útil para mantener el código modular y organizado, especialmente cuando el componente interno no necesita ser reutilizado fuera del contexto del componente externo. Sin embargo, es importante ser consciente de los posibles impactos en el rendimiento y evitar este enfoque si el componente interno tiene potencial de reutilización.