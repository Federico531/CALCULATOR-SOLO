//FUNCIONA!!!
//ASSIGN numA, operator, numB 
//SOLO LOGICA SEPARADA

var numA;
var numB;
var operator;
var total;
var lastOperator;
var repeatsOperation = false;

class Operation {
    sum() {
        total = parseInt(numA) + parseInt(numB)
        console.log("result: " + total);
    }
    substract() {
        total = parseInt(numA) - parseInt(numB)
    }
}
document.getElementById("enter").addEventListener('click', (e) => {
    var digit = document.getElementById("input").value
    assignDigits(digit);
    console.log("vengo despues " + digit)
    document.getElementById("input").value = ""
    e.preventDefault();

})
function assignDigits(digit) {
    if (!numA && isNumber(digit)) {
        numA = digit;
        console.log("assigned numA: " + numA)
    } else if (numA && !operator && isSymbol(digit) || operator && operator == lastOperator && isSymbol(digit)) {
        operator = digit
        console.log("este es lastoperatore" + lastOperator)
        if (lastOperator == operator) {
            alert("repeats " + lastOperator)
        } else {
            lastOperator = operator;
            console.log("assigned operator: " + operator)

        }

    } else if (numA && operator && !numB && isNumber(digit)) {
        numB = digit
        console.log("assigned numB: " + numB)
        whatOperation(operator)
        numA = total
        operator = "";
        numB = "";
        console.log("All empty \nnumA:" + numA + "\nOperator: " + operator + "\nnumB: " + numB)
        console.log("este es lastoperator" + lastOperator)
    } else if (lastOperator == digit) {
        alert("repite " + operator)

    }
}
function operation(numA, operator, numB) {
    if (operator == "+") {
        display.value = numA + numB
    }
}
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
function whatOperation(digit) {
    const operation = new Operation();
    switch (true) {
        case digit.includes("+"): operation.sum();
            break;
        case digit.includes("-"): operation.substract();
            break;
        case digit.includes("X"): alert('es una multiplicación!');
            break;
        case digit.includes("/"): alert('es una division!');
            break;
        case digit.includes("%"): alert('es un porcentaje!');
            break;
        case digit.includes("="): alert("es un igual!");
            break;
        default: alert('no es un simbolo valido');
    }
}