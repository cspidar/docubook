# Razones para dividir Props complejos y ventajas de Props simples

## ¿Por qué dividir Props complejos?

En React, los componentes reciben datos a través de `Props`. A veces, estos datos pueden volverse bastante complejos, conteniendo múltiples valores anidados en objetos o estructuras que son difíciles de manejar. Dividir estos `Props` complejos en otros más simples puede traer varias ventajas, tanto para el desarrollo como para el mantenimiento del código.

### **1. Facilita la comprensión del código**
Imagina que tienes un componente que recibe un objeto con varias propiedades anidadas:

```jsx
function PerfilUsuario({ usuario }) {
  return (
    <div>
      <h1>{usuario.nombre}</h1> {/* Nombre del usuario */}
      <p>{usuario.direccion.calle}</p> {/* Calle de la dirección del usuario */}
      <p>{usuario.direccion.ciudad}</p> {/* Ciudad de la dirección del usuario */}
    </div>
  );
}
```

Aunque este código funciona, puede ser difícil de seguir, especialmente si el objeto `usuario` tiene muchas propiedades anidadas. Dividir estas propiedades en `Props` más simples puede hacer que el componente sea más fácil de leer y mantener:

```jsx
function PerfilUsuario({ nombre, calle, ciudad }) {
  return (
    <div>
      <h1>{nombre}</h1> {/* Nombre del usuario */}
      <p>{calle}</p> {/* Calle de la dirección del usuario */}
      <p>{ciudad}</p> {/* Ciudad de la dirección del usuario */}
    </div>
  );
}
```

Ahora, el componente es más claro. No tienes que preocuparte por la estructura del objeto `usuario`, solo necesitas pasar las `Props` que el componente requiere directamente.

### **2. Mejora la reusabilidad de componentes**
Cuando un componente espera recibir `Props` simples, se vuelve más fácil reutilizarlo en diferentes partes de tu aplicación. Por ejemplo, si otro componente necesita mostrar solo el nombre y la ciudad del usuario, puedes reutilizar el componente `PerfilUsuario` fácilmente:

```jsx
<PerfilUsuario nombre="Juan Pérez" calle="-" ciudad="Madrid" />
```

No tienes que construir un objeto `usuario` completo, lo que simplifica el uso del componente.

### **3. Facilita las pruebas unitarias**
Al dividir `Props` complejos en partes más simples, cada parte del componente puede ser probada más fácilmente. Es más sencillo probar cómo el componente maneja una propiedad `nombre` en lugar de tener que configurar un objeto `usuario` completo para cada prueba:

```jsx
test('Muestra correctamente el nombre del usuario', () => {
  const { getByText } = render(<PerfilUsuario nombre="Juan Pérez" calle="-" ciudad="-" />);
  expect(getByText('Juan Pérez')).toBeInTheDocument();
});
```

### **4. Evita la sobrecarga de propiedades**
A veces, los `Props` complejos pueden contener mucha información innecesaria que no es relevante para el componente actual. Al dividirlos, puedes pasar solo los datos que el componente necesita, lo que reduce la cantidad de información que el componente tiene que procesar y gestionar.

## **Ventajas de usar Props simples**

### **1. Claridad y simplicidad**
Los `Props` simples son más fáciles de entender y trabajar con ellos. No es necesario desestructurar objetos complejos ni preocuparse por la jerarquía de datos. Esto lleva a un código más limpio y legible, facilitando su mantenimiento a largo plazo.

### **2. Mejor rendimiento**
Al pasar solo los `Props` necesarios, puedes optimizar el rendimiento del componente, ya que no se están manipulando ni renderizando datos innecesarios.

### **3. Reducción de errores**
Los `Props` simples reducen la posibilidad de cometer errores relacionados con la estructura de los datos. Al no depender de objetos complejos, disminuye la probabilidad de acceder incorrectamente a una propiedad o de tener `Props` indefinidos.

## Más información

- **Props en React**
- **Desestructuración de objetos en JavaScript**
- **Buenas prácticas en React**
- **Pruebas unitarias con Jest y React Testing Library**

## Resumen

Dividir `Props` complejos en partes más simples trae beneficios significativos, como una mejor legibilidad, mayor facilidad para reutilizar componentes, facilidad en la realización de pruebas unitarias y un mejor rendimiento. Trabajar con `Props` simples hace que el desarrollo en React sea más eficiente y menos propenso a errores.