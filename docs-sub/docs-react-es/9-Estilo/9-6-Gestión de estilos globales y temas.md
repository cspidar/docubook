# Gestión de estilos globales y temas

Cuando trabajamos en aplicaciones React, el estilo y la presentación de nuestros componentes son tan importantes como la funcionalidad. Gestionar los estilos globales y los temas de manera eficiente puede hacer que tu aplicación no solo luzca bien, sino que también sea más fácil de mantener y escalar. Vamos a explorar cómo puedes manejar estos aspectos de manera efectiva en React.

## ¿Qué son los estilos globales?

Los estilos globales son reglas CSS que se aplican a toda la aplicación. A diferencia de los estilos específicos de componentes, los estilos globales afectan a todos los elementos que coinciden con los selectores definidos. Estos se suelen definir en un archivo CSS separado, que se importa al inicio de la aplicación.

### Ejemplo de estilos globales

Imaginemos que tienes un archivo `global.css`:

```css
/* global.css */

/* Aplicar un fondo gris claro a todo el cuerpo de la página */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

/* Hacer que todos los encabezados h1 sean de color azul oscuro */
h1 {
  color: #003366;
}

/* Establecer un margen predeterminado para todos los párrafos */
p {
  margin: 1em 0;
}
```

Para aplicar estos estilos globales en tu aplicación React, simplemente importa el archivo CSS en el punto de entrada de tu aplicación, normalmente `index.js` o `App.js`:

```javascript
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';  // Importa los estilos globales
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Con este enfoque, todos los componentes de tu aplicación se verán afectados por las reglas CSS definidas en `global.css`.

## ¿Qué es un tema en React?

Un tema en React se refiere a un conjunto de estilos predefinidos que puedes aplicar dinámicamente a tu aplicación. Los temas permiten cambiar el aspecto general de tu aplicación, como los colores, fuentes y otros estilos, sin tener que modificar los componentes individuales.

### Implementación básica de temas

Supongamos que queremos que nuestra aplicación tenga un tema claro y un tema oscuro, y que el usuario pueda cambiar entre ellos. Podemos lograr esto utilizando el contexto de React (`React Context`) y un archivo CSS para cada tema.

1. **Definir los estilos para cada tema en archivos CSS:**

   ```css
   /* light-theme.css */
   :root {
     --background-color: white;
     --text-color: black;
   }

   /* dark-theme.css */
   :root {
     --background-color: black;
     --text-color: white;
   }
   ```

2. **Crear un contexto para el tema:**

   ```javascript
   // ThemeContext.js

   import React, { createContext, useState } from 'react';

   export const ThemeContext = createContext();

   export const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState('light');

     const toggleTheme = () => {
       setTheme(theme === 'light' ? 'dark' : 'light');
     };

     return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   };
   ```

3. **Aplicar el tema en el componente principal:**

   ```javascript
   // App.js

   import React, { useContext } from 'react';
   import { ThemeContext, ThemeProvider } from './ThemeContext';
   import './light-theme.css';
   import './dark-theme.css';

   function App() {
     const { theme, toggleTheme } = useContext(ThemeContext);

     return (
       <div className={`App ${theme}-theme`}>
         <button onClick={toggleTheme}>
           Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
         </button>
         <h1>Hola, Mundo!</h1>
         <p>Este es un ejemplo de cambio de temas en React.</p>
       </div>
     );
   }

   export default function Root() {
     return (
       <ThemeProvider>
         <App />
       </ThemeProvider>
     );
   }
   ```

En este ejemplo, utilizamos clases CSS (`light-theme` y `dark-theme`) para aplicar diferentes estilos dependiendo del tema seleccionado. La función `toggleTheme` permite al usuario cambiar entre los temas claro y oscuro.

## Puntos clave a considerar

- **Variables CSS (`:root`)**: Usar variables CSS en los temas facilita la modificación y reutilización de estilos a lo largo de la aplicación.
- **Contexto de React**: Es ideal para compartir el estado del tema entre múltiples componentes sin necesidad de pasar props manualmente.
- **Arquitectura escalable**: Mantener los estilos temáticos en archivos separados y manejarlos mediante clases CSS o variables, permite escalar la aplicación y manejar múltiples temas con facilidad.

## Más información

- React Context API
- Variables CSS (`:root`)
- Gestión de temas en aplicaciones web
- Estilos globales vs estilos de componentes

## Resumen

La gestión de estilos globales y temas en React es crucial para mantener una aplicación consistente y fácil de mantener. Los estilos globales se aplican en toda la aplicación, mientras que los temas permiten cambiar dinámicamente el aspecto de la aplicación mediante el uso de variables CSS y la API de contexto de React. Implementar ambos de manera efectiva puede mejorar significativamente la experiencia de desarrollo y la usabilidad de tu aplicación.