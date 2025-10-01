/*
* Retorna un string que indica cual es el error en la cedula,
* en caso de que no haya ningun error retorna null.
*/
function obtenerErrorCedula(cedula)
{
    if(cedula.length != 8) return "La cedula debe tener 8 numeros";
    return null;
}

function applyFieldValidvidaations()
{
    // Validación de cédula: solo números y no todos iguales
    var cedulaInputs = document.querySelectorAll('input[name="cedula"]');
    cedulaInputs.forEach(function (input) {
    if (input.offsetParent !== null) {
        validateNumericInput(input);

        input.addEventListener('blur', function () {
          var valor = input.value.trim();

          if (valor.length > 0) {
            if (/^(\d)\1+$/.test(valor)) {
              mostrarError(input, 'La cédula no puede tener todos los números iguales');
            } else {
              limpiarError(input);
            }
          } else {
            limpiarError(input);
          }
        });
      }
    }
    );
}