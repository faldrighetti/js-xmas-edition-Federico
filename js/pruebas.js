//TAREA: Validar que la ciudad y el regalo no sean vacíos

//validarCiudad()
//validarDescripcionRegalo()

//Crear las pruebas para las validaciones
//Escribir pruebas para las funciones de las tareas 5 y 6

/*function sumar(a,b){
    return a + b
}

console.assert(sumar(1,2) === 3, 'La suma de 1+2 no da 3')*/

function probarValidarNombre(){
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'validarNombre no validó que el nombre no sea vacío')

    console.assert(
        validarNombre('UBUIBIOSDIFOIDFOIOBBIDBIDAIBOSFDSIOBSDBIODFSIODHGS') === 'Este campo debe tener menos de 50 caracteres',
        'validarNombre no funcionó con un string mayor a 50 caracteres')

    console.assert(
        validarNombre('13232153') === 'El campo nombre solo acepta letras',
        'validarNombre no validó que el nombre solo tenga letras')

    console.assert(
        validarNombre('Federico') === '',
        'validarNombre no funcionó con un nombre válido'
    )
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validarCiudad no funcionó con una ciudad válida'
    )

    console.assert(
        validarCiudad('') === 'Este campo debe tener al menos 1 caracter',
        'validarCiudad no validó que la ciudad no sea vacía')
}

function probarValidarRegalo(){
    console.assert(
        validarRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'validarRegalo no validó que el regalo no sea vacío')

    console.assert(
        validarRegalo('Regalo') === '',
        'validarRegalo no validó un regalo con descripción correcta'
    )

    console.assert(
        validarRegalo(',.,.,.,.') === 'El campo descripción solo puede tener números y letras',
        'La función validarRegalo no validó que fuera solo números y letras'
    )
}
