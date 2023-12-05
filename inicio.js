// Utilización del IF

let edad = prompt ("Ingrese su edad")

if (edad >= 18) {
    alert("¡Felicidades!, sos mayor de edad, podes ingresar :)")
} else {
    alert("Lo siento, sos menor de edad, no podes ingresar :(")
}

// Utilización del FOR

for (let x = 0; x < 10; x++) {
    console.log("Este es el ciclo número " + x);
}

// Utilización de funciones

function saludar (nombre, apellido) {
    console.log("hola " + nombre + " " + apellido + ", " + "¿Cómo estas?")
}

saludar("Lucas", "Morabito")
