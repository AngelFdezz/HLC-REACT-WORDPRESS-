# Learn JavaScript. Interactive tutorial.

Realiza los retos de [learnjavascript.online](https://learnjavascript.online/), una forma de aprender y practicar JavaScript moderno. 
Aprende en un entorno interactivo, con lecciones breves y resolviendo  desafíos directamente en el navegador.
Pega aquí los enunciados y tus soluciones.

Refactoriza el código de manera que sea REALMENTE JavaScript moderno:
- Evita el uso de bucles `for`/`while`
- No uses `var`
- Usa arrow functions. Simplifícalas lo más posible.
- Haz uso de médodos iterativos de arrays `map`, `filter`, `reduce`, `slice`...
- Usa operador ternario
- Usa template literal
- Usa las asignaciones simplificadas `++`, `+=`...

## 1. Basic Functions
### Basic sum
```javascript

/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
    return a + b;
}

// sample usage - do not modify
console.log(sum(1, 3));
console.log(sum(2, 5));

```

### Basic multiplication
    ```javascript

    /**
 * @param {number} a
 * @param {number} b
 */
function multiply(a, b) {
    return a * b;
}

// sample usage - do not modify
console.log(multiply(2, 4));
console.log(multiply(3, 2));

```

## 2. Strings I

```javascript
/**
 * @param {string} str
 * @returns {number} The number of characters excluding spaces
 */
function getCharCount(str) {
    return str.length;
}

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15
```

```javascript

/**
 * @param {string} name
 */
function shoutMyName(name) {
    return name.toUpperCase();
}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

```

```javascript
/**
 * @param {string} name
 */
function lowerName(name) {
    return name.toLowerCase();
}

// Sample usage - do not modify
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"

```

```javascript
/**
 * @param {string} name
 */
function getFirstCharacter(name) {
    return name[0];
}

// Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

```
    
```javascript
/**
 * @param {string} name
 */
function getLastCharacter(name) {
    return name[name.length - 1];
}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"
```

```javascript
/**
 * @param {string} text
 */
function skipFirstCharacter(text) {
    return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
```

```javascript

/**
 * @param {string} text
 */
export function getDescription(text) {
    return text.substring(0,10); // write something in the BROWSER and see it in the console

}
```
```javascript

/**
 * @param {string} firstNameInitial
 * @param {string} lastNameInitial
 */

let concatInitials = (a,b) => a+b
 
// Sample usage - do not modify
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

```

```javascript
/**
 * @param {string} text
 */
export function getDescription(text) {
    return (text.substring(0,10) + "...")

}
```


```javascript

/**
 * @param {string} name
 */
let sayHello = a => "Hello " + a 

// Sample usage - do not modify
console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"


```


```javascript
/**
 * @param {string} firstName
 * @param {string} lastName
 */
let getFullName = (a,b) => a + " " + b

// Sample usage - do not modify
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"


```

```javascript
const getMultilineString = () => `I am learning JavaScript  
and I found it to be  
quite fun!`;


// Sample usage - do not modify
console.log(getMultilineString());


```

```javascript
export function renderTableRow(label, value) {
 return `<tr>
    <td>${label}</td>
    <td>${value}</td>
</tr>
`
}


```

```javascript
/**
 * @param {string} word
 */
const capitalize = a => a[0].toUpperCase() + a.substring(1).toLowerCase()

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"


```

```javascript
/** @param {string} name */
export function getNumberOfChars(name) {
    return name.length
}

/** @param {string} name */
export function getFirstChar(name) {
    return name[0];
}

/** @param {string} name */
export function getLastChar(name) {
    return name[name.length -1];
}

/** @param {string} name */
export function getLower(name) {
    return name.toLowerCase()

}

/** @param {string} name */
export function getUpper(name) {
return name.toUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
    return name[0].toLocaleUpperCase() + name.substring(1).toLowerCase()
}


```


## 3. Numbers

```javascript
/**
 * @param {number} number
 */
const convertNumberToString = a => a.toString();

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"


```

```javascript
/**
 * @param {string} age
 */
export function getNextAge(age) {
 return parseInt(age, 10) +1 
}


```


```javascript
/**
 * @param {string} value
 */
export function getBoxWidth(value) {
return  parseInt(value);

}


```

```javascript
/**
 * @param {number} number
 */
export function getDivisionRemainderBy2(number) {
 return number % 2
}


```






## 4. Variables


```javascript
//define a variable "count" with value 0
let count = 0;
//then increment it

count++;


```

```javascript
//define a variable "ageLimit" with value 18 that cannot be re-assigned
const ageLimit = 18;
```


## 5. Conditions

```javascript
/**
 * @param {number} age
 */
const canVote = a => a >= 18

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

```


```javascript
/**
 * @param {string} age
 */
export function getNextAge(age) {
 return parseInt(age) ? parseInt(age, 10) + 1 : 1;
}


```

```javascript
/**
 * @param {string} text
 */
export function getDescription(text) {
    return text.length > 10 ? text.substring(0,10) + "..." : text

}


```

```javascript
const canVote = a => a >= 18 ? true : false;
// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false

```


```javascript
/**
 * @param {number} number
 */
export function evenOrOdd(number) {
 return number % 2 === 0 ? "even" : "odd";
}


```



## 6. Arrays I

```javascript
const getEmptyArray = () => [];

// Sample usage - do not modify
console.log(getEmptyArray());
```


```javascript
/**
 * @param {array} elements
 */
const getNumberOfElements = a => a.length

// Sample usage - do not modify
console.log(getNumberOfElements(['a', 'b', 'c'])); // 3
console.log(getNumberOfElements([])); // 0
```

```javascript
/**
 * @param {array} apps
 */
function useCalculator(apps) {
    apps.push("Calculator")
    return apps

}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]

```

```javascript
/**
 * @param {array} apps
 * @param {string} app
 */


function useApp(apps, app) {
    apps.push(app)
    return apps


}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]


```

```javascript
/**
 * @param {array} apps
 */

const getFirstApp = a => a[0];

// Sample usage - do not modify
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"


```

```javascript
/**
 * @param {array} apps
 */

const getLastApp = a => a[a.length -1]

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"


```

```javascript
/**
 * @param {array} elements
 */
function loopThroughElements(elements) {
    elements.forEach(element => 
    console.log(element))
}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console



```


```javascript
/**
 * @param {number[]} userIds
 */
function logUserIds(userIds) {
 userIds.forEach(id =>
 console.log(id))
}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console


```

```javascript
/**
 * @param {number[]} grades
 */
function sumGrades(grades) {
    let suma = 0;
    grades.forEach(grade =>
    suma += grade
    )

    return suma
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

```

```javascript
/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
    let suma = 0;

    numbers.forEach(number => {
    if (number > 0) {
        suma += number;
    }
});

return suma;

}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5


```

```javascript
/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
    let suma = 0;
    let numeros_impares = numbers.filter(number => number % 2 != 0)

    numeros_impares.forEach(numero => 
    suma += numero
    )
    return suma
   
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

```

```javascript
/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
    let dropdown = '<option value="">Please select</option>';
    
    countries.forEach(country => {
        dropdown += `<option value="${country.toLowerCase()}">${country}</option>`;
    });
    
    return dropdown;

}


```

```javascript
/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
    return rows.map(row => {
        return `
        <tr>
            <td>${row[0]}</td>
            <td>${row[1]}</td>
        </tr>`;
    }).join('');

}

```

## 7. Arrays II & callbacks

```javascript
/**
 * @param {number[]} temperatures
 */

const getPositiveTemperatures = a => a.filter(a => a>=0)

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]


```

```javascript
/**
 * @param {number[]} temperatures
 */
const getFreezingTemperatures = a => a.filter(a => a<=0)


// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]


```

```javascript
/**
 * @param {number[]} years
 * @param {number} searchYear
 */

const getYear = (a, b) => a.find(a => a === b)

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined


```

```javascript
/**
 * @param {number[]} years
 */
const getOddYears = a => a.filter(a => a % 2 !== 0);


// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]

```

