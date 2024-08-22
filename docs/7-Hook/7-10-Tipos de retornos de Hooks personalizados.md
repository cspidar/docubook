# Tipos de retornos de Hooks personalizados

## Introducción

En React, los Hooks personalizados son una herramienta poderosa que nos permite reutilizar lógica de estado y efectos entre diferentes componentes. Al crear un Hook personalizado, una de las decisiones clave es qué tipo de valor o valores devolver. En este apartado, exploraremos los distintos tipos de retornos que puedes utilizar en tus Hooks personalizados y cómo cada uno de ellos puede ser útil según el caso.

## Retorno de valores primitivos

Uno de los tipos de retorno más simples que puede tener un Hook personalizado es un valor primitivo, como un número, una cadena o un booleano. Esto es útil cuando tu Hook realiza una operación que calcula o determina un valor único.

```jsx
// Un Hook personalizado que verifica si el usuario está online
function useIsOnline() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline; // Retorna un valor booleano
}

// Uso del Hook en un componente
function Status() {
  const isOnline = useIsOnline();

  return (
    <div>
      {isOnline ? "Estás en línea" : "Estás desconectado"}
    </div>
  );
}
```

**Punto clave:** Este tipo de retorno es ideal para casos en los que el Hook maneja una sola pieza de información que el componente necesita.

## Retorno de objetos

En situaciones donde tu Hook necesita devolver múltiples valores relacionados, un objeto es una excelente opción. Esto permite encapsular varios estados o funciones en una estructura fácil de usar.

```jsx
// Un Hook personalizado que maneja la lógica de un contador
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {
    count,       // Estado actual del contador
    increment,   // Función para incrementar el contador
    decrement,   // Función para decrementar el contador
    reset        // Función para reiniciar el contador
  };
}

// Uso del Hook en un componente
function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}
```

**Punto clave:** Utilizar objetos como retorno es útil para agrupar estados y funciones que trabajan en conjunto.

## Retorno de arrays

Otra forma común de devolver múltiples valores desde un Hook es utilizando un array. Esto es similar a la estructura que retorna `useState`, lo que hace que el patrón sea familiar y fácil de entender.

```jsx
// Un Hook personalizado que maneja el estado de un modal
function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
}

// Uso del Hook en un componente
function ModalComponent() {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <div>
          <p>Contenido del Modal</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
```

**Punto clave:** Este patrón es ideal cuando el orden de los valores es claro y los nombres pueden derivarse del contexto.

## Retorno de funciones

En algunos casos, es posible que un Hook personalizado no necesite devolver un valor de estado, sino únicamente una o más funciones. Esto es útil cuando el Hook encapsula una acción que no requiere almacenar estado interno, sino solo realizar una operación.

```jsx
// Un Hook personalizado para copiar texto al portapapeles
function useCopyToClipboard() {
  const copy = text => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Texto copiado al portapapeles");
    });
  };

  return copy;
}

// Uso del Hook en un componente
function Clipboard() {
  const copyToClipboard = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard("¡Hola Mundo!")}>
        Copiar "¡Hola Mundo!"
      </button>
    </div>
  );
}
```

**Punto clave:** Retornar funciones es útil cuando el Hook realiza una operación específica que no requiere un estado persistente.

## Más información

- Hooks personalizados
- React Hooks
- Manejo de estado en React
- Buenas prácticas en el diseño de Hooks

## Resumen

Los Hooks personalizados en React pueden devolver distintos tipos de valores, desde primitivos y objetos hasta arrays y funciones. La elección del tipo de retorno depende de la naturaleza de la lógica que encapsula el Hook y de cómo se espera que los componentes consuman esos valores. Entender estos patrones te permitirá crear Hooks más flexibles y reutilizables.