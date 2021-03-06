const display = document.getElementById('display')
var isOn = false
var currentValue;
var values = [];
var total = 0;
var symbol= []; 

class Operation {
    sum(){
        currentValue = display.value
        values.push(parseInt(currentValue))
        display.value = ""
        currentValue = 0;
        total += values[values.length - 1];
        display.value = total;
    }
    substract(){
    }
    multiply(){
    }
    divide(){
    }
    equials(){

    }
}

//ARITHMETICS
document.getElementById('+').addEventListener('click', () => {
const operation = new Operation();
operation.sum();
})

document.getElementById('=').addEventListener('click', () => {
    var lastSymbol = symbol[symbol.length - 1 ]; 
    var sums = lastSymbol.includes("+");
    var substracts = lastSymbol.includes("-");
    var multiplies = lastSymbol.includes("X");
    var divides = lastSymbol.includes("/");
    var percentage = lastSymbol.includes("%");
    
    switch (true) {
        case sums:alert('es una suma!');
        break;
        case substracts:alert('es una resta!');
        break;
        case multiplies:alert('es una multiplicación!');
        break;
        case divides:alert('es una division!');
        break;
        case percentage:alert('es un porcentaje!');
        break;
        default:
            alert('no es un simbolo valido');
    }
    
    if(includes){
    alert('funca')
}
    //children, case + - / x  --> execute class method

    //ELABORAR ESTE REFACTORING
    //PODRIA HACER SWITCH CASES ACORDE A UNA CONDICION Y EN ESE CASO EJECUTA LA FUNCION QUE DA DETERMINADO TOTAL?
    display.value = total;
})
document.getElementById('-')
document.getElementById('/')
document.getElementById('X')


//NUMBER DISPLAY

document.getElementById('calculator').addEventListener('click', (e) => {
    digit = e.target.childNodes[0].nodeValue
    console.log(digit)
    if (isOn) {
        if (!isNaN(digit)) {
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
        }else{ //QUE NO HAGA PUSH DE LOS SIMBOLOS DIFERENTES A +, -, /, X, %
               //SINO VA A CONFUDIR LOS SWITCH Y ME APARECE NaN en pantalla
           symbol.push(digit);
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
        //MAKE TOAST 
        console.log("apagado")
    }
})