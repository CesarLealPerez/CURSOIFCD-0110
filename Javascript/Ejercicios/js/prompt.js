let edad;   //declaramos la variable edad

edad = prompt("Introduce tu edad"); // le asignamos a la variable edad el valor que introduzca el usuario a traves de la modal que creamos con el prompt

console.log(edad); // imprimimos en la consola el valor de la variable edad

if (Number(edad) == edad) {
    if (edad < 18) { // si la edad es menor a 18
        alert("Eres menor de edad, tienes que tener mas de 18 años para entrar en este sitio"); // mostramos una alerta
        window.location.href = "http://www.google.com"; // redireccionamos a google
    }
    document.getElementById("main").innerHTML = `<h2>Enhorabuena!! Tu edad es </h2> <h1>${edad}</h1>`; // imprimimos en el html el valor de la variable edad
} else {
    alert("Introduce una edad valida"); // si el usuario no introduce un valor numerico, le mostramos una alerta
    window.location.reload(); // recargamos la pagina
}