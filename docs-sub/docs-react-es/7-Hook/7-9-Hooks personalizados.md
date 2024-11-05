# Hooks personalizados

Los **Hooks personalizados** en React son una poderosa herramienta que te permite extraer y reutilizar la lógica de estado entre diferentes componentes. Al igual que los Hooks integrados de React como `useState`, `useEffect` y `useRef`, los Hooks personalizados permiten encapsular lógica relacionada con el estado o efectos en funciones que pueden ser reutilizadas en cualquier parte de tu aplicación.

## ¿Qué es un Hook personalizado?

Un Hook personalizado es simplemente una función de JavaScript cuyo nombre comienza con `use` y que puede llamar a otros Hooks dentro de ella. La clave de un Hook personalizado es que puede ser utilizado como cualquier otro Hook en un componente de React, permitiendo compartir lógica compleja de una manera sencilla y mantenible.

### Ejemplo básico de un Hook personalizado

Imaginemos que queremos crear un Hook personalizado para manejar el estado de una entrada de texto. Este Hook gestionará el valor del texto y la función para actualizarlo.

```javascript
// Creamos un Hook personalizado llamado useInputValue
function useInputValue(initialValue) {
  // Usamos el Hook useState para manejar el valor del input
  const [value, setValue] = React.useState(initialValue);

  // Retornamos el valor actual y una función para actualizarlo
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

// Ejemplo de uso del Hook personalizado en un componente
function MyInputComponent() {
  // Utilizamos nuestro Hook personalizado
  const nameInput = useInputValue("");

  return (
    <div>
      <input type="text" {...nameInput} />
      <p>El valor del input es: {nameInput.value}</p>
    </div>
  );
}
```

### ¿Qué está pasando aquí?

1. **Encapsulamiento de lógica**: El Hook `useInputValue` encapsula toda la lógica necesaria para manejar el estado de una entrada de texto. Esto incluye tanto el valor como la función para actualizarlo.
2. **Reutilización**: Puedes reutilizar este Hook en cualquier otro componente que necesite manejar una entrada de texto sin tener que duplicar código.
3. **Simplificación del componente**: El componente `MyInputComponent` se simplifica al usar `useInputValue`, lo que hace que el código sea más limpio y fácil de entender.

### Ventajas de los Hooks personalizados

- **Reutilización de lógica**: Puedes reutilizar la misma lógica en diferentes componentes sin tener que duplicar código.
- **Legibilidad**: Al mover la lógica compleja fuera de los componentes, haces que estos sean más fáciles de leer y mantener.
- **Desacoplamiento**: Los Hooks personalizados permiten desacoplar la lógica de la interfaz de usuario, lo que facilita su prueba y mantenimiento.

### Creando un Hook personalizado más complejo

Supongamos que necesitamos un Hook que nos permita saber si una ventana del navegador tiene un ancho mayor a un valor determinado. Este Hook se actualizará cada vez que se redimensione la ventana.

```javascript
// Creamos un Hook personalizado llamado useWindowWidth
function useWindowWidth(threshold) {
  // Usamos useState para almacenar el ancho de la ventana
  const [isWide, setIsWide] = React.useState(window.innerWidth > threshold);

  // Usamos useEffect para actualizar el estado cuando la ventana se redimensiona
  React.useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > threshold);
    };

    // Escuchamos el evento de redimensionamiento
    window.addEventListener('resize', handleResize);

    // Limpieza: removemos el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold]);

  return isWide;
}

// Ejemplo de uso del Hook personalizado en un componente
function MyResponsiveComponent() {
  // Utilizamos nuestro Hook personalizado
  const isWindowWide = useWindowWidth(768);

  return (
    <div>
      {isWindowWide ? <p>La ventana es ancha</p> : <p>La ventana es estrecha</p>}
    </div>
  );
}
```

### ¿Qué aprendimos de este ejemplo?

1. **Lógica de efectos**: El Hook `useWindowWidth` utiliza `useEffect` para manejar un evento del DOM y actualizar el estado en consecuencia.
2. **Desempeño y limpieza**: Añadir y remover eventos de manera adecuada ayuda a mantener un buen desempeño y evita fugas de memoria.
3. **Modularidad**: El Hook es completamente reutilizable en cualquier componente que necesite saber si la ventana es más ancha que un determinado umbral.

## Más información

- **Hooks en React**
- **Reutilización de lógica con Hooks personalizados**
- **Mejores prácticas en la creación de Hooks personalizados**
- **Optimización y limpieza en Hooks**

## Resumen

Los Hooks personalizados permiten encapsular y reutilizar lógica relacionada con el estado en funciones reutilizables, lo que facilita la mantenibilidad y legibilidad del código. Desde la gestión de entradas hasta la monitorización de eventos, los Hooks personalizados son una herramienta esencial en React para mantener el código limpio, modular y eficiente.