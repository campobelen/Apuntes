///////////////////////////////////////////////VARIABLES////////////////////////////////////////////////////////////////

//(No necesitan indicar el type. )

var nombre = "Juan"; // declarar una variable con var (alcance dentro de la funcón)
let edad = 30; // declarar una variable con let (alcance desde fuera de una función, es decir, de bloque)
const PI = 3.1416; // declarar una variable con const (alcance desde fuera de una función, es decir, de bloque)

///////////////////////////////////////////////OPERADORES//////////////////////////////////////////////////////////////

//OPERADORES ARTIMÉTICOS (para realizar operaciones entre variables)
var a = 10;
var b = 5;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplicación
console.log(a / b); // división
console.log(a % b); // módulo (resto de la división)
console.log(++a); // incremento de uno en uno
console.log(--b); // decremento de uno en uno

//OPERADORES DE COMPARACIÓN (comparan dos valores devolviendo booleano, es decir, verdadores o falso)
var c = 10;
var d = 5;
var e = 3;

console.log(c == d); // igual a
console.log(c != d); // diferente a
console.log(c > d); // mayor que
console.log(c < d); // menor que
console.log(c >= d); // mayor o igual que
console.log(c <= d); // menor o igual que

console.log(c > d && c > e); // d y e son menores que c
console.log(c > d || c < e); // d es menor que c ó e es mayor que c
console.log(!(c > d)); // negación

//OPERADORES DE ASIGNACIÓN (asginan valores a variables)
var f = 10;
f += 5; // f es igual a 15
f -= 5; // como el resultado anteriore fue 15, f es igual a 10
f *= 2; // como el resultado anteriore fue 10, f es igual a 20
f /= 2; // como el resultado anteriore fue 20, f es igual a 10
f %= 3; // como el resultado anteriore fue 10, f es igual a 1


/////////////////////////////////////////////////FUNCIONES/////////////////////////////////////////////////////////////

//DECLARAR UNA FUNCIÓN
/** Se coloca la palabra "function" seguida del nombre que queramos, llaves y el código --> function miFuncion (){codigo;}
 * permite encapsular un bloque de codigo que luego puede usarse en diferentes partes del programa.
 * IMPORTANTE! Las variables declaradas dentro de la función se destruyen al finalizar la ejecución de la misma.
*/

function sumar(x, y) {
    var resultado = x + y;
    return resultado;//la palabra clave "return" sirve para devolver el valor de "resultado" cuando se llama a la función.
}

//LLAMAR A UNA FUNCIÓN
/** Se escribe su nombre seguido de parentesis y los argumentos que requiere (a veces no tiene) --> miFuncion
 * Vamos a llamar a la función "sumar" y pasamos dos argumentos, 5 y 10. El resultado de la función se guarda
 * en la variable "resultado" y se imprime en la consola.
*/

var resultado = sumar(5, 10);
console.log(resultado); // el resultado sería 15

/////////////////////////////////////ESTRUCTURAS DE CONTROL /////////////////////////////////////////////////////

//IF-ELSE ()
let x = 10;
if (x > 5) {
console.log("x es mayor que 5");
} else {
console.log("x es menor o igual que 5");
}

//WHILE (ejecuta un código mientras que se cumpla una condición)

let i = 0;
while (i < 5) {
console.log(i);
i++;
}

//FOR (permite realizar un bucle un número exacto de veces)
for (let i = 0; i < 5; i++) {
    document.write(i);
}



