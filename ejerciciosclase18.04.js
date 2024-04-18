//1. Saludo Personalizado: Declara una funcion llamada saludar que reciba un nombre como parametro.
//La funcion debe imprimir en la consola un saludo, por ejemplo "Hola, [nombre]". 
//Llama a esta funcion pasandole tu propio nombre como argumento.

function saludar() {
    console.log('Hola, Eva');
    
}

saludar()

//2. Tabla de Multiplicar: Crea una funcion llamada tablaMultiplicar que reciba un numero. 
//La funcion debe imprimir la tabla de multiplicar de ese numero del 1 al 10 usando un bucle. 
//Por ejemplo, si el numero es 5, debe imprimir "5 x 1 = 5", "5 x 2 = 10", etc.
//Normalmente se hace con un for, pero no sabemos hacerlo. Si sabes hacerlo con un for, hazlo.

let numero1 = 5
let numero2 = 0

function tablaMultiplicar() {
    numero2 = numero2 +1
    resultado= numero1 * numero2
    console.log( numero1 + 'x' + numero2 + ' = '+ resultado)
}

tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()
tablaMultiplicar()


//3. Convertidor de Temperatura: Declara una funcion convertirCelsiusAFahrenheit que tome una temperatura 
//en Celsius y la convierta a Fahrenheit, usando la formula \( F = C \times 9/5 + 32 \). La funcion debe 
//imprimir el resultado en la consola. Usa constantes, no variables. Aunque no lo hayamos dado,
//mira como declarar una constante en JS.


 function convertirCelsiusAFahrenheit() {
    const celsius = 5
    const fahrenheit= celsius * 9/5 + 32
    console.log('La conversion a Fahrenheit es de: ' + fahrenheit + 'º');

 }

 convertirCelsiusAFahrenheit()



//4. Calculadora de IVA: Escribe una funcion calcularIVA que reciba el precio de un producto como argumento. 
//La funcion debe calcular el 21% de IVA sobre ese precio y retornar el precio final incluido el IVA. 
//Luego, imprime este precio final en la consola.

let precio = 14
let iva = precio * 0.21

function calcularIVA() {
    console.log('el precio total es de: ' + (precio + iva))
   // console.log( precio * 0.21 + precio + '€');
}

calcularIVA()