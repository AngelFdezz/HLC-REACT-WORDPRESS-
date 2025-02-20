# UD2 A5. TIC-TAC-TOE

Vas a realizar un tutorial partiendo de los siguientes conocimientos ya adquiridos:

1. Destructuring
2. Módulos ES6
3. Sintaxis JSX
4. Creación de componentes básicos
5. Props para comunicar componentes padres-hijos
6. Renderizado condicional
7. Renderizado de listas
8. Componentes puros
9. Control de eventos
10. Estado de los componentes 
11. Fases de actualización de estado
12. Por qué el estado no se actualiza justo después de cambiarlo
13. Cola de actualizaciones de estado
14. Actualizar un objeto en el estado
15. Actualización de un array en el estado

    
### Tutorial

En este [tutorial](https://es.react.dev/learn/tutorial-tic-tac-toe) construirás un pequeño juego de Tres en raya. Este tutorial no asume ningún conocimiento previo de React. Las técnicas que aprenderás en el tutorial son fundamentales para crear cualquier aplicación de React, y comprenderlas por completo te dará una visión profunda de React.

Realiza el tutorial y entrégalo en este repositorio. Indica los siguientes códigos como bloques de JSX (y referenciados en tu propio repositorio)

1. Indica cómo se colocan las casillas en 3 filas
Se colocan dividiendo las filas en divs.
```jsx
export default function Square() {
  return (
    <>
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

```
2. Usa el operador ternario en vez del if
```jsx
function handleClick(i) {
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
```
3. Lista los componentes que has definido


- **Square:**
   - Props: `value` y `onSquareClick`
   - Representa un cuadrado en el tablero del juego. Muestra el valor (`X`, `O`, o `null`) y ejecuta la función proporcionada (`onSquareClick`) al hacer clic.

- **Board:**
   - State:
     - `xIsNext`: Un estado booleano que indica si el próximo movimiento debe ser "X" o "O".
     - `squares`: Un estado que almacena el estado actual del tablero del juego (un array de 9 elementos, inicialmente lleno de `null`).
   - Métodos:
     - `handleClick(i)`: Maneja el clic en un cuadrado. Actualiza el estado del tablero y determina el próximo jugador.
   - Renderiza:
     - Muestra el estado del juego, ya sea el ganador o el próximo jugador.
     - Renderiza nueve instancias del componente `Square`, pasando valores y funciones específicos.

- **calculateWinner:**
   - Función que toma un array de los estados del tablero y verifica si hay un ganador. Devuelve el símbolo del ganador (`X`, `O`) o `null` si no hay ganador.

4. Indica componentes sin estado

- **Square:**
   - Este componente no tiene estado propio. Recibe propiedades (`value` y `onSquareClick`) y renderiza según esas propiedades, pero no mantiene ningún estado interno.


5. Indica las props de los componentes


- **Square:**
   - Props:
     - `value`: Representa el valor del cuadrado en el tablero (`X`, `O` o `null`).
     - `onSquareClick`: Función que se ejecutará cuando se haga clic en el cuadrado.

- **Board:**
   - No recibe props directamente, pero contiene dos estados locales (`xIsNext` y `squares`) que afectan la representación del tablero.

6. Indica los eventos manejados y sus manejadores.
   
   En el código proporcionado, se maneja el evento de clic en los cuadrados del tablero. Aquí están los eventos manejados y sus respectivos manejadores:

- **Evento manejado en el componente Square:**
    - **Evento:** Clic en el botón dentro de Square.
    - **Manejador:** `onSquareClick`
    - **Descripción:** Se pasa como prop al componente `Square`. Cuando el botón en `Square` se hace clic, se ejecuta la función `onSquareClick` proporcionada como prop.

- **Evento manejado en el componente Board:**
    - **Evento:** Clic en un cuadrado del tablero.
    - **Manejador:** `handleClick(i)`
    - **Descripción:** La función `handleClick` maneja el clic en un cuadrado específico del tablero. Se llama con el índice del cuadrado como argumento cuando un `Square` se hace clic.


7. Con respecto al estado de los componentes:


   **Estado del componente Board:**
   1. **Declaración de la variable de estado:**
      ```javascript
      const [xIsNext, setXIsNext] = useState(true);
      const [squares, setSquares] = useState(Array(9).fill(null));
      ```

   2. **Estado inicial:**
      - `xIsNext`: `true` (indica que el próximo movimiento debe ser "X").
      - `squares`: Un array de 9 elementos, todos inicializados como `null`.

   3. **Función que actualiza el estado:**
      - `setXIsNext`: Utilizado para actualizar el estado de `xIsNext`.
      - `setSquares`: Utilizado para actualizar el estado de `squares`.

   4. **Justificación de cómo se cambia el estado utilizando la inmutabilidad:**
      - `setXIsNext(!xIsNext)`: Se actualiza `xIsNext` invirtiendo su valor actual. Esto garantiza la inmutabilidad, ya que se está creando un nuevo estado y no modificando el estado actual directamente.
      - `setSquares(nextSquares)`: Se actualiza `squares` con un nuevo array (`nextSquares`) que se crea utilizando la función `slice()` para mantener la inmutabilidad. Se modifica solo el valor en la posición específica del cuadrado, manteniendo los demás valores inalterados.


8. Indica cuándo se renderiza de nuevo un componente


   **Componente `Board`:**
      - Se renderiza nuevamente cuando hay un clic en un cuadrado (`<Square>`), lo que desencadena la ejecución de la función `handleClick` y, a su vez, la actualización del estado mediante `setSquares` y `setXIsNext`.
      - Se renderiza también cuando se actualiza el estado `squares` o `xIsNext` utilizando `setSquares` y `setXIsNext` respectivamente.


9. Indica por qué se crea un nuevo array en vez de modificarlo. Marca con un comentario "nuevo array" dónde se hace:
    
      En React, es importante mantener la inmutabilidad del estado para garantizar un comportamiento predecible y eficiente. En el código proporcionado, se crea un nuevo array en lugar de modificar el estado existente para garantizar la inmutabilidad. Aquí hay un ejemplo de dónde se crea un nuevo array:
   
      ```javascript
      function handleClick(i) {
         const nextSquares = squares.slice(); // nuevo array
         xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
   
         setSquares(nextSquares);
         setXIsNext(!xIsNext);
      }
      ```
   
      En este fragmento de código, se crea un nuevo array `nextSquares` utilizando el método `slice()` en lugar de modificar directamente el estado `squares`. Esto garantiza que el estado original `squares` permanezca inalterado y se actualice con un nuevo array que refleje los cambios necesarios.


10. Explica el uso de key
   
   La prop key se utiliza para ayudar a React a identificar qué elementos han cambiado, se han agregado o se han eliminado de una lista. Cada elemento de una lista en React debe tener una prop key única. Esta prop key ayuda a React a realizar una reconciliación eficiente al actualizar el DOM.


11. Qué es un componente controlado. Indica si hay alguno en el código.  
    
   Un componente controlado en React es aquel cuyo estado está completamente controlado por React. Los valores de entrada (como campos de formulario) o cualquier otro estado dentro del componente se manejan mediante el estado de React y se actualizan a través de las funciones de actualización del estado.

   En el código proporcionado, el componente `Board` se utiliza para representar el juego del tic-tac-toe. En este caso, el componente `Board` es un componente controlado, ya que el estado del juego (representado por los estados `xIsNext` y `squares`) está completamente controlado por React y se actualiza a través de las funciones `setXIsNext` y `setSquares`.


12. Convención que usa REACT para los props que representan eventos y para los métodos que representan los manejadores de ese evento.  
    
   En este caso, la prop onSquareClick en Square representa el evento de clic, y el método handleClick en Board actúa como el manejador de ese evento.

13. Indica cómo se le pasan argumentos a un eventHandler  

En React, cuando necesitas pasar argumentos a un event handler, puedes hacerlo utilizando una función de flecha en línea o `bind` en el lugar donde defines el handler. Aquí hay un ejemplo:

```javascript
<Square value={squares[0]} onSquareClick={handleClick.bind(null, 0)} />
```



De interés:

1. [https://es.react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components](https://es.react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
