# Qué es React

## Introducción

React fue creada por Facebook en 2013 como herramienta para crear una interfaz dinámica para diversos sitios web. El **DOM virtual** (representación de los elementos del DOM construida con componentes React) es la base de React.

React es una:

- librería JavaScript 
- centrada en la interfaz de ususario UI

Conocida también como React JS, ReactJS o React.js, es una librería de JavaScript front-end gratuita y de código abierto para crear interfaces de usuario basadas en componentes de interfaz de usuario. Lo mantiene Meta (la empresa matriz de Facebook) y una creciente comunidad de desarrolladores individuales y empresas de desarrollo.

Cuando se lanzó inicialmente React JS, esencialmente reunió la velocidad de JavaScript y una nueva forma de renderizar páginas. 

## React se basa en componentes

React permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Se pueden crear componentes personalizados de React para combinarlos y  formar pantallas, páginas y aplicaciones.

## React es declarativo.

React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.

En la programación declarativa se indica qué es lo que se hace, mientras que en la imperativa se indica cómo se hace

Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.

JavaScript es un lenguaje imperativo y declarativo, pero React es declarativo.

Ejemplos de codificaciones imperativas vs declarativas: el cómo frente al qué

Imperativa
```JS
/**
 * Crea un array vacío
 * Recorre un array mediante índices.
 * En cada pasada añade como elemento el doble
 * Devuelve el nuevo array
 */
function double(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}
```


Declarativa
```JS
/**
 * devuelve un vector con cada elemento duplicado partiendo de otro
 *  vector de números
 */
function double(arr) {
  return arr.map((item) => item * 2);
}
```

Imperativa
```js
/**
 * Recorre un array mediante índices.
 * En cada pasada suma sus valores y devuelve el acumulado
 */
function add(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
```

Declarativa
```js
/**
 * Devuelve el acumulado (la suma) de un vector de números
 */
function add(arr) {
  return arr.reduce((prev, current) => prev + current, 0);
}
```

Imperativa
```js
$("#btn").click(function () {
  $(this).toggleClass("highlight");
  $(this).text() === "Add Highlight"
    ? $(this).text("Remove Highlight")
    : $(this).text("Add Highlight");
});
```

Declarativa
```JSX
<Btn
  onToggleHighlight={handleToggle}
  highlight={highlight}>
    {buttonText}
</Btn>
```

### Diseño de componentes

React está basado en componentes. Con React se crean componentes encapsulados que manejan su propio estado, y  se convierten en interfaces de usuario complejas. Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, se pueden pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. 

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas (llamadas "props") y retornan elementos de React que describen lo que debe aparecer en la pantalla.

### Sintaxis JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React. 
Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código a JavaScript.

JSX no deja de ser un endulzamiento del código (Syntactic Sugar) para facilitarnos la vida y hacer nuestro código más manejable.

JSX es más estricto que HTML. Tienes que cerrar etiquetas como `<br />`. Tu componente tampoco puede devolver múltiples etiquetas de JSX. Debes envolverlas en un padre compartido, como `<div>...</div>` o en un envoltorio vacío `<>...</>`:

```JSX
function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo vas?</p>
    </>
  );
}
```

De primeras te puede parecer que estás mezclando código HTML dentro de tus ficheros JavaScript, 
pero nada más lejos de la realidad. 

React, al basar el desarrollo de apps en componentes, necesita crear elementos HTML que definan nuestro componente,
por ejemplo `<div>`, `<p>`, `<img>`, etc...

También se necesita indicar cuándo se trata de componentes creados por nosotros con React, 
como puede ser un `<Image />`, `<List />`   , etc...

Con la sintaxis JSX (en vez de JavaScript) se busca  legibilidad y  expresividad en el código. Es prácticamente como escribir HTML pero no estás escribiendo HTML, 
es JavaScript.
JSX es una extensión de sintaxis para JavaScript. 

Se usa una convención de nombres en camelCase para las propiedades en lugar de nombres de atributos HTML. Por ejemplo, tabindex se vuelve tabIndex en JSX. El atributo class se escribe como className ya que class es una palabra reservada en JavaScript:
```JSX
<h1 className="hello">My name is Clementine!</h1>
```

### Entrega

Con la información que se adjunta (apartados anteriores y enlaces de interés) define de forma concisa los siguientes términos:

1. React

React es una biblioteca de JavaScript de código abierto desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y eficientes. Se centra en la creación de componentes reutilizables que gestionan su propio estado y se actualizan de manera eficiente cuando cambian los datos.

2. UI
   
UI es la abreviatura de User Interface (Interfaz de Usuario). Se refiere a la parte visual de un programa o sistema informático con la que interactúa el usuario. La interfaz de usuario incluye elementos como botones, menús, barras de desplazamiento, etc., que permiten al usuario interactuar con el software.

3. Programación imperativa

La programación imperativa es un paradigma de programación en el que se describen los pasos específicos que debe seguir un programa para alcanzar un resultado. En la programación imperativa, el programador indica cómo se deben realizar las tareas, paso a paso, utilizando instrucciones y comandos detallados.

4. Programación declarativa

La programación declarativa es un paradigma de programación en el que se describe el resultado deseado sin especificar los pasos exactos para alcanzarlo. En la programación declarativa, el programador se centra en definir qué se quiere lograr, en lugar de cómo hacerlo. Este enfoque permite escribir código más legible, mantenible y reutilizable.

5. Syntactic sugar

Syntactic sugar es un término utilizado en programación para describir una característica que no aporta funcionalidad adicional, pero que hace que el código sea más fácil de leer y escribir. El "azúcar sintáctico" es una forma de simplificar la sintaxis de un lenguaje de programación para que sea más intuitiva y expresiva.  

6. JSX

JSX (JavaScript XML) es una extensión de JavaScript utilizada en React para describir la interfaz de usuario de manera más intuitiva. Combina HTML y JavaScript dentro de la misma sintaxis, permitiendo a los desarrolladores definir la estructura de los componentes de una manera más declarativa. JSX se compila a llamadas de funciones regulares de JavaScript y facilita la creación y manipulación de elementos de la interfaz de usuario en React.

7. Componente en React

Un componente en React es una pieza reutilizable e independiente de código que encapsula la lógica y la interfaz de usuario. Los componentes en React permiten dividir la interfaz de usuario en partes más pequeñas y manejables, lo que facilita la construcción y el mantenimiento de aplicaciones complejas. Los componentes pueden contener otros componentes, formando una jerarquía que facilita la reutilización y la organización del código.

8. Props

Las props (abreviatura de "properties") son los atributos que se pasan a un componente de React. Las props permiten que los componentes reciban datos externos y se comporten de manera dinámica en función de esos datos. Las props son inmutables y se utilizan para personalizar y configurar los componentes de React de forma flexible.

9.  Framework vs librería

Un framework es un conjunto de herramientas y reglas predefinidas que proporcionan una estructura y una guía para el desarrollo de aplicaciones. Un framework define la arquitectura y el flujo de trabajo de una aplicación, imponiendo ciertas restricciones y convenciones a los desarrolladores.

De interés
- https://youtu.be/A-iKX8Shge4 (Framework vs Librería)
- https://youtu.be/lWQ69WX7-hA (¿Qué es React.js y cómo funciona?)
- https://es.reactjs.org/
- https://react.dev/learn
- https://react.dev/learn/writing-markup-with-jsx
