# UD2 A2. Describir la UI

## Tu primer componente

Los componentes son uno de los conceptos esenciales de React. Constituyen los cimientos sobre los que construyes interfaces de usuario (UIs por sus siglas en inglés). ¡Y eso los convierte en el lugar perfecto para comenzar tu recorrido por React!

Lee el siguiente apartado y entrega los desafíos. Añade comentario JS con la corrección.
https://es.react.dev/learn/your-first-component
### 1. Exporta el componente

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}
```
### 2. Arregla la sentencia de devolución

```
export default function Profile() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

### 3. Detecta el error
```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}


```

### 4. Tu propio componente
```
function AngelCard() {
  return (
    <div>
      <p>Este es mi componente, me llamo Angel!!!</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Componente Principal</h1>
      <AngelCard />
      <AngelCard />
    </div>
  );
}

```

## Importar y exportar componentes
La magia de los componentes reside en su reusabilidad: puedes crear componentes que se componen a su vez de otros componentes. Pero mientras anidas más y más componentes, a menudo tiene sentido comenzar a separarlos en diferentes archivos. Esto permite que tus archivos se mantengan fáciles de localizar y puedas reutilizar componentes en más lugares.

Lee el siguiente apartado y entrega el  desafío. Añade comentario JS con la corrección.
https://es.react.dev/learn/importing-and-exporting-components
### 1: Separa los componentes aún más 
**App.js**
```
import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}

```

**Gallery.js**
```
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

**Profile.js**
```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```
## Escribir marcado con JSX
JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de una archivo JavaScript. Aunque hay otras formas de escribir componentes, la mayoría de los desarrolladores de React prefieren la concisión de JSX, y la mayoría de las bases de código lo usan.

Lee el siguiente apartado y entrega el desafío. Añade comentario JS con la corrección.
https://es.react.dev/learn/writing-markup-with-jsx
###  1: Convierte algo de HTML a JSX 
```
export default function Bio() {
  return (
    <div>
    <div className="intro">
      <h1>¡Bienvenido a mi sitio web!</h1>
    </div>
    <p className="summary">
      Puedes encontrar mis reflexiones aquí.
      <br/><br/>
      <b>¡Y <i>fotografías</i></b> de científicos!
    </p>
    </div>
  );
}
```

## JavaScript en JSX con llaves
JSX te permite escribir marcas similares a HTML dentro de un archivo JavaScript, manteniendo la lógica de renderizado y el contenido en el mismo lugar. A veces vas a querer agregar un poco de lógica JavaScript o hacer referencia a una propiedad dinámica dentro de ese marcado. En esta situación, puedes usar llaves en tu JSX para abrir una ventana a JavaScript.

Lee el siguiente apartado y entrega los desafíos. Añade comentario JS con la corrección.
https://es.react.dev/learn/javascript-in-jsx-with-curly-braces

### 1. Arreglar el error
```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );

}
```

### 2. Extraer información hacia un objeto

```
const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}
```

### 3. Escribe una expresión dentro de llaves JSX


```
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}

```


