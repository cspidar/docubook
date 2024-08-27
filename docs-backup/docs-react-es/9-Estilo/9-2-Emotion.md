# Emotion

## ¿Qué es Emotion?

Emotion es una popular librería de JavaScript utilizada en React para aplicar estilos en línea (CSS-in-JS) de manera eficiente y dinámica. A diferencia del enfoque tradicional de CSS, donde los estilos se separan del código JavaScript, Emotion permite escribir estilos directamente dentro de los componentes, proporcionando una mayor flexibilidad y mantenibilidad en el desarrollo de aplicaciones modernas.

### ¿Por qué usar Emotion?

Emotion es una excelente herramienta porque combina lo mejor de ambos mundos: la simplicidad de escribir CSS con la potencia de JavaScript. Aquí te dejo algunas razones para considerar Emotion en tus proyectos:

1. **Estilos Dinámicos:** Puedes cambiar los estilos en función del estado o las props de un componente.
2. **Mejor Rendimiento:** Genera clases optimizadas y utiliza el concepto de "CSS-in-JS" para reducir la cantidad de CSS cargado.
3. **Compatibilidad:** Emotion funciona perfectamente con cualquier sistema de diseño o framework de UI.
4. **Facilidad de Uso:** Con una sintaxis amigable y componentes fáciles de escribir, es ideal para proyectos de cualquier tamaño.

## Usando Emotion en un Componente React

Para empezar a usar Emotion en React, primero debes instalar la librería en tu proyecto. Puedes hacerlo con el siguiente comando:

```bash
npm install @emotion/react
```

Una vez instalada, puedes comenzar a aplicar estilos a tus componentes. Aquí te muestro cómo:

### Ejemplo 1: Estilos Básicos en un Componente

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Definimos un estilo básico para un botón
const estiloBoton = css`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #3700b3;
  }
`;

function Boton() {
  return (
    // Aplicamos el estilo usando la sintaxis de Emotion
    <button css={estiloBoton}>
      Haz clic aquí
    </button>
  );
}

export default Boton;
```

### Explicación del Código

- **`css`**: Esta función se importa de `@emotion/react` y se utiliza para definir estilos CSS como si estuvieras escribiéndolos en un archivo CSS, pero directamente dentro del archivo JS.
- **`@jsxImportSource @emotion/react`**: Esta línea es necesaria para que Emotion funcione correctamente con la sintaxis de JSX.
- **`&:hover`**: Define un estilo que se aplicará cuando el usuario pase el cursor sobre el botón.

### Ejemplo 2: Estilos Dinámicos con Props

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Boton({ esPrimario }) {
  return (
    <button
      css={css`
        background-color: ${esPrimario ? '#6200ea' : '#03dac6'};
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        &:hover {
          background-color: ${esPrimario ? '#3700b3' : '#018786'};
        }
      `}
    >
      {esPrimario ? 'Botón Primario' : 'Botón Secundario'}
    </button>
  );
}

export default Boton;
```

### Explicación del Código

- **`esPrimario`**: Es una prop que decide si el botón debe ser primario (con un color púrpura) o secundario (con un color verde).
- **Interpolación de Estilos**: Usamos `${}` dentro del `css` para aplicar estilos de manera condicional basados en la prop `esPrimario`.

### Integración con Temas

Emotion también permite trabajar con temas, lo que facilita la gestión de estilos globales en aplicaciones grandes. Aquí un pequeño ejemplo:

```jsx
/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';

const tema = {
  colores: {
    primario: '#6200ea',
    secundario: '#03dac6',
  },
  tipografia: {
    tamaño: '16px',
  },
};

function Boton() {
  return (
    <ThemeProvider theme={tema}>
      <button
        css={(theme) => css`
          background-color: ${theme.colores.primario};
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: ${theme.tipografia.tamaño};
          &:hover {
            background-color: ${theme.colores.secundario};
          }
        `}
      >
        Botón Temático
      </button>
    </ThemeProvider>
  );
}

export default Boton;
```

### Explicación del Código

- **`ThemeProvider`**: Envuelve el componente y proporciona el tema definido a todos los componentes hijos.
- **`theme`**: Es el objeto que contiene los valores de colores, tipografías, y otros estilos que pueden ser reutilizados en diferentes componentes.

## Más información

- **CSS-in-JS**
- **Optimización de rendimiento en React**
- **Gestión de temas en aplicaciones React**
- **Estilización dinámica en componentes de React**

## Resumen

Emotion es una herramienta poderosa para aplicar estilos en React de manera eficiente y dinámica. Permite escribir CSS directamente dentro de tus componentes usando JavaScript, lo que facilita la creación de estilos dinámicos y temas reutilizables. Emotion no solo mejora el rendimiento, sino que también proporciona una gran flexibilidad para personalizar la apariencia de tu aplicación, todo mientras mantiene el código limpio y organizado.