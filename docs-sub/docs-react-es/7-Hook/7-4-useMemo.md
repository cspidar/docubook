# useMemo

## ¿Qué es `useMemo`?

`useMemo` es un **Hook de React** que te permite memorizar ("cachear") el valor calculado de una función, para evitar que esta se ejecute innecesariamente en cada renderizado del componente. Es especialmente útil cuando la función es costosa en términos de rendimiento, es decir, cuando realiza cálculos complejos o procesa una gran cantidad de datos.

### ¿Cómo funciona `useMemo`?

`useMemo` toma dos argumentos:

1. **Una función**: Esta función contiene la lógica para calcular el valor que queremos memorizar.
2. **Un array de dependencias**: Son las variables que, cuando cambian, provocan que la función se vuelva a ejecutar y se recalcule el valor memorizado.

React ejecutará la función solo si alguna de las dependencias cambia. Si ninguna dependencia cambia, React devolverá el valor memorizado de la última vez que se ejecutó la función.

### Ejemplo básico de `useMemo`

Imaginemos que tenemos un componente que realiza un cálculo costoso, como encontrar el número primo más grande por debajo de un número dado. Sin `useMemo`, esta función se ejecutaría cada vez que el componente se renderice, lo cual puede ralentizar nuestra aplicación si el cálculo es complejo.

```jsx
import React, { useMemo, useState } from 'react';

// Función para encontrar el número primo más grande por debajo de un número dado
function encontrarMayorPrimo(n) {
  let mayorPrimo = 2;
  for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) {
      mayorPrimo = i;
    }
  }
  return mayorPrimo;
}

// Función auxiliar para verificar si un número es primo
function esPrimo(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

function ComponentePrimo() {
  const [numero, setNumero] = useState(100000);

  // Memorizar el valor del mayor primo utilizando useMemo
  const mayorPrimo = useMemo(() => encontrarMayorPrimo(numero), [numero]);

  return (
    <div>
      <h2>El número primo más grande por debajo de {numero} es: {mayorPrimo}</h2>
      <button onClick={() => setNumero(numero + 1000)}>Incrementar número</button>
    </div>
  );
}

export default ComponentePrimo;
```

### Explicación del ejemplo

1. **Función `encontrarMayorPrimo`**: Esta función realiza un cálculo costoso, ya que tiene que recorrer todos los números hasta `n` para encontrar el número primo más grande.
2. **Uso de `useMemo`**: Al usar `useMemo`, estamos indicando a React que memorice el resultado de `encontrarMayorPrimo(numero)`. Esto significa que solo se recalculará cuando `numero` cambie.
3. **Optimización del rendimiento**: Si `numero` no cambia, el componente se renderizará rápidamente porque no es necesario volver a calcular el número primo.

### ¿Cuándo usar `useMemo`?

**Usa `useMemo` cuando:**

- Tienes cálculos costosos que no deben ejecutarse en cada renderizado.
- Quieres optimizar el rendimiento de tu aplicación, especialmente en componentes que se renderizan con frecuencia.
- Tienes una función que depende de datos externos (como el estado o las props) y que solo debería recalcularse cuando esos datos cambien.

**Evita `useMemo` cuando:**

- El cálculo es trivial y no impacta significativamente en el rendimiento.
- El código es lo suficientemente simple sin `useMemo` y su inclusión lo haría más complejo innecesariamente.

## Más información

- **Hooks en React**
- **Optimización de rendimiento**
- **useCallback**
- **Memorización en programación**
- **Renderizado en React**

## Resumen

`useMemo` es un Hook poderoso que te permite optimizar el rendimiento de tus componentes en React al memorizar resultados de cálculos costosos. Solo se recalcula el valor cuando cambian las dependencias especificadas, lo que puede mejorar significativamente la eficiencia de la aplicación en escenarios complejos. Es importante usar `useMemo` de manera estratégica para obtener beneficios reales sin complicar innecesariamente el código.