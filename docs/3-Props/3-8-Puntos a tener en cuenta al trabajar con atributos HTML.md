# Puntos a tener en cuenta al trabajar con atributos HTML

Cuando trabajamos con React, es importante recordar que los atributos HTML en JSX (la sintaxis que se usa para escribir componentes en React) tienen algunas peculiaridades. A continuación, repasaremos los aspectos más importantes que debes tener en cuenta al manejar estos atributos para que tus componentes funcionen correctamente y tu código sea más limpio y mantenible.

## 1. **Atributos camelCase**
  
En HTML tradicional, los atributos suelen escribirse en minúsculas. Sin embargo, en JSX, la convención es escribirlos en `camelCase`. Esto significa que, en lugar de `class`, usaremos `className`, y en lugar de `onclick`, usaremos `onClick`.

```jsx
// Ejemplo incorrecto
<button class="mi-boton" onclick="handleClick()">Haz clic</button>

// Ejemplo correcto en JSX
<button className="mi-boton" onClick={handleClick}>Haz clic</button>
```

**¡Punto clave!**: Asegúrate de cambiar todos los atributos HTML tradicionales a su equivalente en `camelCase` cuando trabajes en JSX para evitar errores.

## 2. **Atributos booleanos**

En HTML tradicional, los atributos booleanos (como `disabled` o `checked`) se pueden escribir solos. En JSX, sin embargo, debes asignarles un valor, generalmente `true` o `false`.

```jsx
// HTML tradicional
<input type="checkbox" checked>

// JSX correcto
<input type="checkbox" checked={true} />
```

Si quieres que el atributo no esté presente, simplemente asigna `false`:

```jsx
<input type="checkbox" checked={false} />
```

**¡Punto clave!**: En JSX, siempre asigna un valor a los atributos booleanos para garantizar que se comporten como esperas.

## 3. **Atributos que esperan funciones**

Algunos atributos, como `onClick`, `onChange`, etc., esperan una función en lugar de una cadena de texto. En React, es crucial pasar una referencia a la función, no su ejecución directa.

```jsx
// Ejemplo incorrecto
<button onClick={handleClick()}>Haz clic</button>

// Ejemplo correcto
<button onClick={handleClick}>Haz clic</button>
```

En el ejemplo incorrecto, la función `handleClick` se ejecuta inmediatamente en lugar de ser pasada como referencia, lo que suele causar problemas.

**¡Punto clave!**: Cuando asignes funciones a atributos de evento, pasa la referencia a la función, no la ejecutes directamente.

## 4. **Atributos personalizados y `data-*`**

React permite usar atributos personalizados mediante el prefijo `data-`. Estos atributos son útiles para almacenar información adicional en los elementos HTML.

```jsx
// Ejemplo de atributo personalizado
<div data-id="123" data-role="admin">Contenido</div>
```

Estos atributos se pueden acceder en JavaScript utilizando `dataset`:

```javascript
const elemento = document.querySelector('div');
console.log(elemento.dataset.id); // "123"
console.log(elemento.dataset.role); // "admin"
```

**¡Punto clave!**: Utiliza `data-*` para atributos personalizados y accede a ellos a través de `dataset` en JavaScript.

## 5. **Atributos de estilo**

En JSX, el atributo `style` se maneja de forma diferente a como lo harías en HTML. En lugar de una cadena de texto, se espera un objeto con las propiedades CSS en formato `camelCase`.

```jsx
// Ejemplo incorrecto en JSX
<div style="background-color: red; color: white;">Texto</div>

// Ejemplo correcto en JSX
<div style={{ backgroundColor: 'red', color: 'white' }}>Texto</div>
```

**¡Punto clave!**: En JSX, usa un objeto para definir estilos en línea y emplea `camelCase` para las propiedades CSS.

## Más información

- **camelCase en JSX**
- **Atributos booleanos en React**
- **Eventos en React**
- **data-* en HTML**
- **Estilos en línea con React**

## Resumen

Trabajar con atributos HTML en JSX requiere adaptaciones como el uso de `camelCase` para los nombres de atributos, la asignación explícita de valores a los booleanos, y el manejo correcto de funciones en los eventos. Además, al definir estilos en línea, es esencial usar un objeto con propiedades en `camelCase`. Estos puntos son fundamentales para asegurar un código React más eficiente y sin errores.