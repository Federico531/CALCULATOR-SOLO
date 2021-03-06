const display = document.getElementById('display')
var isOn = false
var total;

//var arr = [];

//ARITHMETIC SYMBOLS
document.getElementById('+').addEventListener('click', () => {
    
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
                total = display.value
            } else {
                display.value += children
                total = display.value
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