<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio Formulario</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>

    <?php if (isset($_POST['nombre'])) { ?>
        <!-- HTML -->
        <ul>
            <li>Nombre: <?php echo $_POST['nombre']; ?><br></li>
            <li>Edad: <?php echo $_POST['edad']; ?><br></li>
            <li>Sexo: <?php echo $_POST['sexo']; ?><br></li>
            <li>Email: <?php echo $_POST['email']; ?><br></li>
            <li>Ganas: <?php echo $_POST['dinero']; ?><br></li>
            <li>Te queda: <?php echo $_POST['dinero'] - $_POST['gastos']; ?><br></li>
            <script>
                dinerito();
                function dinerito() {
                    var dinero = <?php echo $_POST['dinero']; ?>;
                    var gastos = <?php echo $_POST['gastos']; ?>;
                    var total = dinero - gastos;
                if (total < 0) {
                    alert("Tienes un problema. No tienes dinero para gastar");
                }   
                }  // Fin de la función dinerito
            </script>
        </ul>
        <button onclick="javascript:history.back()">Volver sin limpiar</button> <!-- Volver a la página anterior pero sin limpiar los datos-->
        <!-- otra opcion del boton volver pero limpiando los datos -->
        <button onclick="volver()">Volver</button>
        <script>
            function volver() {
                window.location.href = "index.php";
            }
        </script>
    <?php } else { ?>
        <!-- HTML Mostramos el formulario action "index.php" -->
        <form action="index.php" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre"><br>
            <label for="edad">Edad:</label>
            <input type="number" name="edad" id="edad"><br>
            <label for="sexo">Sexo:</label>
            <input type="radio" name="sexo" value="Hombre">Hombre
            <input type="radio" name="sexo" value="Mujer">Mujer
            <input type="radio" name="sexo" value="None">No lo quiero decir<br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email"><br>
            <label for="dinero">Cuanto ganas:</label>
            <input name="dinero" type="number">
            <label for="gastos">Cuantos gastas:</label>
            <input name="gastos" type="number"><br>


            <input type="submit" value="Enviar">
    <?php } ?>

</body>

</html>