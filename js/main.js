const $form = document.querySelector('#carta-a-santa')

const nombre = $form.nombre.value 
const ciudad = $form.ciudad.value
const descripcionRegalo = $form["descripcion-regalo"].value

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
