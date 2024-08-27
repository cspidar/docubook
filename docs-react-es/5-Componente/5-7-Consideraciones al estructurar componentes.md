# Consideraciones al estructurar componentes

Cuando desarrollas aplicaciones en React, es crucial estructurar tus componentes de manera que sean fáciles de mantener, reutilizables y comprensibles. A continuación, exploraremos algunas prácticas recomendadas para lograr una buena estructura en tus componentes.

## **1. Componentes pequeños y enfocados en una sola tarea**

Un principio clave en React es mantener tus componentes pequeños y con una única responsabilidad. Esto significa que cada componente debe hacer solo una cosa, pero hacerlo bien. Si un componente se vuelve demasiado grande o complejo, considera dividirlo en varios componentes más pequeños.

### Ejemplo:
```jsx
// Componente que muestra un botón y un contador
function Contador() {
  const [conteo, setConteo] = useState(0);

  // Función para manejar el clic del botón
  const manejarClic = () => setConteo(conteo + 1);

  return (
    <div>
      <p>Has hecho clic {conteo} veces</p>
      <Boton manejarClic={manejarClic} />
    </div>
  );
}

// Componente de botón
function Boton({ manejarClic }) {
  return (
    <button onClick={manejarClic}>
      Haz clic aquí
    </button>
  );
}
```
**Punto clave:** El componente `Contador` se enfoca en manejar el estado del contador, mientras que `Boton` solo se encarga de la lógica del botón, haciendo que cada componente sea más manejable y reutilizable.

## **2. Reutilización de componentes**

En lugar de duplicar código, es recomendable crear componentes reutilizables. Esto no solo reduce la cantidad de código que necesitas mantener, sino que también asegura consistencia en la interfaz de usuario.

### Ejemplo:
```jsx
// Componente reutilizable para un botón
function Boton({ manejarClic, texto }) {
  return (
    <button onClick={manejarClic}>
      {texto}
    </button>
  );
}

// Uso del componente reutilizable
function App() {
  return (
    <div>
      <Boton manejarClic={() => alert('Botón 1')} texto="Botón 1" />
      <Boton manejarClic={() => alert('Botón 2')} texto="Botón 2" />
    </div>
  );
}
```
**Punto clave:** El componente `Boton` se puede reutilizar en diferentes contextos, simplemente cambiando los props que se le pasan.

## **3. Componentes contenedores y presentacionales**

Una práctica común es separar la lógica de los componentes de la presentación. Esto se logra mediante la creación de componentes contenedores y componentes presentacionales.

- **Componentes contenedores:** Manejan la lógica del negocio, como la gestión del estado o la comunicación con una API.
- **Componentes presentacionales:** Se encargan de cómo se muestra la UI.

### Ejemplo:
```jsx
// Componente contenedor que maneja la lógica del estado
function ContenedorListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Simula la carga de datos
    setUsuarios(['Juan', 'María', 'Carlos']);
  }, []);

  return <ListaUsuarios usuarios={usuarios} />;
}

// Componente presentacional que muestra la lista de usuarios
function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
      ))}
    </ul>
  );
}
```
**Punto clave:** El componente `ContenedorListaUsuarios` maneja la lógica y pasa los datos al componente `ListaUsuarios`, que solo se preocupa de cómo presentar esos datos.

## **4. Organización de archivos y carpetas**

Organizar adecuadamente tus archivos y carpetas facilita la navegación y el mantenimiento del proyecto. Una estructura común es agrupar componentes por funcionalidades o características.

### Ejemplo de estructura de carpetas:
```
src/
│
├── components/
│   ├── Boton/
│   │   ├── Boton.jsx
│   │   └── Boton.css
│   ├── ListaUsuarios/
│   │   ├── ContenedorListaUsuarios.jsx
│   │   └── ListaUsuarios.jsx
│   └── Contador/
│       ├── Contador.jsx
│       └── Contador.css
│
└── App.js
```
**Punto clave:** Al tener componentes organizados por carpetas, es más fácil localizar y mantener cada pieza del código.

## **5. Uso de nombres significativos**

Elegir nombres descriptivos y consistentes para tus componentes, funciones y variables es esencial para que el código sea intuitivo y fácil de seguir.

### Ejemplo:
```jsx
// Ejemplo de un nombre significativo para un componente que muestra detalles de un usuario
function DetallesUsuario({ nombre, edad }) {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <p>Edad: {edad}</p>
    </div>
  );
}
```
**Punto clave:** El nombre `DetallesUsuario` describe claramente lo que hace el componente, facilitando su comprensión.

## Más información

- Componentes contenedores vs. presentacionales
- Nombres de componentes en React
- Organización de proyectos React
- Reutilización de componentes
- Desacoplamiento de lógica y presentación en React

## Resumen

Al estructurar componentes en React, es importante mantenerlos pequeños y enfocados, reutilizarlos cuando sea posible, y separar la lógica de la presentación. Una buena organización de archivos y el uso de nombres significativos hacen que tu código sea más fácil de mantener y entender. Estos principios te ayudarán a crear aplicaciones React más limpias y escalables.