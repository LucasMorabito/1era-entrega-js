let hora = prompt('ingrese su hora actual')

if (hora>=6 && hora<=12){
    alert('Hola!, Buenos dias')
}else if(hora>=13 && hora<=18){
    alert('Hola!, Buenas tardes')
}else{
    alert('Hola!, Buenas noches')
}

function conversorDolar () {
    const dolar = 950
    let pesos = parseInt(prompt ( 'ingrese la cantidad en pesos'))
    let resultado = pesos / dolar
    alert ('tienes un total de' + ' ' + resultado + ' ' + 'dólares')
}

function conversorEuro (moneda, valor ) {
    let  pesos = parseInt(prompt('ingrese la cantidad en pesos'))
    const euro = 1100
    let resultado = pesos / euro
    alert ('tienes un total de' + ' ' + resultado + ' ' + 'euros')
}

let opcion = parseInt(prompt('Elija una opción:  \n 1- Dólares \n 2- Euros'));

while(opcion !==3){
    switch(opcion){
        case 1:        
            conversorDolar()
            break;
        case 2:
            conversorEuro()
            break;

        case 3:

            
        default: alert('numero no valido')
    }
    
}