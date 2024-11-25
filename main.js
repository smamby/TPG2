function consolaPrint(text) {
    const consola = document.getElementById('consola');
    consola.innerHTML += text+'<br>';
}

/*///////////////// Ejercicio N° 1 //////////////////*/
function contarVocales(cadena) {
    // Convertir la cadena a minúsculas para simplificar la comparación
    const texto = cadena.toLowerCase();
    // Definir las vocales que vamos a buscar
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    // Contador de vocales
    let contador = 0;
    
    // Recorrer cada carácter de la cadena
    for (let caracter of texto) {
        // Si el carácter es una vocal, incrementar el contador
        if (vocales.includes(caracter)) {
            contador++;
        }
    }
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 1    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 1: Tien ${contador} vocales.`;   
    consolaPrint(' ');
    consolaPrint(`Ejercicio 1: Contar vocales en una cadena`);
    consolaPrint(`contarVocales("${cadena}")`);
    consolaPrint(response)
    consolaPrint(' '); 
    return response
}
console.log(contarVocales("Desarrollo de Sistemas Web"));
console.log(contarVocales("Desarrollo e Implementación de Sistemas en la Nube"));
console.log(contarVocales("Ingeniería de Software"));
/* PROCESO DE PENSAMIENTO Y SOLUCIÓN:

Análisis Inicial
El objetivo es contar cuántas vocales hay en una cadena de texto. Para ello, es importante considerar:

Las vocales pueden estar en mayúsculas o minúsculas.
Hay que incluir vocales acentuadas para mayor precisión.
Desarrollo de la Solución

Creamos un array que contenga todas las vocales posibles, incluyendo acentuadas.
Convertimos la cadena a minúsculas para simplificar las comparaciones.
Recorremos cada carácter de la cadena y verificamos si está en el array de vocales usando el método includes(). Si lo está, incrementamos un contador.
*/

/*///////////////// Ejercicio N° 2 //////////////////*/
function maxNum(arrayNum) {
    arrayNum.reduce((a,b) => { return a < b ? a : b })
    let numMayor = arrayNum.reduce((a,b) => { return a > b ? a : b })
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 2    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 2: El número mayor es ${numMayor}`;   
    consolaPrint(' ');
    consolaPrint(`Ejercicio 2: Muestra el mayor número de un array`);
    consolaPrint(`maxNum(${arrayNum})`);
    consolaPrint(response);  
    consolaPrint(' '); 
    return response
}

console.log(maxNum([1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8]));
console.log(maxNum([-1, -20, -4, -5, -8, -1, -33, -3, -1, -6, -8]));
console.log(maxNum([1, 21, 31, 4, 51, 81, 0, -3, 3, -2, 9, 1, 6, 7, 8]));
/* Reduzco el array a un solo numero que represente al mayor de todos, para esto utilizo una funcion ternaria en el callback del reduce */

/*///////////////// Ejercicio N° 3 //////////////////*/
function calcularMedia(array) {
    // Verificar si el array está vacío
    if (array.length === 0) {
        return "El array está vacío";
    }
    
    // Calcular la suma de todos los números
    const suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    
    let media = suma / array.length;
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 3    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 3: La media es  ${media}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 3: Calcular la media de un array de números`);
    consolaPrint(`calcularMedia(${arr})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(calcularMedia([120, 220, 330, 440]));
console.log(calcularMedia([-10, 0, 10, 20, -20]));
console.log(calcularMedia([1[1.5, 2.5, 3.5, 4.5, 5.5]]));

/* PROCESO DE PENSAMIENTO Y SOLUCIÓN:

Análisis Inicial
La media se calcula dividiendo la suma de los elementos por la cantidad de elementos. Para ello, necesitamos:
Sumar todos los elementos del array.
Contar la cantidad de elementos.
Manejar casos como arrays vacíos o números decimales.

Desarrollo de la Solución:
Usamos el método reduce() para sumar todos los números del array de forma declarativa.
Dividimos esta suma por la longitud del array para obtener la media.
Incluimos una validación para devolver un mensaje en caso de que el array esté vacío.
Esto da como resultado un código limpio y funcional.
*/

/*///////////////// Ejercicio N° 4 //////////////////*/
function invertirArray(array) {
    // Verificar si el array está vacío
    if (array.length === 0) {
        return "El array está vacío";
    }
    const invArr = array.slice().reverse();
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 4    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 4: ${invArr}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 4: Invertir los elementos de un array`);
    consolaPrint(`invertirArray(${arr})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(invertirArray([1, 2, 3, 4, 5]));
console.log(invertirArray([10,11,12,'x','y','z']));
console.log(invertirArray(['a','b','c','d','e']));
/* PROCESO DE PENSAMIENTO Y SOLUCIÓN:

Análisis Inicial
El objetivo es invertir el orden de los elementos de un array. Es importante no modificar el array original para mantener buenas prácticas de programación.

Desarrollo de la Solución
Usamos el método slice() para hacer una copia del array original.
Aplicamos el método reverse() a esta copia para invertir su orden.
Incluimos una validación para manejar arrays vacíos y devolver un mensaje adecuado.
*/

// EJERCICIO 5
function eliminarDuplicados(array) {
    // Verificar si el array está vacío
    if (array.length === 0) {
        return "El array está vacío";
    }
    
    // Usar Set para eliminar duplicados y convertir de nuevo a array
    let newArray = [...new Set(array)];
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 5    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 5: ${newArray}`;
    consolaPrint(' ');
    consolaPrint(`Ejercicio 5: Eliminar elementos duplicados de un array`);
    consolaPrint(`eliminarDuplicados(${arr}))`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(eliminarDuplicados(['a','a','b','b','b','a','b','a']));
console.log(eliminarDuplicados(['hola', 'hola', 'hola', 'casa', 'auto', 'auto', 'hola']));
/* PROCESO DE PENSAMIENTO Y SOLUCIÓN:

Análisis Inicial
Queremos eliminar los duplicados de un array manteniendo el orden original.

Desarrollo de la Solución
Usamos el objeto Set, que automáticamente elimina duplicados gracias a su naturaleza de colección única.
Convertimos el Set nuevamente a un array con el operador de propagación (...).
Incluimos una validación para manejar arrays vacíos.
Esta implementación es moderna y eficiente, especialmente con arrays grandes.
*/

// EJERCICIO 6
function capitalizarPalabras(cadena) {
    let palabras = cadena.split(' ');
    let resultado = [];

    for (let palabra of palabras) {
        resultado.push(palabra.charAt(0).toUpperCase() + palabra.slice(1));
    }
    const newString = resultado.join(' ');
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 6    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 6: ${newString}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 6: Convertir la primera letra de cada palabra en mayúscula`);
    consolaPrint(`capitalizarPalabras("${input}")`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(capitalizarPalabras("hola mundo desde javascript"));
console.log(capitalizarPalabras("solo se que no se nada"));
console.log(capitalizarPalabras("sueñan los androides con ovejas electricas"));

/* Comencé dividiendo la cadena original en palabras. 
Luego, utilicé un bucle para procesar cada palabra, tomando su primera letra, convirtiéndola en mayúscula y uniendo el resto de la palabra. 
Finalmente, uní*/

// EJERCICIO 7
function fibonacci(n) {
    if (n <= 0) {
        return []; // Retorna un array vacío si n es menor o igual a 0
    } else if (n === 1) {
        return [0]; // Retorna sólo el primer número de Fibonacci
    } else if (n === 2) {
        return [0, 1]; // Retorna los dos primeros números de Fibonacci
    }

    // Inicializa el array con los dos primeros números de Fibonacci
    const fibSeries = [0, 1];

    // Calcular los siguientes números de Fibonacci hasta el n
    for (let i = 2; i < n; i++) {
        const nextNumber = fibSeries[i - 1] + fibSeries[i - 2]; // Sumar los dos últimos números
        fibSeries.push(nextNumber); // Agregar el nuevo número al array
    }
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 7    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 7: la lista de numeros de fibonachi de los primeros ${n} numeros son: ${fibSeries}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci.`);
    consolaPrint(`fibonacci(${n})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(25));

/*Para resolver el ejercicio, pensé en cómo se generan estos números. 
La secuencia comienza con los dos primeros números, 0 y 1. 
A partir de esos números, cada nuevo número se obtiene sumando los dos números anteriores. 
Uso un bucle `for` que itera `n` veces, en el cual almaceno cada número en un array. */
