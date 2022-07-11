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
            <il>Nombre: <?php echo $_POST['nombre']; ?><br></il>
            <il>Edad: <?php echo $_POST['edad']; ?><br></il>
            <il>Sexo: <?php echo $_POST['sexo']; ?><br></il>
            <il>Email: <?php echo $_POST['email']; ?><br></il>
            <il>Pais: <?php echo $_POST['pais']; ?><br></il>
            <il>Profesion: <?php echo $_POST['profesion']; ?><br></il>
            <il>Intereses: <?php echo $_POST['intereses']; ?><br></il>
            <il>Comentarios: <?php echo $_POST['comentarios']; ?><br></il>
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
            <input type="radio" name="sexo" value="Mujer">Mujer<br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email"><br>
            <label for="pais">Pais:</label>
            <input type="text" name="pais" id="pais"><br>
            <label for="profesion">Profesion:</label>
            <input type="text" name="profesion" id="profesion"><br>
            <label for="intereses">Intereses:</label>
            <input type="text" name="intereses" id="intereses"><br>
            <label for="comentarios">Comentarios:</label>
            <textarea name="comentarios" id="comentarios" cols="30" rows="10"></textarea><br>
            <input type="submit" value="Enviar">
    <?php } ?>

</body>

</html>