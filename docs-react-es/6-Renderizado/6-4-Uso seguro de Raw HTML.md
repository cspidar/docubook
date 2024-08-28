# Uso seguro de Raw HTML

El uso de HTML "en bruto" (Raw HTML) en React puede ser necesario en ciertas ocasiones, como cuando quieres insertar código HTML directamente en tus componentes. Sin embargo, esto debe hacerse con cuidado para evitar problemas de seguridad como ataques de Cross-Site Scripting (XSS). En este artículo, te mostraré cómo manejar HTML en bruto de manera segura dentro de tus aplicaciones React.

## Insertar HTML en bruto usando `dangerouslySetInnerHTML`

En React, la forma estándar de insertar HTML directamente en el DOM es mediante el atributo `dangerouslySetInnerHTML`. A pesar de su nombre intimidante, este método puede ser seguro si se usa correctamente. Veamos un ejemplo:

```jsx
import React from 'react';

function ComponenteConHTML() {
  // HTML que queremos insertar
  const htmlString = "<p>Este es un <strong>texto</strong> con HTML.</p>";

  return (
    <div>
      <h2>Insertando HTML en bruto</h2>
      {/* Usamos dangerouslySetInnerHTML para insertar el HTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
}

export default ComponenteConHTML;
```

### Desglose del ejemplo:

1. **`dangerouslySetInnerHTML`**: Es un atributo especial en React que permite insertar HTML directamente. El nombre "dangerously" resalta la necesidad de tener cuidado al usarlo.
2. **`__html`**: Este es el nombre de la propiedad en el objeto que pasas a `dangerouslySetInnerHTML`. Es donde se coloca la cadena de HTML que deseas renderizar.

### Precauciones al usar `dangerouslySetInnerHTML`:

- **Validar y limpiar el HTML**: Antes de insertar HTML desde fuentes externas, debes asegurarte de que no contenga scripts maliciosos. Utiliza bibliotecas como `DOMPurify` para limpiar el HTML.
  
  ```jsx
  import DOMPurify from 'dompurify';

  const htmlString = "<script>alert('Hackeado!')</script><p>Texto seguro</p>";
  const cleanHTML = DOMPurify.sanitize(htmlString);
  ```

- **Evitar insertar HTML desde usuarios no confiables**: Si el HTML proviene de una entrada del usuario o de una fuente no confiable, siempre debes limpiarlo para prevenir XSS.

## Ejemplo práctico con validación

Vamos a mejorar nuestro ejemplo anterior añadiendo un proceso de sanitización usando `DOMPurify`:

```jsx
import React from 'react';
import DOMPurify from 'dompurify';

function ComponenteSeguroConHTML() {
  // HTML potencialmente inseguro
  const htmlString = "<script>alert('Hackeado!')</script><p>Texto seguro</p>";
  // Limpiamos el HTML antes de insertarlo
  const cleanHTML = DOMPurify.sanitize(htmlString);

  return (
    <div>
      <h2>Insertando HTML limpio</h2>
      {/* Insertamos el HTML ya sanitizado */}
      <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </div>
  );
}

export default ComponenteSeguroConHTML;
```

### ¿Qué hace `DOMPurify`?

- **Elimina scripts maliciosos**: `DOMPurify` es una biblioteca que analiza y limpia el HTML, eliminando cualquier código que pueda ser peligroso, como `<script>` o `<img onerror="...">`.

## Más información

- **Cross-Site Scripting (XSS)**
- **`dangerouslySetInnerHTML` en la documentación de React**
- **Sanitización de HTML con DOMPurify**

## Resumen

El uso de HTML en bruto en React debe hacerse con extrema precaución, utilizando siempre técnicas de sanitización como `DOMPurify` para prevenir vulnerabilidades de seguridad. Aunque `dangerouslySetInnerHTML` es la herramienta para este propósito, su nombre nos recuerda que debemos estar atentos al origen y contenido del HTML que insertamos.