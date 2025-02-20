# UD2 A3. Describir la UI (II)

## Pasar props a un componente

Los componentes de React utilizan props para comunicarse entre sí. Cada componente padre puede enviar información a sus componentes hijos mediante el uso de props. Las props pueden parecerte similares a los atributos HTML, pero permiten pasar cualquier valor de JavaScript a través de ellas, como objetos, arrays y funciones.

Lee el siguiente [apartado](https://es.react.dev/learn/passing-props-to-a-component) y entrega los desafíos. Añade comentario JS con la corrección.

1. Extraer un componente
```js
// Creo el componente profile para poder usarlo en todos los perfiles y no repetirlo cada vez que creamos un usuario.
import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profesión:</b> {profession}</li>
        <li>
          <b>Premios: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Descubrió: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="física y química"
        discovery="polonio (elemento químico)"
        awards={[
          'Premio Nobel de Física',
          'Premio Nobel de Química',
          'Medalla Davy',
          'Medalla Matteucci'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geoquímico'
        discovery="un método para medir el dióxido de carbono en el agua de mar"
        awards={[
          'Premio Miyake de geoquímica',
          'Premio Tanaka'
        ]}
      />
    </div>
  );
}
```
2. Ajustar el tamaño de la imagen según una prop
```js
// Compruebo si el tamaño elegido es mayor a 90 se cambia el parámetro de getImageUrl 
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let tamanoImagen = 's';
  if (size > 90) {
    tamanoImagen = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, tamanoImagen)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}
```
3. Pasar JSX en una prop children
```js
// Componente card para añadir tarjetas con contenido
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Foto</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>Información</h1>
        <p>Aklilu Lemma fue un destacado científico etíope que descubrió un tratamiento natural para la esquistosomiasis.</p>
      </Card>
    </div>
  );
}
```


## Renderizado condicional
Tus componentes a menudo necesitarán mostrar diferentes cosas dependiendo de diferentes condiciones. En React, puedes renderizar JSX de forma condicional utilizando la sintaxis de JavaScript como las declaraciones if, && y los operadores ? :.

Lee el siguiente [apartado](https://es.react.dev/learn/passing-props-to-a-component) y entrega los desafíos. Añade comentario JS con la corrección.
1. Mostrar un icono para los elementos incompletos con ? :
```js
// Utilizo el condicional ? para comprobar si es false
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Traje de vuelo" 
        />
        <Item 
          isPacked={true} 
          name="Casco con dorado a la hoja" 
        />
        <Item 
          isPacked={false} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}
```
2. Mostrar la importancia del elemento con &&
```js
// Uso el operador && para comprobar si es mayor que 0 y si es asi se añade el número a la lista
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importancia: {importance})</i>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje de vuelo" 
        />
        <Item 
          importance={0} 
          name="Casco con dorado a la hoja" 
        />
        <Item 
          importance={6} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}
```
3. Refactorizar una serie de ? : a if y variables
```js
// Utilizo condicionales y dependiendo el name se usa un texto o otro
function Drink({ name }) {
  let part, caffeine, age;
  if (name === 'té') {
    part = 'hoja';
    caffeine = '15–70 mg/taza';
    age = '4,000+ años';
  } else if (name === 'café') {
    part = 'grano';
    caffeine = '80–185 mg/taza';
    age = '1,000+ años';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{part}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{caffeine}</dd>
        <dt>Antigüedad</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}
```

## Renderizado de listas
A menudo querrás mostrar muchos componentes similares de una colección de datos. Puedes usar los métodos de array de JavaScript para manipular un array de datos. En esta página, usarás filter() y map() con React para filtrar y transformar tu array de datos en un array de componentes.

Lee el siguiente [apartado](https://es.react.dev/learn/conditional-rendering) y entrega los desafíos. Añade comentario JS con la corrección.
1. Dividir una lista en dos
```js
// Usando el método filter creo dos arrays con la condición de su profesión.
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'químico'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'químico'
  );
  return (
    <article>
      <h1>Científicos</h1>
      <h2>Químicos</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Todos los demás</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

```
2. Listas anidadas en un componente
```js
// Con map creo una lista para cada componente.
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

```
3. Extraer un componente de elemento de lista
```js
// Se le pasa los props directamente al componente y se crea la lista por cada una de las recetas 
import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

```
4. Lista con un separador
```js
// Se usa por cada línea la etiqueta hr para añadir el separador
const poem = {
  lines: [
    'Escribo, borro y reescribo',
    'Borro de nuevo, y luego',
    'Florece una amapola.'
  ]
};

export default function Poem() {
  let output = [];

  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}
```

## Mantener los componentes puros
Algunas funciones de JavaScript son puras. Las funciones puras solo realizan un cálculo y nada más. Al escribir estrictamente tus componentes como funciones puras, puedes evitar una clase completa de errores desconcertantes y un comportamiento impredecible a medida que crece tu base de código. Sin embargo, para obtener estos beneficios, hay algunas reglas que debes seguir.

Lee el siguiente [apartado](https://es.react.dev/learn/rendering-lists) y entrega los desafíos. Añade comentario JS con la corrección.
1. Arreglar un reloj roto
```js
// Compruebo la hora y le pongo la clase dia o noche correspondiente
export default function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
```
2. Arreglar un perfil roto
```js
// Separo por componentes el perfil para así poder reusarlo en diferentes perfiles.
import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  )
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
```
3. Arregla una bandeja de historias rota
```js
// No de modifica el array pasado por prop y se renderiza por separado crear historia
export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Crear historia</li>
    </ul>
  );
}

```

## Understanding Your UI as a Tree
Your React app is taking shape with many components being nested within each other. How does React keep track of your app’s component structure?

React, and many other UI libraries, model UI as a tree. Thinking of your app as a tree is useful for understanding the relationship between components. This understanding will help you debug future concepts like performance and state management.

Lee el siguiente [apartado](https://es.react.dev/learn/understanding-your-ui-as-a-tree) sobre los componentes puros
