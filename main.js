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
    let response = `Solución 1: Tiene ${contador} vocales.`;  
    console.log('Ejercicio 1: Contar vocales en una cadena.');
    console.log(`contarVocales("${cadena}")`);
    console.log(response);

    consolaPrint(' ');
    consolaPrint(`Ejercicio 1: Contar vocales en una cadena`);
    consolaPrint(`contarVocales("${cadena}")`);
    consolaPrint(response)
    consolaPrint(' '); 
    return response
}

contarVocales("Desarrollo de Sistemas Web");
contarVocales("Desarrollo e Implementación de Sistemas en la Nube");
contarVocales("Ingeniería de Software");


/*Creamos un array que contenga todas las vocales posibles, incluyendo acentuadas.
Convertimos la cadena a minúsculas para simplificar las comparaciones.
Recorremos cada carácter de la cadena y verificamos si está en el array de vocales usando el método includes(). Si lo está, incrementamos un contador.
*/


/*///////////////// Ejercicio N° 2 //////////////////*/
function maxNum(arrayNum) {
    // Usar Math.max con el spread operator es más directo que reduce
    let numMayor = Math.max(...arrayNum);
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 2    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solución 2: El número mayor es ${numMayor}`;
    console.log('Ejercicio 2: Muestra el mayor número de un array.');
    console.log(`maxNum(${arrayNum})`);
    console.log(response);

    consolaPrint(' ');
    consolaPrint(`Ejercicio 2: Muestra el mayor número de un array`);
    consolaPrint(`maxNum(${arrayNum})`);
    consolaPrint(response);  
    consolaPrint(' '); 
    return response
}

maxNum([1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8]);
maxNum([-1, -20, -4, -5, -8, -1, -33, -3, -1, -6, -8]);
maxNum([1, 21, 31, 4, 51, 81, 0, -3, 3, -2, 9, 1, 6, 7, 8]);

/* definimos una función llamada maxNum que toma un argumento arrayNum, que se espera que sea un array de números. 
Utilizamos Math.max combinado con el spread operator (...). 
Math.max es una función incorporada en JavaScript que devuelve el valor máximo entre los números proporcionados como argumentos.
El spread operator (...) permite "expandir" el array y pasar sus elementos como argumentos individuales a Math.max.
Creamos un string llamado response que incluye el número mayor encontrado. */

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
    let response = `Solución 3: La media es ${media.toFixed(2)}`; 
    console.log('Ejercicio 3: Calcular la media de un array de números.');
    console.log(`calcularMedia(${array})`);
    console.log(response); 

    consolaPrint(' ');
    consolaPrint(`Ejercicio 3: Calcular la media de un array de números`);
    consolaPrint(`calcularMedia(${array})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

calcularMedia([120, 220, 330, 440]);
calcularMedia([-10, 0, 10, 20, -20]);
calcularMedia([1.5, 2.5, 3.5, 4.5, 5.5]);


/* Usamos el método reduce() para sumar todos los números del array de forma declarativa.
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
    let response = `Solución 4: ${invArr}`;  
    console.log('Ejercicio 4: Invertir los elementos de un array.');
    console.log(`invertirArray(${array})`);
    console.log(response); 

    consolaPrint(' ');
    consolaPrint(`Ejercicio 4: Invertir los elementos de un array`);
    consolaPrint(`invertirArray(${array})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

invertirArray([1, 2, 3, 4, 5]);
invertirArray([10,11,12,'x','y','z']);
invertirArray(['a','b','c','d','e']);

/* Usamos el método slice() para hacer una copia del array original.
Aplicamos el método reverse() a esta copia para invertir su orden.
Incluimos una validación para manejar arrays vacíos y devolver un mensaje adecuado.*/


/*///////////////// Ejercicio N° 5 //////////////////*/
function eliminarDuplicados(array) {
        if (array.length === 0) {
        return "El array está vacío";
    }
    
    let newArray = [...new Set(array)];
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 5    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solución 5: ${newArray}`;
    console.log('Ejercicio 5: Eliminar elementos duplicados de un array.');
    console.log(`eliminarDuplicados(${array})`);
    console.log(response); 

    consolaPrint(' ');
    consolaPrint(`Ejercicio 5: Eliminar elementos duplicados de un array`);
    consolaPrint(`eliminarDuplicados(${array})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]);
eliminarDuplicados(['a','a','b','b','b','a','b','a']);
eliminarDuplicados(['hola', 'hola', 'hola', 'casa', 'auto', 'auto', 'hola']);

/* Verificamos si el array está vacío. La función verifica si el tamaño (length) del arreglo es 0. 
Si el arreglo está vacío, devuelve un mensaje indicando que está vacío. 
Esto es una buena práctica para evitar procesamiento innecesario y posibles errores más adelante.
 Usamos Set para eliminar duplicados y convertir de nuevo a array
 Un Set en JavaScript es una colección de valores únicos. Si intentamos agregar un valor que ya existe en el Set, 
 no se añadirá nuevamente. Al pasar el arreglo original (array) al Set, automáticamente se eliminarán todos los duplicados.
Utilizamos la sintaxis de desestructuración [...] para convertir el Set de vuelta a un arreglo. 
Esto crea un nuevo arreglo (newArray) que contiene solo los elementos únicos del arreglo original.*/


/*///////////////// Ejercicio N° 6 //////////////////*/
function capitalizarPalabras(cadena) {
    let palabras = cadena.split(' ');
    let resultado = [];

    for (let palabra of palabras) {
        resultado.push(palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase());
    }
    const newString = resultado.join(' ');
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 6    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solución 6: ${newString}`; 
    console.log('Ejercicio 6: Convertir la primera letra de cada palabra en mayúscul.');
    console.log(`capitalizarPalabras("${cadena}")`);
    console.log(response); 

    consolaPrint(' ');
    consolaPrint(`Ejercicio 6: Convertir la primera letra de cada palabra en mayúscula`);
    consolaPrint(`capitalizarPalabras("${cadena}")`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

capitalizarPalabras("hola mundo desde javascript");
capitalizarPalabras("solo se que no se nada");
capitalizarPalabras("sueñan los androides con ovejas electricas");

/* Comenzamos dividiendo la cadena original en palabras. 
Luego, utilizamos un bucle para procesar cada palabra, tomando su primera letra, 
convirtiéndola en mayúscula y uniendo el resto de la palabra. 
Finalmente, las unimos*/
 

/*///////////////// Ejercicio N° 7 //////////////////*/
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
    let response = `Solución 7: la lista de números de Fibonacci de los primeros ${n} números son: ${fibSeries}`;  
    console.log('Ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci.');
    console.log(`fibonacci(${n})`);
    console.log(response);
    
    consolaPrint(' ');
    consolaPrint(`Ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci.`);
    consolaPrint(`fibonacci(${n})`);
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

fibonacci(10);
fibonacci(15);
fibonacci(25);

/* La función calcula los primeros n números de la serie de Fibonacci 
usando condiciones para manejar los casos básicos (cuando n es 1 o 2) 
y luego utiliza un bucle para generar y almacenar los números restantes en un arreglo que se devuelve al final.*/