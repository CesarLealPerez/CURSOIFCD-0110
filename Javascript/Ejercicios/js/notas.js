let nota;   //declaramos la variable edad

nota = prompt("Introduce tu nota"); // le asignamos a la variable edad el valor que introduzca el usuario a traves de la modal que creamos con el prompt

console.log(nota); // imprimimos en la consola el valor de la variable edad

if (Number(nota) == nota && nota < 10) {
    if (nota == 0) { // si la edad es menor a 18
        alert("No te has presentado a los examenes?"); // mostramos una alerta
        window.location.reload(); // recargamos la pagina
    }
    else if (nota < 5) { // si la nota es menor a 5
        alert("Tu nota es de INSUFICIENTE.\nHas suspendido el curso"); // mostramos una alerta
        window.location.reload(); // recargamos la pagina
    }
    else if (5 <= nota < 6) { // si la nota es menor a 6
        alert("Tu nota es de SUFICIENTE. \nNecesitas mejorar."); // mostramos una alerta
    }
    else if (6 <= nota < 7) { // si la nota es menor a 7
        alert("Tu nota es de BIEN. \nNecesitas mejorar un poco."); // mostramos una alerta
    }
    else if (7 <= nota < 8) { // si la nota es menor a 8
        alert("Tu nota es de NOTABLE. \nMuy bien hecho."); // mostramos una alerta
    }
    else if (8 <= nota < 10) { // si la nota es menor a 10
        alert("Tu nota es de SOBRESALIENTE. \nFelicidades."); // mostramos una alerta       
    }
    else if (nota == 10) { // si la nota es igual a 10
        alert("Tu nota es de MATRICULA. \nFelicidades."); // mostramos una alerta
    }
    document.getElementById("main").innerHTML = `<h2>Enhorabuena!! Tu nota es de: </h2> <h1>${nota}</h1>`; // imprimimos en el html el valor de la variable edad
} else {
    alert("Introduce una nota valida"); // si el usuario no introduce un valor numerico, le mostramos una alerta
    window.location.reload(); // recargamos la pagina
}