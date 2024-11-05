# Extracción de lógica de estado con Hooks personalizados

En React, la reutilización de la lógica de estado entre componentes puede ser un desafío cuando se utiliza el `useState` y `useEffect` directamente dentro de los componentes. Afortunadamente, React ofrece una solución elegante a este problema a través de los **Hooks personalizados**. Los Hooks personalizados te permiten extraer la lógica de estado y reutilizarla en diferentes componentes, lo que simplifica tu código y lo hace más mantenible.

## ¿Qué es un Hook personalizado?

Un Hook personalizado es simplemente una función de JavaScript cuyo nombre comienza con "use" y que puede utilizar otros Hooks de React en su interior. Los Hooks personalizados permiten encapsular y reutilizar la lógica de estado de una manera que es independiente del componente en el que se usa. 

### Ejemplo básico de un Hook personalizado

Supongamos que queremos crear un Hook personalizado que maneje un contador, el cual puede incrementar, decrementar y reiniciar el valor. 

Aquí tienes un ejemplo:

```javascript
// Creamos nuestro Hook personalizado llamado useCounter
function useCounter(valorInicial = 0) {
  // Definimos el estado interno del contador
  const [contador, setContador] = React.useState(valorInicial);

  // Función para incrementar el contador
  const incrementar = () => setContador(contador + 1);

  // Función para decrementar el contador
  const decrementar = () => setContador(contador - 1);

  // Función para reiniciar el contador al valor inicial
  const reiniciar = () => setContador(valorInicial);

  // Devolvemos el contador y las funciones en un array
  return [contador, incrementar, decrementar, reiniciar];
}

// Ejemplo de cómo usar este Hook personalizado en un componente
function Contador() {
  // Usamos nuestro Hook personalizado
  const [contador, incrementar, decrementar, reiniciar] = useCounter(10);

  return (
    <div>
      <p>Valor del contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}
```

### Detalles importantes sobre los Hooks personalizados

- **Reutilización de lógica**: Como puedes ver en el ejemplo anterior, la lógica para manejar el contador está encapsulada dentro del Hook personalizado `useCounter`. Esto permite que la misma lógica sea utilizada en cualquier componente que necesite un contador, sin duplicar el código.

- **Nombres descriptivos**: Es importante dar nombres descriptivos a tus Hooks personalizados para que su propósito sea claro para cualquier desarrollador que lea tu código.

- **Independencia del componente**: Un Hook personalizado no se preocupa por el diseño o la estructura del componente en el que se usa. Solo se enfoca en manejar la lógica de estado, lo que promueve un código más modular y fácil de mantener.

### Ejemplo avanzado: Hook para manejar una solicitud HTTP

Vamos a crear un Hook personalizado para manejar una solicitud HTTP, algo muy común en aplicaciones React.

```javascript
// Creamos un Hook personalizado llamado useFetch
function useFetch(url) {
  // Definimos los estados para manejar los datos, la carga y los errores
  const [datos, setDatos] = React.useState(null);
  const [cargando, setCargando] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Usamos useEffect para realizar la solicitud cuando el componente se monta
  React.useEffect(() => {
    // Función para realizar la solicitud
    const fetchData = async () => {
      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        setDatos(data);  // Actualizamos los datos
      } catch (err) {
        setError(err);  // Capturamos y establecemos el error
      } finally {
        setCargando(false);  // Indicamos que la carga ha finalizado
      }
    };

    fetchData();
  }, [url]);  // El efecto se ejecutará de nuevo si cambia la URL

  // Devolvemos los estados para que el componente pueda usarlos
  return { datos, cargando, error };
}

// Ejemplo de uso del Hook personalizado en un componente
function DatosUsuario({ userId }) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const { datos, cargando, error } = useFetch(url);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{datos.name}</h2>
      <p>Email: {datos.email}</p>
    </div>
  );
}
```

### Puntos clave a tener en cuenta

- **Control de efectos**: En el ejemplo del Hook `useFetch`, se utiliza `useEffect` para realizar la solicitud HTTP. Es importante recordar que cualquier Hook personalizado que dependa de efectos secundarios debe manejarlos de manera adecuada, como asegurarse de limpiar efectos si es necesario.

- **Composición de Hooks**: Puedes combinar múltiples Hooks personalizados dentro de un mismo componente o incluso dentro de otro Hook personalizado, lo que te permite construir funcionalidades complejas de forma modular.

## Más información

- Hooks personalizados
- React useState y useEffect
- Reutilización de lógica en React
- Modularidad en React

## Resumen

Los Hooks personalizados son una poderosa herramienta en React para encapsular y reutilizar la lógica de estado entre componentes. Permiten un código más limpio, modular y fácil de mantener. Al crear un Hook personalizado, es crucial centrarse en un propósito claro y usar nombres descriptivos para mejorar la comprensión del código. Estos Hooks permiten manejar lógica compleja, como solicitudes HTTP, de manera sencilla y reutilizable en toda tu aplicación.