//EJERCICIOS DESTRUCTURING

//Ejercicio 1

//Destructuring de arrays:

const destinos = ["Oporto", "Granada", "Madrid", "Burdeos"]; 
    
// a. Asignación del primer y del último elemento de un array

let [primerElemento,,,ultimoElemento] = destinos;

console.log(`Primer elemento: ${primerElemento}, Ultimo elemento: ${ultimoElemento}`)
console.log();

// b. Asignación del primer y del resto de elementos de un array (rest operator)

let [primerElemento2, ...restoElementos] = destinos;
console.log(`Primer elemento: ${primerElemento}, Resto elementos: ${restoElementos}`)
console.log();

// c. Asignación de un valor anidado dentro de un array



// d. Intercambio de variables

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a);
console.log(b); 

// e. Asignación de los valores de un array devuelto por una función

function obtenerDestinos() {
    return ["Lisboa", "Barcelona", "Valencia"];
  }
  
const [primerElemento3, segundoElemento, tercerElemento] = obtenerDestinos();

console.log(`Primer elemento: ${primerElemento}, Segundo Elemento: ${segundoElemento}, Tercer Elemento: ${tercerElemento}`)
console.log();

//Destructuring de obejtos:

const laMejor = {
    nombre: "Lourdes", 
    apellido1: "Magarín",
    apellido2: "Corvillo",
    procedencia: {
      ciudad: "Córdoba",
      comunidad: "Andalucia", 
      pais: "España"
    }
};

// a. Asignación simple de los atributos de un objeto

let {nombre, apellido1, apellido2} = laMejor;

console.log(`Nombre: ${nombre}, apellido1: ${apellido1}, apellido2: ${apellido2}`);

// b. Asignación simple de los atributos de un objeto cambiando el nombre a las variables

let {nombre : nombre1} = laMejor;

console.log(nombre1)

// c. Asignación de un valor anidado dentro de un objeto

let {procedencia : {ciudad, comunidad, pais}} = laMejor;

console.log(`ciudad: ${ciudad}, comunidad: ${comunidad}, pais: ${pais}`);

// d. Asignación con valores por defecto en caso de no existir

const { edad = 27 } = laMejor;
console.log(`Edad: ${edad}`); 

// e. En los parámetros de una función

function saludar({ nombre, apellido1 }) {
    console.log(`Hola, ${nombre} ${apellido1} ${apellido2}!`);
  }
saludar(laMejor);

// f. Valores por defecto en los parámetros de una función. Invoca varias veces y sin argumentos

function saludar({ nombre = "Invitado", apellido1 = "Apellido" } = {}) {
    console.log(`Hola, ${nombre} ${apellido1}!`);
  }
saludar();
saludar({ nombre: "Angel", apellido1: "Fernández" });

// g. Asignación de los valores de un objeto devuelto por una función


// EJERCICIO 3

/* 1-Escribe una función llamada muestraNombre() que 
tome un objeto como argumento (4 propiedades) e imprima el nombre y apellido de la persona.*/

function muestraNombre({ nombre, apellido, edad, ciudad }) {
  console.log(`Nombre: ${nombre} ${apellido}`);
}

const persona = { nombre: "Juan", apellido: "Pérez", edad: 30, ciudad: "Madrid" };
muestraNombre(persona);

/* Considere el siguiente array colores: let colores = \["blanco", "azul", "amarillo", "negro", "rojo", "verde"\]; 
Usando la desestructuración de matrices, asigne los primeros 2 elementos a las variables primerColor y segundoColor y asigna los elementos 
restantes a la variable otrosColores. Muestra los valores de estas 3 variables por consola*/

let colores = ["blanco", "azul", "amarillo", "negro", "rojo", "verde"];
const [primerColor, segundoColor, ...otrosColores] = colores;

console.log(`Primer color: ${primerColor}`);
console.log(`Segundo color: ${segundoColor}`);
console.log(`Otros colores: ${otrosColores}`);

/*
Crea una función denominada irTerceraHora() que acepte un objeto desestructurado como parámetro. 
El parámetro extrae la propiedad "segundaHora" del objeto. La función debe devolver esta declaración: "¡Hora de ir a clase de {segunda}!"
```
const misClases= {  
  primera: "Diseño ",  
  segunda: "Diseño ",  
  tercera: "Servidor",   
  cuarta: "Servidor",  
  quinta: "Cliente",  
  sexta: "Cliente"};
*/

function irTerceraHora({ segunda }) {
  return `¡Hora de ir a clase de ${segunda}!`;
}

const misClases = {
  primera: "Diseño",
  segunda: "Diseño",
  tercera: "Servidor",
  cuarta: "Servidor",
  quinta: "Cliente",
  sexta: "Cliente"
};

console.log(irTerceraHora(misClases));

