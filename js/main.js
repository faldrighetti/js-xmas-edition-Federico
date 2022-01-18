function validarNombre(nombre){
    if (nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if(!/^[a-z]+$/.test(nombre)){ //pide que empiece con minúscula. Solo letras  
        return 'El campo nombre solo acepta letras'
    }

    return ''
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return 'Este campo debe tener al menos 1 caracter'
    }
    return ''
}

function validarRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0) {
        return'Este campo debe tener al menos 1 caracter'
    }

    if(descripcionRegalo.length >= 100){
        return 'Este campo debe tener menos de 100 caracteres'
    }

    if(!/^[a-z0-9]+$/i.test(descripcionRegalo))//cualquier letra, cualquier número
    {
        return 'El campo descripción solo puede tener números y letras'
    }
    return ''
}

function validarFormulario(event) {

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
        descripcionRegalo: errorDescripcionRegalo
    }

    manejarErrores(errores)

    event.preventDefault();
}

function manejarErrores(errores){

    const llaves = Object.keys(errores)
    console.log(llaves)

    llaves.forEach(function(llave){
        const error = errores[llave]

        if(error){
            $form[llave].className = 'error'
        }
    })

    /*errorNombre = errores.nombre
    errorCiudad = errores.ciudad
    errorDescripcionRegalo = errores.descripcionRegalo

    if (errorNombre){
        $form.nombre.className = 'error'
    } else {
        $form.nombre.className = ''
    }

    if(errorCiudad){
        $form.ciudad.className = 'error'
    } else{
        $form.ciudad.className = ''
    }
    if (errorDescripcionRegalo){
        $form.descripcionRegalo.className = 'error'
    } else {
        $form.descripcionRegalo.className = ''
    }*/
}

const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarFormulario();