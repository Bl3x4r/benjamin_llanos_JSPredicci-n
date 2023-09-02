//Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?
function miAñoDeNacimiento() {
    console.log("Nací en " + 1980);
}

/*Estoy seguro que de llamar a la función,
lo que se mostrará por pantalla va a ser "Nací en 1980" */
miAñoDeNacimiento();

/* Predicción 2: Si enviaramos un año de nacimiento a la función
con la variable EntradaAñoNacimiento siendo de valor 1980
¿Que indicaría console.log? */
function myBirthYearFunc(EntradaAñoNacimiento) {
    console.log("Nací en " + EntradaAñoNacimiento + "  por segunda vez");
}
// Estoy seguro de que console.log indicará el string "Nací en 1980"
let EntradaAñoNacimiento = 1980;
myBirthYearFunc(EntradaAñoNacimiento);

/*Si var num1=10 y var num2=20.
¿Qué indicaría console.log?*/

function add(num1, num2) {
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
/*Mi predicción es que se indicaría la suma de ambas variables,por ende,
en pantalla se vería el numero 30*/
let num1=10;
let num2=20;
add(num1,num2);

/* Solo como inciso me gustaria recalcar que despues de hacer las predicciones corrio el codigo 
Pero no lo pongo con las modificaciones en este archivo, debido a que se llama dos veces a la misma función,
lo cual hace que en la primera vez el valor de 1980 se deje de lado e imprima undefined*/