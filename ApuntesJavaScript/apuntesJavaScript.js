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

///////////////////////////////////// ESTRUCTURAS DE CONTROL /////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////// EVENTOS ////////////////////////////////////////////////////////

//Eventos del teclado:
//onkeydown. Evento lanzado cuando una tecla es presionada.
//onkeypress. Evento lanzado cuando una tecla es presionada y soltada.
//onkeyup. Evento lanzado cuando una tecla es soltada.

//Eventos del ratón
//onclick. Evento lanzado cuando se realiza un click con el ratón.
//ondblclick. Evento lanzado cuando se realiza un doble click con el ratón.
//onmousedown. Evento lanzado cuando el botón del ratón es presionado.
//onmousemove. Evento lanzado cuando el puntero del ratón se mueve.
//onmouseout. Evento lanzado cuando el puntero del ratón sale del area del elemento.
//onmouseover. Evento lanzado cuando el puntero del ratón pasa por encima del elemento.
//onmouseup. Evento lanzado cuando el botón del ratón es soltado.

/////////////////////////////////////////////////////// EXCEPCIONES ////////////////////////////////////////////////////////




//////////////////////////////////////////////////// MÉTODOS PREDEFINIDOS /////////////////////////////////////////////////

toUpperCase() //convierte a mayúsculas

var texto = "hola mundo";
var textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas); // resultado: "HOLA MUNDO"


concat() //unir dos cadenas de texto

var texto1 = "hola";
var texto2 = "mundo";
var textoUnido = texto1.concat(" ", texto2);
console.log(textoUnido); // resultado: "hola mundo"

push()//agregar un elemento al final de una array

var numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // resultado: [1, 2, 3, 4]

pop()//eliminar el último elemento de una array

var numeros = [1, 2, 3];
numeros.pop();
console.log(numeros); // resultado: [1, 2]

Math.random() //genera un número aleatorio entre 0 y 1.

var numeroAleatorio = Math.random();
console.log(numeroAleatorio); // resultado: número aleatorio entre 0 y 1

//Para obtener un número entero aleatorio comprendido entre dos dígitos (ambos incluidos), podemos utilizar la siguiente función:
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////////////////////////// OBJETOS /////////////////////////////////////////////////

//Permiten agrupar valores y funciones relacionadas en una sola entidad. Se definen mediante la creación de una "class" o contructor que describe los atributos y métodos.
//1º definimos el constructor:
function NombreConstructor(atributo1,
    atributo2) {
    this.atributo1 = atributo1; //La palabra clave "this" se utiliza para hacer referencia al objeto que se está creando y asignar los valores de los atributos y la definición del método
    this.atributo2 = atributo2;
    this.metodo = function () {
    console.log("Hola");
    }
}

//2º creamos un objeto a partir del constructor. Creado el objeto, podemos acceder a su atributos y métodos.
var objeto = new NombreConstructor(valor1, valor2);    

//////////////////////////////////////////////////// POP-UPS Y ALERTAS /////////////////////////////////////////////////
//Ventanas emergentes que aparecen en uan web. 

//ventana emergente con mensaje y botón de aceptar. Habitualmente para mostrar mensaje de error o proporcionar información al usuario.
alert("Ejemplo de ‘alert’ en JavaScript"); 

//ventana emergente con mensaje y dos botones: aceptar y cancelar. Habitualmente para pedir una confiramción antes de una acción importante.
if (confirm("Ejemplo de ‘confirm’ en JavaScript"))
    {
    // Código para la confirmación
    } else {
    // Código para la cancelación
}


//////////////////////////////////////////////////// FUNCIONES PREDEFINIDAS /////////////////////////////////////////////////

//convierte un texto a número entero. Si no empieza por un número, devolverá NaN
parseInt()

let num1 = parseInt("123");
console.log(num1); // Output: 123
let noNum1 = parseInt("abc");
console.log(noNum1); // Output: NaN

//conviernte un texto a número decimal. 
parseFloat()

let num2 = parseFloat("3.14");
console.log(num2); // Output: 3.14
let noNum2 = parseFloat("abc");
console.log(noNum2); // Output: NaN

//determina si el valor es número o no. Si no es número, devuelve "true"
isNaN()

let num = 123;
console.log(isNaN(num)); // Output: false
let noNum = "abc";
console.log(isNaN(noNum)); // Output: true

//codifica una cadena como una URI valida
encodeURI()

let uri = "https://www.example.com/search?q=JavaScript tutorial";
console.log(encodeURI(uri));
// Output: https://www.example.com/search?q=JavaScript%20tutorial

decodeURI()