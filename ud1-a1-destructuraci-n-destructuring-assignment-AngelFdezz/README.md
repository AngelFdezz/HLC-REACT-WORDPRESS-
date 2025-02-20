# UD1 A1. Destructuración (Destructuring assignment)

La destructuración (Destructuring assigment) es una de las más poderosas características añadidas al lenguaje en ES2015. Facilita el desarrollo y hace nuestro código más legible.

Destructuring nos da una manera de extraer datos de objetos

```
const laMejor = {nombre: "Lourdes", apellido1: "Magarín", apellido2:"Corvillo", procedencia: {ciudad: "Córdoba", comunidad: "Andalucia", pais:"España"}};
```
 o arrays:
``` 
const destinos = ["Oporto", "Granada", "Madrid", "Burdeos"];
```
y asignarlos a variables.
```
const ({apellido1, procedencia:{ciudad:localidad}} = laMejor);

const [,,,ciudad] = destinos;
```
  
En React se utiliza mucho la asignación por destructuración, por lo que vas a practicar con los siguientes ejercicios. Entrégalos en este mismo repositorio:

1.  Con valores significativos escribe un ejemplo de cada una de estas asignaciones con destructuring:
    1.  Destructuring de arrays:
        1.  Asignación del primer y del último elemento de un array
        2.  Asignación del primer y del resto de elementos de un array (rest operator)
        3.  Asignación de un valor anidado dentro de un array
        4.  Intercambio de variables
        5.  Asignación de los valores de un array devuelto por una función
    2.  Destructuring de objetos:
        1.  Asignación simple de los atributos de un objeto
        2.  Asignación simple de los atributos de un objeto cambiando el nombre a las variables
        3.  Asignación de un valor anidado dentro de un objeto
        4.  Asignación con valores por defecto en caso de no existir
        5.  En los parámetros de una función
        6.  Valores por defecto en los parámetros de una función. Invoca varias veces y sin argumentos
        7.  Asignación de los valores de un objeto devuelto por una función
2.  Entrega los [ejemplos adjuntos](ejerciciosDestructuring.js)
3.  Utiliza la destructuración  en estos ejercicios, así como los template literals:
    1.  Escribe una función llamada muestraNombre() que tome un objeto como argumento (4 propiedades) e imprima el nombre y apellido de la persona. 
    2.  Considere el siguiente array colores: let colores = \["blanco", "azul", "amarillo", "negro", "rojo", "verde"\]; Usando la desestructuración de matrices, asigne los primeros 2 elementos a las variables primerColor y segundoColor y asigna los elementos restantes a la variable otrosColores. Muestra los valores de estas 3 variables por consola
    3.  Crea una función denominada irTerceraHora() que acepte un objeto desestructurado como parámetro. El parámetro extrae la propiedad "segundaHora" del objeto. La función debe devolver esta declaración: "¡Hora de ir a clase de {segunda}!"
```
const misClases= {  
  primera: "Diseño ",  
  segunda: "Diseño ",  
  tercera: "Servidor",   
  cuarta: "Servidor",  
  quinta: "Cliente",  
  sexta: "Cliente"};
```
De interés:

*   https://didacticode.com/curso/curso-javascript-es6/leccion/javascript-es6-16-destructuring-desestructuracion/
*   [https://es.javascript.info/array](https://es.javascript.info/array)
*   [https://es.javascript.info/object](https://es.javascript.info/object)
*   [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring\_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
*   [https://cosasdigitales.com/articulos-diseno-web/objetos-literales-javascript-guia-practica-poo/](https://cosasdigitales.com/articulos-diseno-web/objetos-literales-javascript-guia-practica-poo/)
*   [https://yeisondaza.com/entendiendo-la-asignacion-por-destructuring-en-javascript](https://yeisondaza.com/entendiendo-la-asignacion-por-destructuring-en-javascript)
