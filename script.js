// Función para generar un color aleatorio entre 0 y 255
function generarColor() {
    return Math.floor(Math.random() * 256);
}

// Función para aplicar 3 colores aleatorios (verde, azul, rojo) a una etiqueta
function aplicarColoresAleatorios(elemento) {
    // Selecciona aleatoriamente entre verde, azul y rojo
    const colores = ['verde', 'azul', 'rojo'];
    const colorSeleccionado = colores[Math.floor(Math.random() * colores.length)];

    // Asigna el color correspondiente a la etiqueta HTML
    switch (colorSeleccionado) {
        case 'verde':
            elemento.style.color = `rgb(0, ${generarColor()}, 0)`;
            break;
        case 'azul':
            elemento.style.color = `rgb(0, 0, ${generarColor()})`;
            break;
        case 'rojo':
            elemento.style.color = `rgb(${generarColor()}, 0, 0)`;
            break;
        default:
            break;
    }
}

// Asignar evento de clic a todas las etiquetas h3
const h3Elements = document.querySelectorAll('h5');
h3Elements.forEach(function (element) {
    element.addEventListener('click', function() {
        aplicarColoresAleatorios(element);
        element.style.cursor = 'pointer';
    });
});
