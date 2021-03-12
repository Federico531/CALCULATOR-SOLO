const display = document.getElementById('display')
var isOn = false
var currentValue;
var values = [];
var total = 0;
var symbol = [];
var repeatsSymbol = false;
var lastSymbol = symbol[symbol.length - 1];
var anyDigit = [];

var numA;
var numB;
var operatore;

//SI EL ANTEULTIMO SIMBOLO EXISTE Y ES IGUAL AL ULTIMO SIMBOLO, DEJAR TODO IGUAL
//SI ES DIFERENTE, Y EXISTEN MAS DE DOS SIMBOLOS EN SIMBOLO, ASIGNAR EL SIMBOLO A OPERATOR
/*
    if(symbol[symbol.length - 2]symbol[symbol.length - 2] == lastSymbol){
    //HACER NADA
}
*/
function operator(e) {
    operatore = e;
    return operatore
}
//BOCETO DE OPERATION
function operation(a, operator, b) {
    if (!operator && !b) {
        numA = a;
    } else if (!b) {
        var simbolo = operator
    } else if (a & operator & b) {
        var numB = b;
    }
    if (operator == "+") {
        return a * b
    }
}
class Operation {

    sum() {

        //BOCETO DEL CONDITIONAL
        if (numA) {
            operatore = "+" //crear variable operator
            operation(numA, operatore) //cuando queremos ejecutar la funcion
            currentValue = display.value
            values.push(parseInt(currentValue))
            display.value = total;
            currentValue = 0;
            total += values[values.length - 1]; //ESTO DELEGARLO a operation()
            display.value = total;
        } else if (operator == "+") {
            numB = numA;
            numA = "";//DO NOTHING
        }
        //si toco 2 veces + hace display.value += total (por que?) 
        //Una calculadora normal si toco 2 veces + a la segunda no hace nada
        //HACER ESTO SI ENTRA EN EL IF


    }
    substract() {
    }
    multiply() {
    }
    divide() {
    }
    equals() {

    }
}

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {
    const operation = new Operation();
    if (repeatsSymbol) {

    } else {
        operation.sum();
    }

})
document.getElementById('-')
document.getElementById('/')
document.getElementById('X')
document.getElementById('%')

document.getElementById('=').addEventListener('click', () => {
    const operation = new Operation();

    //NO REGISTRA BIEN SI EL ULTIMO SIMBOLO SE REPITIO, Y SIEMPRE SALTA AL SWITCH


    console.log('inside the switch LASTsymbol' + symbol[symbol.length - 1]);

    switch (true) {
        case symbol[symbol.length - 1].includes("+"): operation.sum();
            break;
        case symbol[symbol.length - 1].includes("-"): alert('es una resta!');
            break;
        case symbol[symbol.length - 1].includes("X"): alert('es una multiplicación!');
            break;
        case symbol[symbol.length - 1].includes("/"): alert('es una division!');
            break;
        case symbol[symbol.length - 1].includes("%"): alert('es un porcentaje!');
            break;
        case symbol[symbol.length - 1].includes("="): alert('es un igual!');
            break;
        default: alert('no es un simbolo valido');
    }
    display.value = total;

})

//NUMBER DISPLAY

document.getElementById('calculator').addEventListener('click', (e) => {
    var digit = e.target.childNodes[0].nodeValue
    if (isOn) {
        if (isNumber(digit)) {
            numA = digit
            console.log("isNumber")
            digit = parseInt(digit);
            if (display.value === "0") {
                display.value = ""
                display.value += digit
            } else {
                if (values[values.length - 1] == display.value || display.value == total) {
                    display.value = "";
                    display.value += digit
                } else {
                    display.value += digit
                }
            }
        } else if (isSymbol(digit)) {
            //LASTSYMBOL DEVUELVE UNDEFINED POR ESO USO LA VARIABLE COMPLETA
            if (digit == symbol[symbol.length - 1] && !digit.includes("=")) {
                console.log('ultimo simbolo igual')
                repeatsSymbol = true;
                console.log(repeatsSymbol)
                //if(repeatsSymbol) { NO se EJECUTAN LAS OPERACIONES}
                //DEBERIA LIMPIAR symbols = [] SI EL OPERADOR ES DIFERENTE
            } else if (digit !== symbol[symbol.length - 1] || digit.includes("=")) {
                console.log("no se repite el ultimo");
                repeatsSymbol = false;
                symbol.push(digit);
                console.log(digit)
                console.log("isSymbol")
            } else if(digit.includes("=")){
                
            }
        } else {
            console.log("NO ES UN BOTÓN")
        }
    }
})

function isNumber(digit) {
    for (var i = 0; i < 10; i++) {
        var number = digit.includes(i.toString());
        if (!number) {
        } else {
            return true
        }
    }
}

function isSymbol(digit) {

    const sums = digit.includes("+");
    const substracts = digit.includes("-");
    const multiplies = digit.includes("X");
    const divides = digit.includes("/");
    const percentages = digit.includes("%");
    const equals = digit.includes("=");
    if (sums || substracts || multiplies || divides || percentages || equals) {
        return true;
    } else {
        return false;
    }
}

document.getElementById("ON/C").addEventListener('click', () => {
    isOn = true;
    display.value = "0"
    if (isOn) {
        total = 0;
        values = [];
        console.log("prendido")
    }
})

document.getElementById("OFF").addEventListener('click', () => {
    isOn = false;
    display.value = ""
    if (!isOn) {
        //MAKE TOAST SI NO PRENDE EN 10 SEGUNDOS O HACEN CLICK CON LA CALCU APAGADA
        console.log("apagado")
    }
})


//CODIGO DE PRUEBA (BOCETOS)
//SI REPITE SIMBOLO NO HACER NADA Y REASIGNAR SIMBOLO PARA QUE??
/*
if (isSymbol(digit) || isNumber(digit)) {
    if (lastSymbol == beforeLastSymbol) {
        //DO NOTHING
    } else {
        operator = lastSymbol
        //si es diferente va a asignar la operacion
        //deberia esperar un segundo numero para ejecutar resultado
    }
}

*/