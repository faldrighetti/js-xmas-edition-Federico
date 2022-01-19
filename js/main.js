const $form = document.querySelector('#carta-a-santa')

const nombre = $form.nombre.value 
const ciudad = $form.ciudad.value
const descripcionRegalo = $form["descripcion-regalo"].value

const errorNombre = validarNombre(nombre)
const errorCiudad = validarCiudad(ciudad)
//const errorDescripcionRegalo = validarRegalo(descripcionRegalo)

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'Este campo debe tener al menos un caracter';
    }
    if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
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
    if (descripcionRegalo.length > 100){
        return 'El regalo debe tener menos de 100 caracteres'
    }
    return ''
}