function escribe(texto) {
    document.getElementById("main").innerHTML = texto;
    console.log(texto);
}

escribe ("Hola Mundo");

escribe ("<button onclick='alert(\"Hola Mundo\"); escribe(\"Hola otra vez\")'>Pulsame</button>");

//Al separar el codigo en funciones, podemos reutilizar el codigo en otras partes de la pagina.
//Por ejemplo, en la pagina de notas, podemos reutilizar el codigo de la funcion escribe() para escribir en el html.
//Al usar el onclick del button podemos ejecutar varias acciones una detras de otras separadas por punto y coma.

let i = 0;
function escribe2(texto) {
    document.getElementById("main").innerHTML = texto;
    i++;
    if (i>100){
        return;
    }
    setTimeout(escribe2(i) , 100);
    console.log(texto);
}

function escribe3(texto2) {
    document.getElementById("main").innerHTML = texto2;
    i++;
    if (i>100){
        return;
    }
    setTimeout(function(){escribe3("Hola Mundo"+" "+i)}, 100);
}

