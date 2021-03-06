const display = document.getElementById('display')
var isOn = false
var currentValue;
var values = [];
var total = 0;

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {


    values.push(parseInt(currentValue))
    display.value = ""
    //display.value = currentValue //INVERSION A
    currentValue = 0; 
    console.log(values)
    if (values.length == 1) {
        total = values[0];
    } else if (values.length == 2) {
        total = values[0] + values[1]
    } else if (values.length > 2) {
        total += values[values.length - 1];
    }
    display.value = total;
    console.log(total)

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
            if (display.value === "0") {
                display.value = ""
                display.value += children
            } else {
                //NO SUMA DE A UN DÍGITO POR ALGUNA RAZON
                  if(values[values.length -1] == display.value || display.value == total){
                    display.value = "";
                    display.value += children
                  } else {
                    display.value += children  
                    currentValue = display.value//B, estoy teniendo una inversion 
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