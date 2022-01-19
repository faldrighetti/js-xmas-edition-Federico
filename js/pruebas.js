//TAREA: Validar que la ciudad y el regalo no sean vacíos

//validarCiudad()
//validarDescripcionRegalo()

//Crear las pruebas para las validaciones
//Escribir pruebas para las funciones de las tareas 5 y 6

function sumar(a,b){
    return a + b
}

console.assert(sumar(1,2) === 3, 'La suma de 1+2 no da 3')

function probarValidarNombre(){
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un caracter',
    'La función no invalidó un nombre vacío')

    console.assert(
        validarNombre('1111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
    'Este campo debe tener menos de 50 caracteres', 'La función no invalidó un nombre de 50 o más caracteres')

    console.assert(
        validarNombre("Juan Perez") === '', 'La función validarNombre no validó un nombre correcto')
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'La ciudad debe tener al menos un caracter',
        'validarCiudad no invalidó un string vacío'
    )

    console.assert(
        validarCiudad('Mendoza') === '', 'validarCiudad no validó una ciudad correcta'
    )
}

function probarValidarRegalo(){
    console.assert(
        validarRegalo('') === 'El regalo debe tener al menos un caracter'
    )

    console.assert(
        validarRegalo('Come on come on come on, come on come on come on, number one party anthem, come on come on come on, before the moment is gone, number one party anthem yeah yeah')
        ===  'El regalo debe tener menos de 100 caracteres', 'validarRegalo no invalidó un pedido mayor a 99 caracteres'
    )

    console.assert(
        validarRegalo('bicicleta') === '', 'validarRegalo no validó un regalo correcto'
    )
}

probarValidarNombre();
probarValidarCiudad();