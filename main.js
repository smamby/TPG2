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
    consolaPrint('contarVocales("JavaScript")');
    consolaPrint(response)
    consolaPrint(' '); 
    return response
}
console.log(contarVocales("JavaScript"));

/* Recibo los datos necesarios como parametros y los uso en la formula de area del triangulo*/

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
    consolaPrint('maxNum(arrayNumeros)');
    consolaPrint(response);  
    consolaPrint(' '); 
    return response
}

console.log(maxNum(arrayNumeros));
/* uso split para separar la cadena por sus espacios metiendo cada parte en un indice de array para luego leer su longitud */

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
    consolaPrint('calcularMedia([10, 20, 30, 40])');
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(calcularMedia([10, 20, 30, 40]));

/* Recorro la cadena para atras y cada caracter lo concateno al resultado para ir construyendo una cadena invertida */

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
    consolaPrint('invertirArray([1,2,3,4,5])');
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(invertirArray([1, 2, 3, 4, 5]));
/*  */

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
    consolaPrint('eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]))');
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));


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
    consolaPrint('capitalizarPalabras("hola mundo desde javascript")');
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(capitalizarPalabras("hola mundo desde javascript"));

/* recibe un imput, lo multiplica, y lo incrusta en una string */

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
    consolaPrint('fibonacci(10)');
    consolaPrint(response);  
    consolaPrint(' ');
    return response
}

console.log(fibonacci(10));

/* recibe un imput, lo multiplica, y lo incrusta en una string */