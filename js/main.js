function validarNombre(nombre){
    if (nombre.length === 0){
        return 'Este campo debe tener al menos un caracter';
    }
    if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras'
    }

    return ''
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'La ciudad debe tener al menos un caracter'
    }
    return ''
}

function validarRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return "El regalo debe tener al menos un caracter"
    }
    if (descripcionRegalo.length >= 100){
        return 'El regalo debe tener menos de 100 caracteres'
    }
    return ''
}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa')

    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const descripcionRegalo = $form["descripcion-regalo"].value

    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorDescripcionRegalo = validarRegalo(descripcionRegalo)

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0

    if(esExito){
        $form.className = 'oculto'
        document.querySelector('#exito').className = ''
    }

    event.preventDefault()
}

function manejarErrores(errores){

    const llaves = Object.keys(errores)
    const $errores = document.querySelector('#errores')

    let cantidadErrores = 0

    llaves.forEach(function(llave){
        const error = (errores[llave])

        if(error){
            cantidadErrores ++;
            $form[llave].className = 'error'

            const $error = document.createElement('li');
            $error.innerText = error
            $errores.appendChild($error)

        } else {
            // TAREA: EN ESTE ELSE BORRAR EL CAMPO ADECUADO
            $form[llave].className = ''
        }
    })

    return cantidadErrores
}

const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarFormulario;

/*

Tarea clase 8: 
1- A las tareas de la clase 6, hacer las validaciones y pruebas necesarias. Usar RegEx, objetos, forEach, poner estilos,
    mostrar los errores en la interfaz de usuario y hacer lo mismo con el éxito.
    Escribir pruebas. 
    Las edades no pueden tener decimales.
2- Arreglar bug del formulario, que cuando se envía la carta con algún error por segunda vez, se vuelven a imprimir
    los errores
3- Hacer el último punto del nivel 1, donde el mensaje de éxito se muestra 5 segundos y se redirecciona a wishlist.html


*/