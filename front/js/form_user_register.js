// const pq no vamos a cambiar el valor
const formulario = document.getElementById("form-user-register");

formulario.addEventListener('submit', async event => {
    let datosFormulario = new FormData(formulario);         // Obtenemos los datos del formulario
    let tipoUsuario = datosFormulario.get('tipo-usuario');  // Obtener: tipo-usuario
    let cedula = datosFormulario.get('cedula');             // Obtener: cedula

    if(!validarCedula(cedula))
    {
        Swal.fire({
            title: 'Error!',
            text: 'La cedula no es valida',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }

    

    let peticion = {method: 'POST', body: datosFormulario}; // Creamos una peticion del tipo POST
    let respuesta = await fetch(peticion, '/back/php/user_register.php'); // Hacemos la peticion y esperamos una respuesta
    respuesta = await respuesta.json(); // Decodificamos la respuesta, la cual es un json.

});
