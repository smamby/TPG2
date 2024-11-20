function consolaPrint(text) {
    const consola = document.getElementById('consola');
    consola.innerHTML += text+'<br>';
}

//  EJERCICIO 1
function contarVocales(text) {
    const vocales = ['a','e','i','o','u'];
    let cantVocales = 0;
    for (let i = 0; i < text.length; i++) {
        if (vocales.includes(text[i])) {
            cantVocales += 1;
        } 
    }
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 1    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 1: Tien ${cantVocales} vocales.`;   
    consolaPrint(' ');
    consolaPrint(`Ejercicio 1:`);
    consolaPrint(`contarVocales("${text}")`);
    consolaPrint(response)
    consolaPrint(' '); 
    return response
}
console.log(contarVocales("JavaScript"));
console.log(contarVocales("checklist"));
console.log(contarVocales("aguantadero"));
/* Recorro cada letra de la palabra y verifico si esta esta incluida en el array con las 5 vocales, 
si esta incluida suma 1 a la variable que contabiliza las vocales*/

// EJERCICIO 2
let arrayNumeros = [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8];
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
    consolaPrint(`Ejercicio 2:`);
    consolaPrint(`maxNum(${arrayNum})`);
    consolaPrint(response);  
    consolaPrint(' '); 
    return response
}

console.log(maxNum([1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8]));
console.log(maxNum([-1, -20, -4, -5, -8, -1, -33, -3, -1, -6, -8]));
console.log(maxNum([1, 21, 31, 4, 51, 81, 0, -3, 3, -2, 9, 1, 6, 7, 8]));
/* Reduzco el array a un solo numero que represente al mayor de todos, para esto utilizo una funcion ternaria en el callback del reduce */

// EJERCICIO 3
function calcularMedia(arr) {
    let suma = arr.reduce((a,b) => a+b);
    let media = suma / arr.length;
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 3    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 3: La media es  ${media}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 3:`);
    consolaPrint(`calcularMedia(${arr})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(calcularMedia([10, 20, 30, 40]));
console.log(calcularMedia([-20, 90, 130, 20]));
console.log(calcularMedia([1, 1, 1, 40]));

/* Reduzco el array a un solo valor que represente la suma de todos los valores, luego lo divido por la longitud del array y obtengo la media */

// EJERCICIO 4
function invertirArray(arr) {
    let invArr = [];
    for (let i = 1; i <= arr.length; i++) {
        let element = arr[arr.length-i]
        invArr.push(element);
    }
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 4    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 4: ${invArr}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 4:`);
    consolaPrint(`invertirArray(${arr})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(invertirArray([1, 2, 3, 4, 5]));
console.log(invertirArray([10,11,12,'x','y','z']));
console.log(invertirArray(['a','b','c','d','e']));
/* Recorro el arra de atras hacia adelante y a cada posicion la empujo a un nuevo array, obteniendo el mismo array pero invertido */

// EJERCICIO 5
function eliminarDuplicados(arr) {
    let lista = new Set(arr);
    let newArray = Array.from(lista);
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 5    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 5: ${newArray}`;
    consolaPrint(' ');
    consolaPrint(`Ejercicio 5:`);
    consolaPrint(`eliminarDuplicados(${arr}))`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(eliminarDuplicados(['a','a','b','b','b','a','b','a']));
console.log(eliminarDuplicados(['hola', 'hola', 'hola', 'casa', 'auto', 'auto', 'hola']));
/* Convierto el array a un set, que por definicion no puede tener elementos repetidos. Luego vuelvo a convertir el set en array */


// EJERCICIO 6
function capitalizarPalabras(input) {
    let inputArray = input.split(' ');
    let newString = ''
    inputArray.forEach(e => {
        e = e[0].toUpperCase() + e.slice(1);
        newString += e+' ';
    });
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 6    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 6: ${newString}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 6:`);
    consolaPrint(`capitalizarPalabras("${input}")`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(capitalizarPalabras("hola mundo desde javascript"));
console.log(capitalizarPalabras("solo se que no se nada"));
console.log(capitalizarPalabras("sueñan los androides con ovejas electricas"));

/* Separo el string por sus espacios y los vuelvo un array con cada palabra utilizando split,
luego le aplico a cada palabra del array un toUpperCase a el indice 0, para solo afectar a la primer letra, eso lo hago recorriendo todo el array
pasando por todas las palabras. Cada palabra alterada la guardo sobre el mismo indice haciendo una concatenacion de la primer letra + el resto de la palabra utilizando slice */

// EJERCICIO 7
function fibonacci(n) {
    let data1 = 0;
    let data2 = 1;
    let data3 = 0;
    let lista = [0,1]

    for (let i = 0; i<(n-2); i++) {
        data3 = data1 + data2;
        data1 = data2;
        data2 = data3;
        lista.push(data3);
    }
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 7    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 7: la lista de numeros de fibonachi de los primeros ${n} numeros son: ${lista}`;  
    consolaPrint(' ');
    consolaPrint(`Ejercicio 7:`);
    consolaPrint(`fibonacci(${n})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(25));

/* Uso dos variables de arranque con los primeros dos numeros o y 1, y uso una variable comodin para guardar la suma,
luego paso el valor 2 al 1 y el 3 al 2 y vuelvo a hacer la suma, repito cuantas veces indique el parametro de entreda n */