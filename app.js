const display = document.getElementById('display')
var isOn = false
var currentValue;
var values = [];
var total = 0;

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {

    currentValue = display.value
    values.push(parseInt(currentValue))
    display.value = ""
    currentValue = 0;
    total += values[values.length - 1];
    display.value = total;
})

document.getElementById('-')
document.getElementById('/')
document.getElementById('X')
document.getElementById('')

//NUMBER DISPLAY

document.getElementById('calculator').addEventListener('click', (e) => {
    digit = e.target.childNodes[0].nodeValue
    digit = parseInt(digit);
    if (isOn) {
        if (!isNaN(digit)) {
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
        }
    }
})

document.getElementById("on/c").addEventListener('click', () => {
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
        console.log("apagado")
    }
})