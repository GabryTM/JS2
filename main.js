//1.Boleanos//

//Dados 2 variables booleanas: booleano1 = true; booleano2 = false;

const booleano1 = true;
const booleano2 = false;

//Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

const booleanoAnd = booleano1 && booleano2;

//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2

const booleanoOr = booleano1 || booleano2;

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1

const booleanoNot = !booleano1;

//Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)

const booleanoMix0 = (booleanoOr)&&(booleano1 ||(booleanoNot&& !booleano2));

//2.Operadores//

//Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

const valorDivisión = 17 / 3;
console.log (valorDivisión.toFixed(2));

//Crear variable valorResto cuyo valor sea el resto de 17 entre 7

const valorResto = 17 % 7;
console.log (valorResto)

//3. Lógica de Programación//

//Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

const A = 9;
const B = 9;

if (A == B) {console.log("Son iguales")} else {"No son iguales"}
if (A == B) {console.log("Son iguales")} else {"No son iguales"}

//Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

const mochila = [0,1,2,3,4,5,6,7,8,9]
if (mochila.length > 10) {console.log ("No puedo cargar con tantas cosas");} 
else if (mochila.length >= 2 && mochila.length <=10)
{console.log ("Qué bien voy con mi mochila")} else {console.log ("Creo que no necesito mochila")};
//Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

const diaFestivo = true;
console.log ("Hoy no trabajo") ? console.log("Hoy trabajo");

//Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

const arrayBucle = [];
for (let i = 4 < 18; i++) {console.log (arrayBucle)} //no caigo ahora mismo

//Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

