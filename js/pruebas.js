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
        validarNombre('') === 'El nombre debe tener al menos un caracter',
    'La función no invalidó un nombre vacío')

    console.assert(
        validarNombre('11111111111111111111111111111111111111111111111111') === 
    'El nombre debe tener menos de 50 caracteres', 'La función no invalidó un nombre de 50 o más caracteres')

    console.assert(
        validarNombre('123123') === 'El campo nombre solo acepta letras',
        'validarNombre no validó que el nombre solo tenga letras'
    )

    console.assert(
        validarNombre("Juan") === '', 'La función validarNombre no validó un nombre correcto')
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
        validarRegalo('Quiero dos bicicletas, cuatro trencitos, doscientas pizzas y veinte empanadas de jamón y queso. Lo quiero todo ahora.')
        ===  'El regalo debe tener menos de 100 caracteres', 'validarRegalo no invalidó un pedido mayor a 99 caracteres'
    )

    console.assert(
        validarRegalo('bicicleta') === '', 'validarRegalo no validó un regalo correcto'
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();
