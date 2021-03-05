
const display = document.getElementById('display')
//var arr = [];

document.getElementById('calculator').addEventListener('click', (e) => {
    children = e.target.childNodes[0].nodeValue
    children = parseInt(children);
    if (!isNaN(children)){
        display.value += children
    }
})


document.getElementById("on/c").addEventListener('click', () => {
    display.value = ""
})