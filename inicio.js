function nombreUsuario() {
    let Usuario;
    while(true) {
        Usuario = prompt('Hola! Ingrese su nombre de usuario');
        if (Usuario) {
            break;
        } else {
            alert('Por favor, ingrese un nombre para continuar');
        }
    }
    return Usuario;
}

const nombre = nombreUsuario();
alert('Bienvenido, ' + nombre + ' a mi carrito de productos para tu SetUp');


const precios = {
    Auriculares: 14000,
    SillaGamer: 78000,
    Teclado: 19000,
    Mouse: 13000,
    MousePad: 7000
};

const productos = [
    { id: 1, nombre: 'Auriculares', precio: precios.Auriculares },
    { id: 2, nombre: 'SillaGamer', precio: precios.SillaGamer },
    { id: 3, nombre: 'Teclado', precio: precios.Teclado },
    { id: 4, nombre: 'Mouse', precio: precios.Mouse },
    { id: 5, nombre: 'MousePad', precio: precios.MousePad }
];

const mostrarMenuProductos = () => {
    let catalogo = 'Catálogo de productos:\n';
    productos.forEach(producto => {
        catalogo += `${producto.id}. ${producto.nombre} - $${producto.precio.toLocaleString()} pesos\n`;
    });

    alert(catalogo);
};

const obtenerProducto = (id) => productos.find((producto) => producto.id === id);

const mostrarProducto = (producto) => {
    alert(`Producto seleccionado:\nNombre: ${producto.nombre}\nPrecio: $${producto.precio.toLocaleString()} pesos`);
};

const calcularTotalCompra = (productosElegidos) => {
    return productosElegidos.reduce((total, producto) => total + producto.precio, 0);
};

const mostrarDespedida = (totalCompra) => {
    const mensaje = totalCompra > 0
        ? `El total de la compra es: $${totalCompra.toLocaleString()} pesos.`
        : 'No se ha realizado ninguna compra.';
    
    alert(`Gracias por su compra. ${mensaje} ¡Hasta luego!`);
};

const realizarCompra = () => {
    const productosElegidos = [];

    while (true) {
        mostrarMenuProductos();

        let productoElegido = parseInt(prompt('Ingrese el número del producto que quiere comprar'));

        if (isNaN(productoElegido)) {
            break;
        }

        const producto = obtenerProducto(productoElegido);

        if (producto) {
            productosElegidos.push(producto);
            mostrarProducto(producto);
        } else {
            alert('Producto no encontrado. Por favor, seleccione un número válido del catálogo.');
        }
    }

    return productosElegidos;
};

const productosElegidos = realizarCompra();
const totalCompra = calcularTotalCompra(productosElegidos);
mostrarDespedida(totalCompra);
