# useContext

El Hook `useContext` es una herramienta poderosa en React que nos permite compartir datos entre componentes sin tener que pasar las props manualmente en cada nivel de la jerarquía de componentes. Este enfoque es especialmente útil cuando tenemos valores que necesitan ser accesibles por muchos componentes en diferentes niveles de la aplicación, como el tema de la interfaz, el idioma de la aplicación o la autenticación del usuario.

## ¿Qué es el Contexto en React?

El contexto en React es como una "caja" que almacena valores globales para nuestra aplicación. Estos valores pueden ser accedidos por cualquier componente que esté "suscrito" a este contexto. Sin embargo, a diferencia de otras técnicas como pasar props, el contexto permite que cualquier componente, sin importar lo profundo que esté en el árbol de componentes, acceda a estos valores sin la necesidad de que sus padres los pasen manualmente.

### Ejemplo básico de `useContext`

Veamos un ejemplo sencillo para entender cómo se utiliza `useContext`. Supongamos que estamos creando una aplicación donde necesitamos compartir un tema de color entre varios componentes.

Primero, definimos un contexto:

```javascript
import React, { createContext, useContext } from 'react';

// Creamos el contexto con un valor por defecto
const TemaContexto = createContext('claro');

const ComponenteHijo = () => {
  // Accedemos al valor del contexto usando useContext
  const tema = useContext(TemaContexto);

  // Usamos el valor del contexto en el componente
  return (
    <div style={{ background: tema === 'claro' ? '#fff' : '#333', color: tema === 'claro' ? '#000' : '#fff' }}>
      {/* Mostramos el tema actual */}
      El tema actual es {tema}
    </div>
  );
};

const ComponentePadre = () => {
  // Proveemos un valor diferente al contexto
  return (
    <TemaContexto.Provider value="oscuro">
      <ComponenteHijo />
    </TemaContexto.Provider>
  );
};

export default ComponentePadre;
```

### Explicación del ejemplo

1. **Definición del Contexto**: Usamos `createContext` para crear un nuevo contexto llamado `TemaContexto`. El valor inicial es `'claro'`, lo que significa que si un componente no tiene un proveedor de contexto, utilizará este valor por defecto.

2. **Proveer el Contexto**: En `ComponentePadre`, usamos `TemaContexto.Provider` para establecer el valor del tema en `'oscuro'`. Todos los componentes hijos dentro de `ComponentePadre` tendrán acceso a este valor.

3. **Consumir el Contexto**: En `ComponenteHijo`, usamos `useContext(TemaContexto)` para acceder al valor del tema. Dependiendo del valor del tema, el fondo y el color del texto del `div` cambiarán.

### Beneficios de usar `useContext`

- **Simplicidad**: `useContext` elimina la necesidad de pasar props manualmente a través de múltiples niveles de componentes.
- **Mantenimiento**: Con `useContext`, es más fácil mantener el código, ya que no necesitas modificar múltiples componentes solo para pasar una prop.
- **Desempeño**: Aunque `useContext` es potente, debes usarlo con cuidado. Cuando el valor del contexto cambia, todos los componentes que consumen ese contexto se vuelven a renderizar, lo que podría impactar el rendimiento si no se gestiona adecuadamente.

### Consideraciones al usar `useContext`

- **Re-renderizados innecesarios**: Ten cuidado al actualizar los valores del contexto, ya que esto puede desencadenar re-renderizados de todos los componentes que dependen de él.
- **Evitar sobreuso**: Aunque `useContext` es útil, no debería ser tu primera opción para manejar la mayoría de las comunicaciones entre componentes. Úsalo cuando realmente necesites compartir valores globales.

## Más información

- **Context API**
- **Hooks en React**
- **Optimización de re-renderizados en React**
- **Gestión de estado global**

## Resumen

El Hook `useContext` es una herramienta fundamental en React para compartir valores globales entre componentes sin la necesidad de pasar props manualmente en cada nivel. Es ideal para manejar temas, autenticación, o configuraciones globales que necesitan ser accesibles en toda la aplicación. Sin embargo, es importante usarlo con precaución para evitar re-renderizados innecesarios que puedan afectar el rendimiento de la aplicación.