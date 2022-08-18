//header y footer

async function insertaHeader(){
    let header = await fetch('header.html');
    let html = await header.text();

   document.getElementById('header').innerHTML = html;

}


async function insertaFooter(){
    let footer = await fetch('footer.html');
    let html = await footer.text();

   document.getElementById('footer').innerHTML = html;

}

window.onload = insertaHeader (); 
window.onload = insertaFooter ();

//contador de turnos
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

//Cuenta atras:
// Seleccionamos la fecha limite pero para el año vamos a crear una variable y para la edad otra.
// Asi hacemos que sea un contador perpetuo
var edad = 44;
var year = 2022;
var countDownDate = new Date(`Sep 5, ${year} 00:00:00`).getTime();

// Actualizamos cada segundo el contenido
var x = setInterval(function () {

    // Conseguimos el timestamp actual
    var now = new Date().getTime();

    // Calculamos la diferencia
    var distance = countDownDate - now;

    // Pasamos la diferencia a dias, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // insertamos el resultado en el html del id="contador"
    document.getElementById("contador").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    document.getElementById("edad").innerHTML = `Cuenta atras para los ${edad}`;

    // Al acabar la cuenta atras se escribe un texto
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "A volver a empezar";
        countDownDate = new Date(`Sep 5, ${year + 1} 00:00:00`).getTime();
        edad = edad + 1;
    }
}, 1000);

//marcador de deportes


async function insertaEquipos() {
    let equipo1 = prompt("Introduce el nombre del equipo 1");
    let equipo2 = prompt("Introduce el nombre del equipo 2");
    console.log(equipo1);
    console.log(equipo2);

    document.getElementById("equipo1").innerHTML = nombreEquipo1;
    document.getElementById("equipo2").innerHTML = nombreEquipo2;
}
window.addEventListener('keyUp', event => { insertaEquipos() });


//pagina de contacto

function checkboxControl() {
    if (document.getElementById("checkbox").checked) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}

function opciones() {

    if (document.getElementById("Todas").checked) {

        document.getElementById("html").checked = true;
        document.getElementById("javascript").checked = true;
        document.getElementById("php").checked = true;
        alert("Has seleccionado todas las opciones");

    }

    else if (document.getElementsByName("opcion1"&&"opcion2"&&"opcion3").checked) {
        document.getElementById("Todas").checked = true;
    }else{
        document.getElementById("Todas").checked = false;
    }
}