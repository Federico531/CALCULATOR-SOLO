const display = document.getElementById('display')
var isOn = false
var total;
var currentValue;
var values = [];

//var arr = [];

//ARITHMETIC SYMBOLS
document.getElementById('+').addEventListener('click', () => {
    values.push(currentValue)
    currentValue = 0;
    display.value = "0"
    //sumar todo lo que se va acumulando en values[]
    console.log(values)
})

document.getElementById('-')
document.getElementById('/')
document.getElementById('X')
document.getElementById('')

//NUMBER DISPLAY

document.getElementById('calculator').addEventListener('click', (e) => {
    children = e.target.childNodes[0].nodeValue
    children = parseInt(children);
    if (isOn) {
        if (!isNaN(children)) {
            if (display.value == "0") {
                display.value = ""
                display.value += children
            } else {
                display.value += children
                currentValue = display.value
            }
        }
    }
})

document.getElementById("on/c").addEventListener('click', () => {
    isOn = true;
    display.value = "0"
    if (isOn) {
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