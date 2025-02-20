/*
Ejercicio 1

Reescribe el siguiente código para usar la destructuración de matrices 
en lugar de asignar cada valor a una variable.*/
{
  console.log("Ejercicio 1");

  let item = ["Egg", 0.25, 12];

  let [name, price, quantity] = item;

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log();
}

/*
Ejercicio 2

Reescribe el siguiente código para asignar cada número a la variable correcta.
*/
{
  console.log("Ejercicio 2");

  let numbers = [1, 2, 3, 4, 5, 6];

  let [one, two, three, four, five, six] = numbers;

  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
  console.log();
}

/*
Ejercicio 3

Dado un objeto llamado 'user'.

Escriba la siguiente destructuración:

- propiedad 'name' en la variable 'name'.
- propiedad 'years' en la variable 'age'.
- Propiedad 'isAdmin' en la variable 'isAdmin' (false, si no existe tal propiedad)
*/
{
  console.log("Ejercicio 3");

  let user = { name: "John", years: 30 };

  // your code to the left side:
  let {name, years:age, isAdmin = false} = user;
  console.log(`Name: ${name}, Age: ${age}, isAdmin: ${isAdmin}`);
  console.log();
}

/*
Ejercicio 4

Reescribe el siguiente código para usar el array destructuring en vez de la 
asignación de cada valor a una variable
*/
{
  console.log("Ejercicio 4");

  let person = [12, "Chris", "Owen"];

  let [age, firstName, lastName] = person;

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log();
}

/* 
Ejercicio 5

Reescribe el siguiente código para usar el array destructuring 
array destructuring en vez de la asignación de cada valor a una variable
Asegúrate de no dejar variables sin usar
*/
{
  console.log("Ejercicio 5");

  let person = ["Chris", 12, "Owen"];

  let [firstName,,lastName] = person;

  console.log(`Name: ${firstName} ${lastName}`);
  console.log();
}

/* 
Ejercicio 6

Usa el Array Destructuring para obtener el último nombre del Array 

*/
{
  console.log("Ejercicio 6");

  const students = ['Christina', 'Jon', 'Alexandare'];

  // Write your code here
  let [,,lastName] = students;

  console.log(`Lastname: ${lastName}`);
  console.log();
}

/*
Ejercicio 7

Usa el Array Destructuring para obtener todos los nombres del Array anidado
*/
{
  console.log("Ejercicio 7");

  const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Write your code here
  const [student1,[student2,student3],[student4,student5]] = moreStudents;

  console.log(student1, student2, student3, student4, student5);
  console.log();
}