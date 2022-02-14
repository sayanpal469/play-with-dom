let count = 0;

function plus() {
    count++
    controll('count')
}

function minus() {
    count--
    controll('count')
}

function controll(id) {
    document.getElementById(id).innerText = count;
}