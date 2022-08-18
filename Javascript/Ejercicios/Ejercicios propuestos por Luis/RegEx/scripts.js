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
}

let formulario = document.getElementById("dni");

formulario.onsubmit = function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datosForm = Object.fromEntries(formData);
    const validaDNI = /^[0-9]{8}[-]{1}[aA-zZ]{1}$/;
    const datosDNI = datosForm.DNI || false;
    if (!datosDNI || !validaDNI.test(datosDNI)) {
        alert("El DNI no es válido");
        location.reload();
    }
}