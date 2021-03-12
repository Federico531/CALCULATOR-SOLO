/*COMO HACER COMPORTAR A = AL PRESIONARLO 2 VECES SEGUIDAS 

HACER QUE = SE COMPORTE ASI
numA operator numB  =  total
1       +       2   =    3

total + numB = total
  3   +  2   =   5
if(anydigit[anydigit.length - 1].includes("=") && anydigit[anydigit.length - 2].includes("=")){
    numA = total;
    total = total + numB
}

= 5    (+2)
= 7    (+2)
= 9    (+2)
= 11   (+2)
= 13   (+2)
= 15   (+2)


*/
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

//BOCETO DE OPERATION
function operation(a, operator, b) {

    //Si el 
    if (!operator && !b) {
        numA = a;
    } else if (!b) {
        var simbolo = operator
    } else if (a & operator & b) {
        var numB = b;
    }
    if (operator == "+") {

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
            repeatsSymbol = false;

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
            numA = display.value
        } else if (isSymbol(digit)) {
            anyDigit.push(digit)

            //---> RESOLVER ESTO<----
            //SI PRESIONO UN MAS LUEGO DE UN NUMERO, QUE VIENE LUEGO DE OTRO MAS
            // a. 1 + 2 + 3 --> no tiene nada de malo si el ultimo y el antepenultimo son +
            // b. 1 + 2 + + --> el segundo + tiene que ser un numero u otro simbolo diferente

            /*
            if(!isNumber(anyDigit[anyDigit - 2])  ){

            }
            */
            if (isSymbol(anyDigit[anyDigit.length - 1]) && anyDigit[anyDigit.length - 1] == anyDigit[anyDigit.length - 2] && !digit.includes("=")) {
                repeatsSymbol = true;
            } else if (digit !== symbol[symbol.length - 1] || digit.includes("=") || anyDigit[anyDigit.length - 1 !== symbol[symbol.length - 1]]) {
                repeatsSymbol = false;
                symbol.push(digit);
            } else if (digit.includes("=")) {

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