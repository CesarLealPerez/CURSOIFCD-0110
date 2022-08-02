
var numero = Number(document.getElementById("numero"));

function resta() {
    numero--;
    if (numero < 1) {
        numero = 99;
    }
    if (numero < 10) {
        numero = "0" + numero;
    }
    document.getElementById("numero").innerHTML = numero;
}

function suma() {
    numero++;
    if (numero > 99) {
        numero = 1;
    }
    if (numero < 10) {
        numero = "0" + numero;
    }
    document.getElementById("numero").innerHTML = numero;
}

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
        resta()
    } else if (event.key == "ArrowUp") {
        suma()
    } else if (event.key == "ArrowRight") {
        suma()
    } else if (event.key == "ArrowDown") {
        resta()
    }
});