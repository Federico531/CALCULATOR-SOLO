/*

"" when I press the button
() --> result
FIX THIS BUGS!!

B- FUNCIONA ASI           "2" "+" "3" "=" (5) "4" "=" (9)
                                    -->5 + 4 (MAL)

DEBERIA FUNCIONAR ASI  "2" "+" "3" "=" (5) "4" "=" (7)
                                        --> 4 + 3 (Es decir que numB hace la misma operación sobre el nuevo numero)
                                        --> Y siempre que presione "=" "numero" se genera esta sustitución 

//DONDE EJECUTAMOS ESTO?
//EN operation.equal o en click.("=")??


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

const display = document.getElementById('display')
var isOn = false
var currentValue;
var currentOperation;
var values = [];
var total = 0;
var symbol = [];
var repeatsSymbol = false;
var repeatsEqual = false;
var wasEqualBefore = false;
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

//NO REALICE ESTA ACCIÓN YA? REVISAR
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
        /*

        ACA IRIA EL CODIGO QUE REASIGNA if repeats equal numA

        */

        if (numA && !repeatsSymbol) {
            //   operatore = "+" //crear variable operator
            //   operation(numA, operatore) //cuando queremos ejecutar la funcion

            values.push(parseInt(numA))
            display.value = total;
            currentValue = 0;
            total += values[values.length - 1]; //ESTO DELEGARLO a operation()
            display.value = total;
        }
    }
    substract() {
        
        if (numA && !repeatsSymbol) {
            //   operatore = "+" //crear variable operator
            //   operation(numA, operatore) //cuando queremos ejecutar la funcion

            values.push(parseInt(numA))
            display.value = total;
            currentValue = 0;
            total -= values[values.length - 1]; //ESTO DELEGARLO a operation()
            display.value = total;
        }
    }
    multiply() {
    }
    divide() {
    }
    equals() {

        console.log(symbol.length)
        if (symbol[symbol.length - 1].includes("+")) {
            this.sum()
        }
    }
}

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {
    const operation = new Operation();

    wasEqualBefore = false;

    if (anyDigit[anyDigit.length - 1] && anyDigit[anyDigit.length - 2] && anyDigit[anyDigit.length - 2].includes("+") && anyDigit[anyDigit.length - 1].includes("+")) {
        console.log("el ultimo fue un igual por tanto aceptamos otro numero normalmente")
        repeatsSymbol = true;

        //REDUNDANTE Y MAL PORQUE DE POR SI SI ENTRAMOS ACA HABRIA SIDO PUSHEADO EL SIMBOLO
        if (symbol[symbol.length - 1].includes("+")) {

        }
    } else if (anyDigit[anyDigit.length - 2] && anyDigit[anyDigit.length - 2].includes("=")) {
        wasEqualBefore = true;
        console.log("Before + there was =")

    }

    // operation.sum

    //YA SE ESTA REASIGNANDO BIEN EL ULTIMO NUMERO
    // ESTE CODIGO VA DENTRO DE OPERATION.SUM O ESTA BIEN ACA? YA QUE BLOQUEA SUM DE HACER ALGO Y REASIGNA EL VALOR
    //O NO REASIGNA NADA? VER BIEN
    if (wasEqualBefore) {
        console.log("total +=  Last value entered after +")
        numA = currentValue
        console.log("Este es el operando que se recicla " + numA)
        if (repeatsSymbol) {
            console.log("hacer nada")
        } else {
        }
    } else {
        wasEqualBefore = false
        operation.sum();
    }
    wasEqualBefore = false


})
document.getElementById('-').addEventListener('click', () => {
    const operation = new Operation();

    wasEqualBefore = false;

    if (anyDigit[anyDigit.length - 1] && anyDigit[anyDigit.length - 2] && anyDigit[anyDigit.length - 2].includes("+") && anyDigit[anyDigit.length - 1].includes("+")) {
        console.log("el ultimo fue un igual por tanto aceptamos otro numero normalmente")
        repeatsSymbol = true;

        //REDUNDANTE Y MAL PORQUE DE POR SI SI ENTRAMOS ACA HABRIA SIDO PUSHEADO EL SIMBOLO
        if (symbol[symbol.length - 1].includes("-")) {

        }
    } else if (anyDigit[anyDigit.length - 2] && anyDigit[anyDigit.length - 2].includes("=")) {
        wasEqualBefore = true;
        console.log("Before + there was =")

    }

    // operation.sum

    //YA SE ESTA REASIGNANDO BIEN EL ULTIMO NUMERO
    // ESTE CODIGO VA DENTRO DE OPERATION.SUM O ESTA BIEN ACA? YA QUE BLOQUEA SUM DE HACER ALGO Y REASIGNA EL VALOR
    //O NO REASIGNA NADA? VER BIEN
    if (wasEqualBefore) {
        console.log("total +=  Last value entered after +")
        numA = currentValue
        console.log("Este es el operando que se recicla " + numA)
        if (repeatsSymbol) {
            console.log("hacer nada")
        } else {
        }
    } else {
        wasEqualBefore = false
        operation.sum();
    }
    wasEqualBefore = false


})
document.getElementById('/')
document.getElementById('X')
document.getElementById('%')

document.getElementById('=').addEventListener('click', () => {
    const operation = new Operation();
    anyDigit.push('=')
    //ESTO ESTA MAL PORQUE NO HABRIAMOS ENTRADO ACA DE NO SER POR UN PRIMER CLICK EN =
    //PENSARLO BIEN
    //SI EL ULTIMO SIMBOLO NO ES = GUARDAMOS EN LA CONSTANTE

    //if (anyanyDigit[anyDigit.length - 1].includes("=") && anyDigit[anyDigit.length - 2].includes("=")) {


    if (anyDigit[anyDigit.length - 2] && anyDigit[anyDigit.length - 1].includes("=") && anyDigit[anyDigit.length - 2].includes("=")) {
        repeatsEqual = true;
        console.log("repite igual")
        //ACA DEBERIA REASIGNAR NUM Y REPETIR HACER TOTAL OPERATOR NUMA = TOTAL 
        //"1" "+" "1" "=" (2) "=" (3) "=" (4    )

    } else {
        repeatsEqual = false; //no se si sirve, por las dudas tengamoslo mano
    }
    console.log("esto es current operation" + currentOperation)
    /*
    Cuando toco dos veces equals repite la ultima operación diferente a equals 
    */

    switch (true) {
        case currentOperation.includes("+"): operation.sum();
            break;
        case currentOperation.includes("-"): operation.substract();
            break;
        case currentOperation.includes("X"): alert('es una multiplicación!');
            break;
        case currentOperation.includes("/"): alert('es una division!');
            break;
        case currentOperation.includes("%"): alert('es un porcentaje!');
            break;
        case anydigit[anyDigit.length - 1].includes("="): operation.equals();
            break;
        default: alert('no es un simbolo valido');
    }
    //}
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
            anyDigit.push(numA);

        } else if (isSymbol(digit)) {
            if (!digit.includes("=")) {
                anyDigit.push(digit);
                symbol.push(digit)
                console.log("incluimos este simbolo" + symbol[symbol.length - 1])
                currentOperation = symbol[symbol.length - 1];
            }else{
                anyDigit.push(digit);
            }

            if (symbol[symbol.length - 1] == symbol[symbol.length - 2] && !digit.includes("=") && digit == symbol[symbol.length - 1]) {
                console.log("repitio")
                repeatsSymbol = true;

            } else if (!symbol || digit !== symbol[symbol.length - 1] || anyDigit[anyDigit.length - 1] !== symbol[symbol.length - 1]) {


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