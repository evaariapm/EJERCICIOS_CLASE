/**
 * Pseudocodigo
 * Inicialice el conteo de la app en 0
 * Lean los clickis con el boton de incremento
 * Incremento la variable de conteo de manera que cuando click, sumo gente
 * Cambio el recuento en el HTML para reflejar el nuevo recuento de personas
 * 
 */

function increment (){

    console.log("El boton ha sido pulsado")

}
increment() 

//hazme una funcion que se llame cuenta atrás y que haga una cuenta atrás del 5 al 1

function cuentaAtras () {  
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

cuentaAtras()

/**
 * Cuentame los minutos totales en los que un piloto da vueltas a un circuito.
 * Tu piloto va a dar de 3 a 5 vueltas, tu eliges. La funcion tiene que calcular
 * el tiempo TOTAL que ha gastado en dar vueltas.
 * 
 *PISTA
 * 3 VARIABLES
 * 1 FUNCION (1 VARIABLE + CONSOLE.LOG)
 * LLAMADA FUNCION
 */

// forma de realizarlo 1
let vueltas = 3;
let tiempoVueltas = 10;


function calculoVueltas(){
    let calculo = vueltas * tiempoVueltas;
    console.log("El tiempo total que ha gastado es de " + calculo + " minutos");
}

calculoVueltas()

// forma de realizarlo 2
let vuelta1 = 2.3
let vuelta2 = 3.2
let vuelta3 = 4.1

function tiempoVueltasTotales(){
    let tiempoTotalVueltas = vuelta1 + vuelta2 + vuelta3
    console.log("El tiempo total que ha gastado es de " + tiempoTotalVueltas + " minutos");
}

tiempoVueltasTotales()

//Creame una funcion que incremente su valor en 1 y que sea ejecutada 3 veces
//Trabaja con una variable que previamente se llame vueltasCompletadas

let vueltasCompletadas = 0

function cuentaVueltas(){
vueltasCompletadas = vueltasCompletadas + 1
}

cuentaVueltas()
cuentaVueltas()
cuentaVueltas()

console.log(vueltasCompletadas)

