//TESTS
//WHEN I PRESS 1 IT SHOWS ON DISPLAY
const display = document.getElementById('display')
document.getElementById('1').addEventListener('click', ()=>{
    display.value =+ "1"
});

