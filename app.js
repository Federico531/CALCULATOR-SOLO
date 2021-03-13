/*
FIX THIS BUGS!!
"" when I press the button
() --> result
A.  2 "+" 2 "=" (4) "+" (8) "=" (16)
                    "+" Should take new input and add when new operation is entered
                            "=" Is repeating last operation ("+") 
B. 2 "+" "=" (4) "+" (8)
          <--OK  "+" Should take new input and sum it with previous total   

IS NOT BUG
C. 2 "+" "=" (4) 
D. 2 "+" 2 "+" (4) "+" "=" (8) "="  "=" alert(=)
                     <--OK "="           

*/
/*
REFACTOR -->Cuando tengo que cambiar variable symbola a operation,
tengo que cambiarla en todos lados porque entra siempre como variable global
en vez de como parametro de una funcion
*/

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
//Refactor values not asigned 
var lastSymbol = symbol[symbol.length - 1];
var anyDigit = [];
//Global params of operation() --> REFACTOR 
var numA;
var numB;
var operatore;

//SI EL ANTEULTIMO SIMBOLO EXISTE Y ES IGUAL AL ULTIMO SIMBOLO, DEJAR TODO IGUAL
//SI ES DIFERENTE, Y EXISTEN MAS DE DOS SIMBOLOS EN SIMBOLO, ASIGNAR EL SIMBOLO A OPERATOR

//DONDE IRIA ESTE CODIGO?
// EN ('=') PODRIA IR (PODRIA VOLVERSE UNA FUNCION LUEGO PARA NO REPETIR EL CODIGO)
// 
//

if (symbol[symbol.length - 2] == symbol[symbol.length - 1]) {
    //HACER NADA
} else if (symbol[symbol.length - 2] != symbol[symbol.lenth - 1] && symbol.length > 2) {
    //REALIZAR LA OPERACIÓN QUE CORRESPONDA AL ULTIMO SIMBOLO
}


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
        symbol.push("+");

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
    }
    substract() {
    }
    multiply() {
    }
    divide() {
    }
    equals() {
        console.log(symbol.length)
        if(symbol[symbol.length - 1].includes("+")){
            this.sum()
        }
    }
}

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {
    const operation = new Operation();
    if (repeatsSymbol) {
        console.log("hacer nada")
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

    console.log('inside the switch LASTsymbol' + symbol[symbol.length - 1]);
    /*
    Cuando toco dos veces equals repite la ultima operación diferente a equals 
    */
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
        case symbol[symbol.length - 1].includes("="): operation.equals();
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

            //FUNCTION TYPENUMBER
            repeatsSymbol = false;
            digit = parseInt(digit);
            if (display.value === "0") {
                display.value = ""
                display.value += digit
            } else {
                /*BUG
                a- Cuando trato de escribir 11 + 111 --> se borra al 3er numero
                b- porque se cumple la condicion abajo porque
                c- en la operación sum se asigna y se mezclan los 3 valores
                */
                if (values[values.length - 1] == display.value || display.value == total) {
                    display.value = "";
                    display.value += digit
                } else {
                    display.value += digit
                }
            }
            numA = display.value

        } else if (isSymbol(digit)) {
            if (anyDigit[anyDigit.length - 1] == anyDigit[anyDigit.length - 2] && !digit.includes("=") || symbol.length < 2 && digit == symbol[symbol.length - 1]) {
                repeatsSymbol = true;

            } else if (digit !== symbol[symbol.length - 1] || digit.includes("=") || anyDigit[anyDigit.length - 1 !== symbol[symbol.length - 1]]) {

                anyDigit.push(digit)
                symbol.push(digit);
                repeatsSymbol = false;

            } else if (digit.includes("=")) {
                //TAL VEZ ESTA FUNCION NO SIRVA DE NADA
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
    //crep que se puede armar algun objeto con metodos, y hacer map de esos metodos hasta que alguno de true?
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