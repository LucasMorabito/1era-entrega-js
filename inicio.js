function Dólares () {
    const valorPesos = parseInt(prompt ('ingrese su cantidad en pesos'))
    const valorDolares = 950;
    const resultado = valorPesos / valorDolares
    alert ('Tienes' + ' ' + resultado + ' ' + 'Dólares')
}

function Euros () {
    const valorPesos = parseInt(prompt ('ingrese su cantidad en pesos'))
    const valorEuros = 1000;
    const resultado = valorPesos / valorEuros
    alert ('Tienes' + ' ' + resultado + ' ' + 'Euros')
}

function saludar () {
    const nombre = prompt('Ingrese su nombre y apellido')
    alert ('Hola' + ' ' + nombre + ' ' + '¿Como estás?' + ' ' + 'En esta página podrás hacer conversiones de divisas de Pesos a Dólares o de Pesos a Euros')
}
saludar()

let opcion = parseInt(prompt('Elija una opción:  \n 1- Dólares \n 2- Euros'));

while(opcion !== 5){
    switch(opcion){
        case 1:        
            Dólares()
            break;
        case 2:
            Euros()
            break;
    }
}