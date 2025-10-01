// const pq no vamos a cambiar el valor
const formulario = document.getElementById("form-user-register");

formulario.addEventListener('submit', enviarFormulario);

// await se utiliza ya que las funciones fetch y json no se ejecutan inmediatamente.
// debemos usar await para esperar a que el resultado este pronto
async function enviarFormulario(event)
{
    let datosFormulario = new FormData(formulario);         // Obtenemos los datos del formulario
    let tipoUsuario = datosFormulario.get('tipo-usuario');  // Obtener: tipo-usuario
    let cedula = datosFormulario.get('cedula');             // Obtener: cedula

    // Validar la cedula
    let errorCedula = obtenerErrorCedula(cedula);           // contiene un string indicando el error o null si no hay problemas
    if(errorCedula != null)                                 // En el caso de que hayan errores
    {
        // Notificacion de error, usando 'errorCedula' como texto del mensaje
        Swal.fire({
            title: 'Error!',
            text: errorCedula,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }

    let peticion = {method: 'POST', body: datosFormulario};                 // Creamos una peticion del tipo POST
    let respuesta = await fetch(peticion, '/back/php/user_register.php');   // Hacemos la peticion y esperamos una respuesta
    respuesta = await respuesta.json();                                     // Decodificamos la respuesta, la cual es un json.
}
