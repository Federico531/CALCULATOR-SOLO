const display = document.getElementById('display')
var isOn = false
var currentValue;
var values = [];
var total = 0;
var symbol = [];
var count = 0;
class Operation {
    sum() {
        currentValue = display.value
        values.push(parseInt(currentValue))
        display.value = ""
        currentValue = 0;
        total += values[values.length - 1];
        display.value = total;
    }
    substract() {
    }
    multiply() {
    }
    divide() {
    }
    equials() {

    }
}

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {
    const operation = new Operation();
    operation.sum();
})
document.getElementById('-')
document.getElementById('/')
document.getElementById('X')
document.getElementById('%')

document.getElementById('=').addEventListener('click', () => {
    const operation = new Operation();
    var lastSymbol = symbol[symbol.length - 1];

    switch (true) {
        case lastSymbol.includes("+"): operation.sum();

            break;
        case lastSymbol.includes("-"): alert('es una resta!');
            break;
        case lastSymbol.includes("X"): alert('es una multiplicación!');
            break;
        case lastSymbol.includes("/"): alert('es una division!');
            break;
        case lastSymbol.includes("%"): alert('es un porcentaje!');
            break;
        default:
            alert('no es un simbolo valido');
    }
    display.value = total;
})




//NUMBER DISPLAY

document.getElementById('calculator').addEventListener('click', (e) => {
    var digit = e.target.childNodes[0].nodeValue
    //ME ESTA DEVOLVIENDO QUE CON ES DIGIT Y QUE "" ES DIGIT
    console.log(digit)
    if (isOn) {
        if (isNumber(digit) && !isSymbol(digit) && count != 1) {
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
            symbol.push(digit);
            console.log(digit)
            console.log("isSymbol")
        } else {
            console.log("NO ES NADA")
        }
    }
})

function isNumber(digit) {
    const zero = digit.includes('0')
    const one = digit.includes('1')
    const two = digit.includes('2')
    const three = digit.includes('3')
    const four = digit.includes('4')
    const five = digit.includes('5')
    const six = digit.includes('6')
    const seven = digit.includes('7')
    const eight = digit.includes('8')
    const nine = digit.includes('9')
    if (zero || one || two || three || four || five || six || seven || eight || nine) {
        return true
    } else {
        return false
    }
}

function isSymbol(digit) {
    var sums = digit.includes("+");
    var substracts = digit.includes("-");
    var multiplies = digit.includes("X");
    var divides = digit.includes("/");
    var percentages = digit.includes("%");

    if (sums || substracts || multiplies || divides || percentages) {
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
        //MAKE TOAST 
        console.log("apagado")
    }
})