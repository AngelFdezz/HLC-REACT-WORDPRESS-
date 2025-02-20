# Agregar interactividad

Algunas cosas en la pantalla se actualizan en respuesta a la entrada del usuario. Por ejemplo, hacer clic en una galería de imágenes cambia la imagen activa. En React, los datos que cambian con el tiempo se denominan estado. Puedes agregar estado a cualquier componente y actualizarlo según sea necesario. Aquí aprenderás a escribir componentes que controlen interacciones, actualicen tu estado y muestren resultados diferentes a lo largo del tiempo.

## Responder a eventos
React te permite añadir controladores de eventos a tu JSX. Los controladores de eventos son tus propias funciones que se ejecutarán en respuesta a interacciones como hacer clic, hover, enfocar inputs en formularios, entre otras.

Lee el siguiente [apartado](https://es.react.dev/learn/responding-to-events) y entrega los desafíos. Añade comentario JS con la corrección.

1. Arregla un controlador de evento
```jsx
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Alterna las luces
    </button>
  );
}

//Los controladores de eventos se pasan no se llaman.


```


2. Conecta los eventos
```jsx
export default function ColorSwitch({ onChangeColor }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Cambiar color
    </button>
  );
}
// Para que no se propague el evento, se tiene que llamar a stopPropagation() desde una arrow function.
```
Responde a las siguientes preguntas:

1. **Función controladora de eventos:**
   Una función controladora de eventos en React es una función que se ejecuta cuando ocurre un evento, como hacer clic en un botón, escribir en un campo de entrada, etc. Siguiendo las buenas prácticas, es común nombrar estas funciones de manera descriptiva, indicando tanto el evento como la acción que realizan. Por ejemplo:
   - `handleClick`: Función que maneja el evento de clic.
   - `handleChange`: Función que maneja el evento de cambio en un campo de entrada.
   - `handleSubmit`: Función que maneja el evento de envío de un formulario.

2. **Ejemplos de eventos y sus controladores:**
   - **Evento de clic (`onClick`):**
     ```jsx
     function handleClick() {
       console.log('Botón clickeado');
     }

     <button onClick={handleClick}>Clic aquí</button>
     ```

   - **Evento de cambio (`onChange`):**
     ```jsx
     function handleChange(event) {
       console.log('Valor cambiado:', event.target.value);
     }

     <input type="text" onChange={handleChange} />
     ```

   - **Evento de envío de formulario (`onSubmit`):**
     ```jsx
     function handleSubmit(event) {
       event.preventDefault();
       console.log('Formulario enviado');
     }

     <form onSubmit={handleSubmit}>
       <button type="submit">Enviar</button>
     </form>
     ```

3. **Significado de las invocaciones en los controladores de eventos:**
   - `e.stopPropagation()`: Detiene la propagación del evento a través del DOM, lo que significa que el evento no se propagará a elementos superiores ni inferiores en la jerarquía del DOM.
   - `e.preventDefault()`: Previene el comportamiento predeterminado del evento, como el envío de un formulario o el enlace de un hipervínculo. Esto evita que se realice la acción predeterminada asociada con el evento.
## El estado: la memoria de un componente

Los componentes a menudo necesitan cambiar lo que se muestra en pantalla como resultado de una interacción. Escribir dentro de un formulario debería actualizar el campo de texto, hacer clic en «siguiente» en un carrusel de imágenes debería cambiar la imagen que es mostrada; hacer clic en un botón para comprar un producto debería actualizar el carrito de compras. En los ejemplos anteriores los componentes deben «recordar» cosas: el campo de texto, la imagen actual, el carrito de compras. En React, a este tipo de memoria de los componentes se le conoce como estado.


Lee el siguiente [apartado](https://es.react.dev/learn/state-a-components-memory) y entrega los desafíos. Añade comentario JS con la corrección.

1. Completa la galería
```jsx
import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index != sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }
  function handleAntesClick() {
    if (index != 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Siguiente</button>
      <button onClick={handleAntesClick}>Anterior</button>
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
// Primero creo el evento handleAntesClick para ir para atras usando el setter y luego jugando con la longitud cancelo la funcionalidad del botón.
```
2. Arreglar entradas de formulario atascadas
```jsx
import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Nombre"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Apellido"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hola, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reiniciar</button>
    </form>
  );
}
// Primero he cambiado las variables anteriores por variables de estado y a la asignacion de las anteriores las he cambiado por su set y he importado useState
```
3. Arregla un error
```jsx
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>¡Gracias!</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Enviando: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
// Las variables de estado se tienen que declarar al principio del componente
```
4. Eliminar estado innecesario
```jsx
export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('¿Cuál es tu nombre?');
    alert(`Hola, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
// Cambiar la variable de estado por una variable clásica
```

Responde a las siguientes preguntas:

1. **¿Qué es un Hook en React?**
   Un Hook en React es una función especial que te permite "enganchar" o conectar características de React en componentes funcionales. Los Hooks te permiten utilizar el estado y otras características de React sin necesidad de escribir una clase.

2. **¿Qué es `useState`?**
   `useState` es un Hook que te permite añadir estado a componentes funcionales en React. Te proporciona una forma de declarar variables de estado en tus componentes sin necesidad de usar clases. `useState` devuelve un array con dos elementos: el estado actual y una función que te permite actualizar ese estado. Cuando llamas a la función de actualización, React re-renderiza el componente con el nuevo estado.

   **Ejemplo de uso de `useState`:**
   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Has hecho clic {count} veces</p>
         <button onClick={() => setCount(count + 1)}>
           Haz clic aquí
         </button>
       </div>
     );
   }

   export default Counter;
   ```



## Renderizado y confirmación

Para que tus componentes se muestren en pantalla, antes deben ser renderizados por React. Entender los pasos de este proceso te ayudará a pensar en cómo se ejecuta tu código y a explicar su comportamiento.


Lee el siguiente [apartado](https://es.react.dev/learn/render-and-commit) y responde a las siguientes preguntas:

1. En el proceso de pintado en el navegador de los componentes, ordena los siguientes pasos:
  - Confirmación con el DOM 
  - Renderizado del componente,
  - Desencadenamiento de un renderizado,
3. Renderizado inicial. Indica cuándo sucede.
4. Renderizado cuando se actualiza el estado. Indica cuándo sucede (hook o función que lo desencadena)
5. createRoot. Qué hace. Indica un ejemplo.
7. Indica en qué consiste el modo estricto <StrictMode>


## El estado como una instantánea

Las variables de estado pueden parecerse a las variables normales de JavaScript en las que se puede leer y escribir. Sin embargo, el estado se comporta más como una instantánea. Al asignarlo no se cambia la variable de estado que ya tienes, sino que se desencadena una rerenderizado.


Lee el siguiente [apartado](https://es.react.dev/learn/state-as-a-snapshot) y entrega el desafío. Añade comentario JS con la corrección.

1. Implementar un semáforo 

## Poner en cola una serie de actualizaciones del estado
Al asignar una variable de estado se pondrá en cola otro renderizado. Pero a veces, es posible que quieras realizar varias operaciones antes de poner en cola el siguiente renderizado. Para hacer esto, nos ayuda entender cómo React realiza las actualizaciones de estado por lotes.


Lee el siguiente [apartado](https://es.react.dev/learn/queueing-a-series-of-state-updates) y entrega los desafíos. Añade comentario JS con la corrección.

1. Fijar un contador de peticiones
2. Implementa la cola de estado tú mismo

Responde a las siguientes preguntas:
1. Indica en qué consiste el batching
2. Qué es la función de actualización en un evento. Buenas prácticas

## Actualizar objetos en el estado
El estado puede contener cualquier tipo de valor JavaScript, incluyendo objetos. Pero no deberías cambiar los objetos que tienes en el estado de React directamente. En su lugar, cuando quieras actualizar un objeto, tienes que crear uno nuevo (o hacer una copia de uno existente), y luego configurar el estado para usar esa copia.


Lee el siguiente [apartado](https://es.react.dev/learn/updating-objects-in-state) y entrega los desafíos. Añade comentario JS con la corrección.

1. Corregir las actualizaciones de estado incorrectas
2. Encontrar y arreglar la mutación
3. Actualizar un objeto con Immer

Responde a las siguientes preguntas:
1. [verdadero o falso] El cambio de estado hay que hacerlo mediante mutación en vez de clonación.
2. [verdadero o falso] El estado no debe modificarse para conseguir un re-renderizado
3. [verdadero o falso] Para re-renderizar hay que crear un objeto nuevo y pasárselo a la función de setter.
4. [verdadero o falso] Se puede usar el operador spread para que React detecte el cambio de estado
5. [verdadero o falso] El operador spread copia en profundidad (deep copy)
6. [verdadero o falso] En un formulario debe utilizarse  un único controlador de evento para diversos campos
7. [verdadero o falso] Immer es un pequeño paquete que permite trabajar con estados inmutables mediante la modificación.

## Actualizar arrays en el estado
Los arrays son mutables en JavaScript, pero deberían tratarse como inmutables cuando los almacenas en el estado. Al igual que los objetos, cuando quieras actualizar un array almacenado en el estado, necesitas crear uno nuevo (o hacer una copia de uno existente) y luego asignar el estado para que utilice este nuevo array.


Lee el siguiente [apartado](https://es.react.dev/learn/updating-arrays-in-state) y entrega los desafíos. Añade comentario JS con la corrección.

1. Actualizar un artículo en el carrito de compras
2. Eliminar un artículo del carrito de compras
3. Repara las mutaciones usando métodos que no muten
4. Arregla las mutaciones usando Immer

Responde a las siguientes preguntas con respecto a cómo actualizar arrays en el estado:
1. [verdadero o falso] filter y splice deben usarse para eliminar elementos de un array 
1. [verdadero o falso] map debe usarse para modificar elementos de un array 
1. [verdadero o falso] push y unshift deben usarse para modificar elementos de un array 
1. [verdadero o falso] pop, shift y splice pueden usarse junto con Immer para eliminar elementos de un array 
