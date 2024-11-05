# Verificación de tipos y configuración de valores predeterminados con PropTypes

Cuando trabajamos con componentes en React, es común que queramos asegurarnos de que las propiedades (`props`) que se pasan a estos componentes tengan el tipo correcto y que existan valores predeterminados para aquellos `props` que son opcionales. Para esto, React nos proporciona una herramienta muy útil llamada `PropTypes`.

`PropTypes` es una librería que nos permite definir los tipos de las `props` que un componente espera recibir, así como establecer valores predeterminados para aquellas que no se proporcionen. Esto es especialmente útil para evitar errores inesperados en tu aplicación y para mejorar la legibilidad y el mantenimiento del código.

## ¿Qué son `PropTypes` y por qué son importantes?

Los `PropTypes` actúan como una capa de verificación que asegura que los datos pasados a tus componentes cumplen con el formato esperado. Esto es fundamental para prevenir errores que pueden surgir cuando, por ejemplo, se espera un número pero se recibe una cadena de texto, lo que podría causar fallos en el comportamiento del componente.

### Ejemplo básico de `PropTypes`

A continuación, veremos cómo implementar `PropTypes` en un componente sencillo:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Saludo = ({ nombre, edad }) => {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Tienes {edad} años.</p>
    </div>
  );
};

// Definimos los tipos de las props esperadas
Saludo.propTypes = {
  nombre: PropTypes.string.isRequired, // nombre debe ser una cadena de texto y es obligatorio
  edad: PropTypes.number, // edad debe ser un número
};

// Valores predeterminados para props opcionales
Saludo.defaultProps = {
  edad: 18, // Si no se proporciona la edad, el valor predeterminado será 18
};

export default Saludo;
```

### Explicación del código

- **`PropTypes.string.isRequired`**: Aquí estamos diciendo que la `prop` `nombre` debe ser una cadena de texto y que su presencia es obligatoria. Si no se proporciona, React mostrará una advertencia en la consola durante el desarrollo.
  
- **`PropTypes.number`**: En este caso, `edad` debe ser un número, pero no es obligatorio. Si no se proporciona, el componente no lanzará una advertencia, gracias al valor predeterminado que hemos definido.

- **`defaultProps`**: Si la `prop` `edad` no se pasa al componente, tomará el valor predeterminado de `18`. Esto es útil para evitar que el componente falle o que se muestre información incorrecta.

### PropTypes disponibles

React proporciona una variedad de `PropTypes` que puedes utilizar para verificar diferentes tipos de datos. Algunos de los más comunes son:

- **`PropTypes.string`**: Verifica que la `prop` sea una cadena de texto.
- **`PropTypes.number`**: Verifica que la `prop` sea un número.
- **`PropTypes.bool`**: Verifica que la `prop` sea un valor booleano (`true` o `false`).
- **`PropTypes.array`**: Verifica que la `prop` sea un arreglo.
- **`PropTypes.object`**: Verifica que la `prop` sea un objeto.
- **`PropTypes.func`**: Verifica que la `prop` sea una función.
- **`PropTypes.node`**: Verifica que la `prop` sea cualquier cosa que React pueda renderizar (número, cadena, elemento, etc.).
- **`PropTypes.arrayOf`**: Verifica que la `prop` sea un arreglo de un tipo específico. Ejemplo: `PropTypes.arrayOf(PropTypes.number)` para un arreglo de números.
- **`PropTypes.shape`**: Verifica que la `prop` sea un objeto con una forma específica, es decir, que tenga propiedades con tipos definidos.

### Ejemplo con `PropTypes.shape`

Veamos un ejemplo donde queremos asegurarnos de que una `prop` sea un objeto con una forma específica:

```jsx
const Usuario = ({ datosUsuario }) => {
  return (
    <div>
      <h1>{datosUsuario.nombre}</h1>
      <p>Edad: {datosUsuario.edad}</p>
      <p>Correo: {datosUsuario.correo}</p>
    </div>
  );
};

Usuario.propTypes = {
  datosUsuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    correo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Usuario;
```

### Puntos clave

- **Verificación de tipos**: Implementar `PropTypes` te ayuda a detectar errores y mejorar la robustez de tus componentes, asegurando que reciban los datos en el formato esperado.
- **Valores predeterminados**: `defaultProps` es útil para definir valores por defecto para las `props` opcionales, lo que previene comportamientos inesperados cuando ciertas `props` no se pasan al componente.

## Más información

- **PropTypes**: Tipos de verificación adicionales y personalizados.
- **defaultProps**: Establecimiento de valores predeterminados avanzados.
- **PropTypes.shape**: Cómo estructurar objetos complejos dentro de `PropTypes`.

## Resumen

El uso de `PropTypes` y `defaultProps` en React es una práctica recomendada que mejora la confiabilidad y la legibilidad del código. `PropTypes` te permite verificar los tipos de datos que reciben tus componentes, mientras que `defaultProps` asegura que tus componentes funcionen incluso si algunas `props` opcionales no se proporcionan. Implementarlos correctamente te ayudará a evitar errores comunes y a mantener un código más limpio y fácil de mantener.