
<!DOCTYPE html>
<html lang="es">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>WinKnow - Registro Usuarios</title>
</head>

<body>
    <form id="form-user-register">
        <select name="tipo-usuario">
            <option value="docente">Docente</option>
            <option value="administrador">Administrador</option>
            <option value="estudiante">Estudiante</option>
        </select>

        <!-- Inputs en comun -->
        <input name="nombre" maxlength="50" placeholder="Nombre" required> <!-- 50 por la base de datos: Nombre_usr VARCHAR(50)-->
        <input name="cedula" minlength="8" maxlength="8" placeholder="Cedula" required>
        <input name="contrasena" type="password" minlength="8" maxlength="50" placeholder="Contrasena" required>


        <!-- Esto se rellena de inputs dependiendo del tipo de usuario seleccionado -->
        <!-- Le pongo contextuales porque dependen del usuario, los inputs de arriba aparecen para todos los tipos de usuarios --> 
        <div name="inputs-contextuales"></div>

        <input type="submit" value="Registrar">
    </form>

    <!-- Estas son plantillas que el js copiara y pegara dentro del div 'inputs-contextuales' -->
    <template id="inputs-docente">
        <input name="grado" type="number" min="0" placeholder="Grado" required>
    </template>

    <template id="inputs-admin">
    </template>

    <template id="inputs-estudiante">
        <input name="fecha-nacimiento" type="date" required>
    </template>

    <!-- js que controla esta pagina -->
    <script src="js/form_user_register.js"></script>
</body>

</html>